const fs = require('fs');

const code = fs.readFileSync('process_lgu.js', 'utf8');
const itemsRegex = /const items = (\[[\s\S]+?\]);\n\nasync function processData/m;
const match = code.match(itemsRegex);

if (match) {
  const itemsStr = match[1];
  const items = eval(itemsStr);
  
  items.forEach(item => {
    const safeName = item.productName.replace(/ /g, '_');
    const outputCode = `const item = {
  carrier: ${JSON.stringify(item.carrier)},
  category: ${JSON.stringify(item.category)},
  productName: ${JSON.stringify(item.productName)},
  rawHtml: \`${item.rawHtml.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
};

async function processData() {
  try {
    const response = await fetch('http://localhost:3000/api/parse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    });
    console.log("Response:", await response.json());
  } catch (e) {
    console.error("Error:", e);
  }
}
processData();
`;
    fs.writeFileSync(`payload_${safeName}.js`, outputCode, 'utf8');
    console.log(`Created payload_${safeName}.js`);
  });

  // Deprecate old process_lgu.js
  fs.renameSync('process_lgu.js', 'process_lgu_deprecated.js');
  console.log('Renamed process_lgu.js to process_lgu_deprecated.js');
} else {
  console.error("Could not find items array in process_lgu.js");
}
