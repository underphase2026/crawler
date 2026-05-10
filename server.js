const express = require('express');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 용량 제한 해제 (50MB) 설정
app.use(express.json({ limit: '50mb' }));

app.post('/api/parse', (req, res) => {
  const { rawHtml, carrier, category, productName, productCode } = req.body;

  if (!rawHtml || !carrier || !category || !productName) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  try {
    const $ = cheerio.load(rawHtml);

    // 1. Noise Reduction (노이즈 제거)
    // 불필요한 스크립트, 모달, 푸터, 추천 상품 영역, 스타일, 이미지 등 제거
    $('script, noscript, iframe, style, link, meta, title, img').remove();
    
    // 추가로 통신사 공통/특정 노이즈 클래스나 ID 제거 (유동적으로 추가 가능)
    // LGU+ 특징: 반응형 구조로 PC버전(.pc-cv-box)과 모바일버전(.mo-cv-box)이 거의 같은 내용을 중복으로 가짐 -> .mo-cv-box 스크랩에서 제외
    $('#recommService, .popup_wrap, .modal, footer, header, nav, .menu, .gnb, .lnb, .mo-cv-box').remove();

    
    // 공통 셀렉터 및 상태 관리 (모든 추출 함수에서 공유)
    const selector = 'h1, h2, h3, h4, h5, h6, strong, p.title, p.tit, p.ttl, p.h4, p.h5, p.c-tabcontent-tit, p.sv-tit, p.faq-tit, p.h-style, dt, .seo-improve-heading, .adaptive-tab-tit';
    const specificContainers = '.c-page-section, .html__container, .c-accordion-group, dl.cv-exp-list, .cv-sv-group, .price-information-area, .detail-plan-area, .tab-toggle-area, .inner, .column, .section, .accordions, .adaptive-visualization, .divDetailInfoContents';
    const processed = new Set(); 

    const extractSectionHTML = (keywords) => {
      let combinedHtml = [];
      const allHeaders = $(selector);

      allHeaders.each((i, header) => {
        if (processed.has(header)) return;

        const hText = $(header).text().replace(/\s+/g, '');
        const isMatch = keywords.some(k => hText.includes(k.replace(/\s+/g, '')));

        if (isMatch) {
          // 해당 헤더를 포함하는 가장 적절한 컨테이너 찾기
          let container = $(header).closest(specificContainers);
          
          if (container.length === 0) {
            // SKT 특화: .adaptive-tab-tit 헤더인 경우, 그에 대응하는 .divDetailInfoContents 찾기
            if ($(header).hasClass('adaptive-tab-tit')) {
              const rootTab = $(header).closest('.adaptive-tab');
              if (rootTab.length > 0) {
                // 부모 .adaptive-tab의 다음 형제 중 .divDetailInfoContents 찾기 (코멘트 노드 건너뜀)
                let next = rootTab.next();
                while (next.length > 0) {
                  if (next.hasClass('divDetailInfoContents')) {
                    container = next;
                    break;
                  }
                  // 다음 탭이나 다른 헤더를 만나면 중단
                  if (next.hasClass('adaptive-tab')) break;
                  next = next.next();
                }
              }
            }
          }

          if (container.length === 0) {
            container = $(header).closest('.pc-cv-box, section, .inner-cont');
          }
          
          let contentToJoin = "";
          if (container.length > 0) {
            // 이미 처리된 컨테이너인 경우 스킵 (중복 추출 방지)
            if (processed.has(container[0])) return;

            // 컨테이너 전체를 추출
            contentToJoin = $.html(container);
            // 해당 컨테이너 내부의 모든 헤더들을 '처리됨'으로 표시
            container.find(selector).each((j, inner) => processed.add(inner));
            // 헤더 자신과 그 내부 요소들도 표시
            $(header).find(selector).each((j, inner) => processed.add(inner));
            processed.add(header);
            processed.add(container[0]); // 컨테이너 자체도 표시
          } else {
            // 컨테이너가 없는 경우, 헤더부터 다음 헤더 전까지의 형제 노드들을 수집
            let fragments = [$.html(header)];
            // 헤더 내부 요소들도 표시
            $(header).find(selector).each((j, inner) => processed.add(inner));
            
            let next = $(header).next();
            while (next.length > 0 && !allHeaders.is(next)) {
              fragments.push($.html(next));
              // 만약 next 노드 내부에 다른 헤더가 있다면 그것도 처리됨 표시
              next.find(selector).each((j, inner) => processed.add(inner));
              next = next.next();
            }
            contentToJoin = fragments.join('\n');
            processed.add(header);
          }
          
          if (contentToJoin) {
            combinedHtml.push(contentToJoin);
          }
        }
      });
      
      // 주석 기반 추출 (헤더가 없고 주석에만 키워드가 있는 특수 케이스 대응)
      if (combinedHtml.length === 0) {
          $('*').contents().each((idx, el) => {
            if (el.type === 'comment') {
              const cData = el.data.replace(/\s+/g, '');
              const isMatch = keywords.some(k => cData.includes(k.replace(/\s+/g, '')));
              if (isMatch) {
                const parent = $(el).parent();
                if (parent.length > 0 && !processed.has(parent[0])) {
                  combinedHtml.push($.html(parent));
                  processed.add(parent[0]);
                }
              }
            }
          });
      }

      return combinedHtml.join('\n<hr class="section-divider">\n').trim();
    };

    // [Pre-capture] KT - Capture forte-area first for details
    let details = "";
    const forte = $('.forte-area').first();
    if (forte.length > 0) {
        const section = forte.closest(specificContainers).length > 0 ? forte.closest(specificContainers).first() : forte;
        if (!processed.has(section[0])) {
            details = $.html(section);
            processed.add(section[0]);
            // 해당 섹션 내부의 모든 하위 헤더들을 '처리됨'으로 표시 (중복 추출 방지)
            section.find(selector).each((i, el) => processed.add(el));
            
            // 컨테이너가 inner라면 detail-plan-area/column도 처리된 것으로 간주
            const parentContainer = section.closest('.detail-plan-area, .column');
            if (parentContainer.length > 0) {
                processed.add(parentContainer[0]);
                parentContainer.find(selector).each((i, el) => processed.add(el));
            }
        }
    }

    let notices = extractSectionHTML(["꼭 확인하세요", "꼭확인하세요", "유의사항", "주의사항", "꼭알아두세요", "알려드립니다", "가입 및 유의사항", "유의 사항", "안내 사항", "안내사항", "서비스의 종료/해지 및 유의사항", "이용 시 유의사항"]);
    let usageGuidelines = extractSectionHTML(["가입 및 해지", "가입/해지", "가입방법", "신청방법", "가입및해지", "가입/해지안내", "이용방법", "서비스 이용방법", "서비스 이용 방법", "서비스안내", "상세 안내", "데이터 공유 안내", "서비스 지원 단말", "지원 단말", "기능 안내", "서비스 기능 안내", "상세 이용안내", "ARS 안내", "PIN등록 안내", "이용방법 안내", "050 개인 안심번호 상세 안내", "가입안내", "이용방법", "이용내역 확인", "조회 방법", "철회 방법", "보상 절차", "보상 신청", "제출 서류"]);
    
    let additionalDetails = extractSectionHTML(["서비스내용", "서비스특징", "기능", "주요기능", "상세기능", "이용혜택", "주요혜택", "데이터이용기준", "이용요금", "요금안내", "요금 안내", "요금제", "혜택안내", "혜택", "서비스대상", "가입조건", "가입제한대상", "제공 혜택", "청구항목안내", "청구항목 안내", "상품 청구항목안내", "이런 점이 좋아요", "특징", "상세 이용 조건", "이용안내", "충전방법", "이용한도"]);
    details = (details ? details + '\n<hr class="section-divider">\n' : '') + additionalDetails;

    if (!details || details.trim() === "") {
        const firstInner = $('.detail-plan-area .inner').first();
        if (firstInner.length > 0 && !processed.has(firstInner[0])) {
            details = $.html(firstInner);
            processed.add(firstInner[0]);
        }
    }

    // 3. Product Description Extraction (상품 한 줄 요약 추출)
    let description = "";
    if (carrier === "KT") {
      // KT 전용 설명 추출 (.ctit 클래스를 메인 타이틀에 사용함)
      description = $('.ctit, .pduct-m-heading, .inner.forte-area .title, .forte-area .title, .inner-cont .tit').first().text().trim().replace(/\s+/g, ' ');
      
      // "부가세가 포함된" 등의 안내문구만 있는 경우 제외
      if (description.includes("부가세") && description.includes("실제 지불금액")) {
         description = $('.ctit, .pduct-m-heading, .inner.forte-area .title, .forte-area .title, .inner-cont .tit').not(':contains("요금")').first().text().trim().replace(/\s+/g, ' ');
      }
    }
    
    // KT 결과가 없거나 타 통신사인 경우 기존 로직 수행
    if (!description) {
      description = $('.background__left .desc, .mobile-service-details__head .desc, .part-header-sec01 .txt, .part-header-sec01 .desc, .desc, .txt').first().text().trim();
    }

    // 4. Data Normalization (데이터 정규화)
    // 상품명은 띄어쓰기를 언더스코어로 표기 (clean)
    const cleanedProductName = productName.replace(/\s+/g, '_').replace(/[\\\/:*?"<>|]/g, '');
    const cleanedCategory = category.replace(/\s+/g, '_').replace(/[\\\/:*?"<>|]/g, '');
    
    // itemCode 처리 (입력값이 없으면 기본값)
    let itemCode = productCode;
    if (!itemCode) {
        itemCode = "UNKNOWN_CODE_" + Date.now();
    }

    const resultData = {
      itemCode,
      productName: cleanedProductName,
      carrier,
      category: cleanedCategory,
      description,
      content: {
        details,
        usageGuidelines,
        notices
      }
    };

    // 4. File System Structure (계층형 파일 시스템 저장)
    // data/통신사/카테고리/상품명/ 구조 사용
    const targetDir = path.join(__dirname, 'data', carrier, cleanedCategory, cleanedProductName);
    
    // recursive: true 로 동적 계층 생성
    fs.mkdirSync(targetDir, { recursive: true });
    
    const filePath = path.join(targetDir, 'result.json');
    fs.writeFileSync(filePath, JSON.stringify(resultData, null, 2), 'utf-8');

    res.json({
        success: true,
        message: `Data saved to ${filePath}`,
        data: {
          savedPath: filePath,
          parsedFields: {
            detailsLength: details.length,
            usageGuidelinesLength: usageGuidelines.length,
            noticesLength: notices.length
          }
        }
    });

  } catch (err) {
    console.error("Global Parsing error:", err);
    res.status(500).json({ error: 'Internal server error during parsing', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Parser Server is running on port ${PORT}`);
});
