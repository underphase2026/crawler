const fs = require('fs');
const cheerio = require('cheerio');

const targets = ['듀얼넘버_온앤오프', '연락캐치팩', '통화가능안내'];
const sel = 'h1,h2,h3,h4,h5,h6,strong,p.title,p.tit,p.ttl,p.h4,p.h5,p.c-tabcontent-tit,p.sv-tit,p.faq-tit,p.h-style,dt';
const detailKeywords = ["서비스내용","서비스특징","기능","이용혜택","주요혜택","데이터이용기준","이용요금","요금제","혜택안내","혜택","서비스대상","가입조건","가입제한대상"];

targets.forEach(name => {
  const payPath = `payloads/LGU/통화_문자메시지/payload_${name}.js`;
  if (!fs.existsSync(payPath)) {
    console.log(`[${name}] payload 파일 없음`);
    return;
  }
  const pay = fs.readFileSync(payPath, 'utf8');
  // rawHtml 추출
  const startIdx = pay.indexOf('rawHtml: `');
  if (startIdx === -1) { console.log(`[${name}] rawHtml 없음`); return; }
  const htmlStart = startIdx + 'rawHtml: `'.length;
  const htmlEnd = pay.lastIndexOf('`');
  const rawHtml = pay.substring(htmlStart, htmlEnd);
  
  const $ = cheerio.load(rawHtml);
  $('script,noscript,iframe,style,link,meta,title,img,.mo-cv-box').remove();
  
  const headers = [];
  $(sel).each((i, el) => {
    const t = $(el).text().trim().replace(/\s+/g, ' ');
    if (t) headers.push(t.substring(0, 60));
  });
  
  console.log(`\n=== [${name}] 헤더 목록 (총 ${headers.length}개) ===`);
  headers.slice(0, 20).forEach((h, i) => console.log(`  ${i+1}. "${h}"`));
  
  // 매칭 체크
  const matched = headers.filter(h => {
    const normalized = h.replace(/\s+/g,'');
    return detailKeywords.some(k => normalized.includes(k.replace(/\s+/g,'')));
  });
  console.log(`  => details 키워드 매칭된 헤더: ${JSON.stringify(matched)}`);
});
