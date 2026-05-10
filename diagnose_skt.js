const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const name = '휴대폰_결제_멤버십_플래티넘';
const payPath = path.join(__dirname, 'payloads/SKT/혜택_편의', `payload_${name}.js`);

if (!fs.existsSync(payPath)) {
    console.log(`[${name}] payload 파일 없음: ${payPath}`);
    process.exit(1);
}

const pay = fs.readFileSync(payPath, 'utf8');
const startIdx = pay.indexOf('rawHtml: `');
const htmlStart = startIdx + 'rawHtml: `'.length;
const htmlEnd = pay.lastIndexOf('`');
const rawHtml = pay.substring(htmlStart, htmlEnd);

const $ = cheerio.load(rawHtml);
$('script, noscript, iframe, style, link, meta, title, img').remove();

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
            console.log(`Matched Header: "${$(header).text().trim()}" with keywords: ${keywords}`);
            let container = $(header).closest(specificContainers);
            let contentToJoin = "";
            if (container.length > 0) {
                console.log(`  Found Container: ${container[0].name}.${container.attr('class')}`);
                contentToJoin = $.html(container);
                container.find(selector).each((j, inner) => processed.add(inner));
                processed.add(container[0]);
            } else {
                console.log(`  No Container found, taking siblings...`);
                let fragments = [$.html(header)];
                let next = $(header).next();
                while (next.length > 0 && !allHeaders.is(next)) {
                    fragments.push($.html(next));
                    next = next.next();
                }
                contentToJoin = fragments.join('\n');
            }
            processed.add(header);
            if (contentToJoin) combinedHtml.push(contentToJoin);
        }
    });

    return combinedHtml.join('\n<hr class="section-divider">\n').trim();
};

const usageGuidelines = extractSectionHTML(["가입/해지", "가입 및 해지"]);
console.log(`\n--- usageGuidelines ---\n${usageGuidelines.substring(0, 500)}...`);

const notices = extractSectionHTML(["유의사항", "유의 사항", "꼭 확인하세요"]);
console.log(`\n--- notices ---\n${notices.substring(0, 500)}...`);
