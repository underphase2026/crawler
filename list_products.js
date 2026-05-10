const fs = require('fs');
const txt = fs.readFileSync('read.txt', 'utf8');
const matches = [...txt.matchAll(/"이 파일은 ([A-Z0-9+]+)의 "([^"]+)" 카테고리인 "([^"]+)"상품이야/g)];
matches.forEach((m, i) => console.log((i+1)+'.', m[3], ' ['+m[1]+' / '+m[2]+']'));
console.log('총:', matches.length, '개');
