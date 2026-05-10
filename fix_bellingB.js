const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const payPath = 'payloads/LGU/통화연결음_벨소리/payload_벨링모아B_벨소리,통화연결음_3건.js';
const pay = fs.readFileSync(payPath, 'utf8');
const start = pay.indexOf('rawHtml: `') + 10;
const end = pay.lastIndexOf('`');
const html = pay.substring(start, end);

const $ = cheerio.load(html);
$('script,noscript,style,img,.mo-cv-box').remove();

// 탭 섹션들 추출
const sections = $('section.html__container');
let usageGuidelines = '';
let notices = '';

if (sections.length >= 1) {
  usageGuidelines = $.html(sections.eq(0));
}
if (sections.length >= 2) {
  notices = $.html(sections.eq(1));
}

console.log('섹션 수:', sections.length);
console.log('usageGuidelines 길이:', usageGuidelines.length);
console.log('notices 길이:', notices.length);

const targetDir = path.join(__dirname, 'data', 'LGU', '통화연결음_벨소리', '벨링모아B_벨소리,통화연결음_3건');
const existingResult = JSON.parse(fs.readFileSync(path.join(targetDir, 'result.json'), 'utf8'));

existingResult.content.usageGuidelines = usageGuidelines;
existingResult.content.notices = notices;

fs.writeFileSync(path.join(targetDir, 'result.json'), JSON.stringify(existingResult, null, 2), 'utf-8');
console.log('✅ 저장 완료!');
