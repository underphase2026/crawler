# LGU+ 부가서비스 상품 데이터 파싱 프롬프트

## 개요
사용자가 LGU+ 홈페이지의 부가서비스 상품 페이지에서 복사한 **Raw HTML**을 채팅으로 전달하면, 해당 HTML을 분석하여 **payload 스크립트**를 생성하고, Express.js 파서 서버(`server.js`)를 통해 구조화된 **`result.json`**으로 변환하는 작업이다.

---

## 1. 시스템 아키텍처

### 1.1 기술 스택
- **서버**: Express.js (port 3000), `cheerio` 기반 HTML 파서
- **페이로드**: Node.js 스크립트 (`fetch` API로 서버에 POST)
- **출력**: 계층형 JSON 파일

### 1.2 디렉토리 구조
```
Crawling_v4/
├── server.js                          # 파서 서버 (cheerio 기반)
├── payloads/LGU/
│   ├── 휴대폰케어/                    # 카테고리별 payload 스크립트
│   │   └── payload_폰교체_패스.js
│   └── 디지털콘텐츠/
│       ├── payload_유튜브_프리미엄.js
│       ├── payload_티빙_프리미엄.js
│       └── ...
└── data/LGU/
    ├── 휴대폰케어/                    # 카테고리별 파싱 결과
    │   └── 폰교체_패스/result.json
    └── 디지털콘텐츠/
        ├── 유튜브_프리미엄/result.json
        ├── 티빙_프리미엄/result.json
        └── ...
```

---

## 2. 파싱 워크플로우 (Step-by-Step)

### Step 1: 사용자로부터 Raw HTML 수신
사용자가 아래 형식으로 요청:
```
"이 파일은 LGU의 "[카테고리]" 카테고리인 "[상품명]"상품이야, 파싱해줘"
<div class="middlearea">... (Raw HTML) ...</div>
```

### Step 2: HTML 분석 및 페이지 레이아웃 판별
LGU+ 상품 페이지는 **2가지 레이아웃**이 존재한다:

#### Type A: 아코디언 레이아웃 (Accordion Layout)
- 상단: 서비스 내용 (`.cv-content-inner` 또는 `.c-page-section`)
- 하단: 아코디언으로 접힌 섹션들 (`.c-accordion-group`)
  - `가입 및 해지`, `유의사항`, `꼭 확인하세요` 등
- 특징: PC버전(`.pc-cv-box`)과 모바일버전(`.mo-cv-box`)이 **동일 내용을 중복**으로 포함

#### Type B: 섹션탭 레이아웃 (Section-Tab Layout)
- `<section id="33">` ~ `<section id="36">` 형태로 구분
- 각 섹션에 `<p class="faq-tit">` 헤더가 존재
- 모바일 중복 없이 단일 버전으로 구성

### Step 3: Payload 스크립트 생성

#### 3.1 핵심 원칙
1. **`.mo-cv-box` 제거**: PC/모바일 중복 방지를 위해 모바일 전용 컨테이너를 페이로드에서 제외하거나, 서버의 노이즈 제거 로직에 의해 자동 제거됨
2. **내용 100% 보존**: 요약, 축약, 생략 절대 금지. 원문의 모든 테이블, 리스트, 법적 공지를 그대로 포함
3. **`<style>`, `<img>`, `<iframe>` 제거**: 서버에서 자동으로 제거되므로 페이로드에 포함해도 무방하나, 용량 절약을 위해 미리 제거 권장

#### 3.2 Payload 템플릿
```javascript
const payload = {
  productCode: "Z2025_[CATEGORY]_[PRODUCT_ID]",   // 고유 코드
  productName: "[상품명_언더스코어]",                // 예: 유튜브_프리미엄
  carrier: "LGU",
  category: "[카테고리명]",                          // 예: 디지털콘텐츠
  rawHtml: `
    [여기에 정제된 HTML을 삽입]
  `
};

async function sendRequest() {
  const response = await fetch("http://127.0.0.1:3000/api/parse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  console.log("Response:", JSON.stringify(result, null, 2));
}

sendRequest();
```

#### 3.3 HTML 정제 규칙
| 제거 대상 | 이유 |
|---|---|
| `.mo-cv-box` 전체 블록 | PC 버전과 동일 내용 중복 |
| `<style>` 태그 | 서버에서 자동 제거, 용량 절약 |
| `<img>` 태그 | 서버에서 자동 제거, QR 코드 등은 텍스트로 대체 |
| `<iframe>` 태그 | FAQ 외부 링크, 불필요 |
| GTM 데이터 속성 (`data-gtm-*`) | 추적용, 불필요 |
| 빈 `middlearea` div | 내용 없는 구조적 껍데기 |

#### 3.4 보존해야 할 요소
| 보존 대상 | 이유 |
|---|---|
| `<table>` 요금제 테이블 | 핵심 상품 정보 |
| `<ul>/<li>` 리스트 | 서비스 특징, 유의사항 등 |
| `<dl>/<dt>/<dd>` 정의 리스트 | 가입/해지 절차 등 |
| `.c-accordion-group` 전체 | 숨겨진 아코디언 내용 (가입/해지, 유의사항) |
| `<a>` 링크 | 해지 페이지 URL 등 중요 정보 |
| `<del>` 취소선 | 할인 전 가격 표시 |
| 주석 (`<!-- CVHTML : ... -->`) | 서버의 fallback 추출 로직에 활용 |

