const fs = require('fs');

const content = fs.readFileSync('read.txt', 'utf8');
const lines = content.split('\n');
const products = [];

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('=======================================')) {
        if (i + 1 < lines.length) {
            products.push(lines[i+1].trim());
        }
    }
}

console.log(JSON.stringify(products, null, 2));
