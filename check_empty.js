const fs = require('fs');
const cheerio = require('cheerio');

const payPath = 'payloads/LGU/통화연결음_벨소리/payload_벨링모아B_벨소리,통화연결음_3건.js';
const pay = fs.readFileSync(payPath, 'utf8');
const start = pay.indexOf('rawHtml: `') + 10;
const end = pay.lastIndexOf('`');
const html = pay.substring(start, end);

const $ = cheerio.load(html);
// 전체 클래스 구조 파악
$('*[class]').each((i, el) => {
  const c = $(el).attr('class');
  if (c && !c.match(/mo-|icon|img|btn|link|line/i)) {
    console.log($(el).prop('tagName').toLowerCase() + '.' + c.split(' ')[0]);
  }
  if (i > 60) return false;
});