### Step 4: 서버 파싱 로직 (server.js)

#### 4.1 노이즈 제거 (Noise Reduction)
```javascript
$('script, noscript, iframe, style, link, meta, title, img').remove();
$('#recommService, .popup_wrap, .modal, footer, header, nav, .menu, .gnb, .lnb, .mo-cv-box').remove();
```

#### 4.2 섹션 추출 (Section Extraction)
`extractSectionHTML(keywords)` 함수가 키워드 매칭으로 3개 필드를 추출:

| 필드명 | 추출 키워드 | 설명 |
|---|---|---|
| `notices` (1순위) | 꼭 확인하세요, 유의사항, 주의사항, 알려드립니다 | 법적 고지, 제한사항 |
| `usageGuidelines` (2순위) | 가입 및 해지, 이용방법, 서비스 안내 | 가입/해지 절차, 이용방법 |
| `details` (3순위) | 서비스내용, 이용요금, 요금제, 서비스특징, 서비스대상 | 요금, 혜택, 대상 |

> ⚠️ **추출 순서가 중요**: notices → usageGuidelines → details 순으로 추출하여, 유의사항 내부에 "가입/해지" 키워드가 중복 매칭되는 것을 방지

#### 4.3 헤더 셀렉터
```css
h1, h2, h3, h4, h5, h6, strong, p.title, p.tit, p.ttl, p.h4, p.h5,
p.c-tabcontent-tit, p.sv-tit, p.faq-tit, p.h-style, dt
```

#### 4.4 컨테이너 우선순위
```
1순위: .c-page-section, .html__container, .c-accordion-group, dl.cv-exp-list, .cv-sv-group
2순위: .pc-cv-box, section
3순위 (fallback): 헤더부터 다음 헤더 전까지의 형제 노드 수집
```

#### 4.5 상품 설명 추출
```javascript
$('.background__left .desc, .part-header-sec01 .txt, .desc, .txt').first().text()
```

### Step 5: 결과 저장

#### 5.1 출력 JSON 구조
```json
{
  "itemCode": "Z2025_DIGITAL_YOUTUBE",
  "productName": "유튜브_프리미엄",
  "carrier": "LGU",
  "category": "디지털콘텐츠",
  "description": "U⁺통신료와 한번에 결제하고...",
  "content": {
    "details": "<div>...요금제 테이블 HTML...</div>",
    "usageGuidelines": "<div>...가입/해지 절차 HTML...</div>",
    "notices": "<div>...유의사항 HTML...</div>"
  }
}
```

#### 5.2 저장 경로
```
data/{carrier}/{category}/{productName}/result.json
```
예: `data/LGU/디지털콘텐츠/유튜브_프리미엄/result.json`

---

## 3. 서버 실행 방법

```bash
# 서버 시작
node server.js
# → "Parser Server is running on port 3000"

# 페이로드 실행
node payloads/LGU/디지털콘텐츠/payload_유튜브_프리미엄.js

# 결과 확인
cat data/LGU/디지털콘텐츠/유튜브_프리미엄/result.json
```

---

## 4. 검증 체크리스트

파싱 완료 후 반드시 아래 항목을 확인:

- [ ] `details` 필드에 요금제 테이블(table)이 완전히 포함되어 있는가?
- [ ] `usageGuidelines` 필드에 가입/해지 절차가 포함되어 있는가?
- [ ] `notices` 필드에 유의사항/꼭 확인하세요 내용이 포함되어 있는가?
- [ ] `description`이 상품 한 줄 요약과 일치하는가?
- [ ] 모바일 중복 컨텐츠(`.mo-cv-box`)가 제거되었는가?
- [ ] 내용이 요약되거나 축소되지 않았는가? (원문 100% 보존)

---

## 5. 트러블슈팅

| 증상 | 원인 | 해결 |
|---|---|---|
| `ECONNREFUSED ::1:3000` | 서버 미실행 또는 IPv6 문제 | `node server.js` 실행 후 `http://127.0.0.1:3000` 사용 |
| `details`가 빈 문자열 | 키워드 매칭 실패 | HTML에서 헤더 텍스트 확인 후 `server.js`의 키워드 배열에 추가 |
| 모바일 내용 중복 | `.mo-cv-box` 미제거 | 페이로드에서 수동 제거하거나 서버의 노이즈 제거 확인 |
| 데이터 truncation | 채팅 입력 용량 초과 (4만자+) | 상품을 2~3개 이하로 분할하여 전달 |
| 파싱이 안 되는 섹션 발견 | 새로운 HTML 구조 (헤더 셀렉터 미등록) | `server.js`의 `selector` 변수에 새 셀렉터 추가 |

---

## 6. 현재까지 처리 완료된 카테고리

| 카테고리 | 상품 수 | 상태 |
|---|---|---|
| 휴대폰케어 | 3개 | ✅ 완료 |
| 디지털콘텐츠 | 24개 | 🔄 진행 중 |

---

## 7. 명명 규칙

| 항목 | 규칙 | 예시 |
|---|---|---|
| productCode | `Z2025_[CATEGORY]_[ID]` | `Z2025_DIGITAL_TVING_PREMIUM` |
| productName | 띄어쓰기→언더스코어, 특수문자 제거 | `티빙_프리미엄` |
| payload 파일명 | `payload_[상품명].js` | `payload_티빙_프리미엄.js` |
| 출력 폴더 | productName과 동일 | `티빙_프리미엄/` |
