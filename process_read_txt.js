const fs = require('fs');
const path = require('path');

async function processReadTxt() {
  const readPath = path.join(__dirname, 'read.txt');
  if (!fs.existsSync(readPath)) {
    console.error("read.txt not found.");
    return;
  }

  const content = fs.readFileSync(readPath, 'utf8');
  // ======= 구분자로 텍스트 블록 나누기 (정규식: === 3개 이상 있는 줄을 기준으로 분리)
  const blocks = content.split(/^[ \t]*={3,}[ \t]*$/m);
  
  let successCount = 0;

  for (const block of blocks) {
    const lines = block.trim().split('\n');
    if (lines.length === 0 || block.trim() === '') continue;

    let firstLine = '';
    let match = null;
    let startIdx = 0;
    let carrier = 'LGU'; // Default
    
    for(let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      //Carrier 감지 (LGU, KT, SKT 등)
      const carrierMatch = line.match(/이 파일은 ([A-Z0-9+]+)의/i);
      if (carrierMatch) carrier = carrierMatch[1].toUpperCase().replace('+', '');

      match = line.match(/(?:"|')([^"']+)(?:"|')\s*카테고리인\s*(?:"|')([^"']+)(?:"|')/);
      if(match) {
        firstLine = line;
        startIdx = i;
        break;
      }
    }

    if (!match) {
      console.warn(`[Skip] 카테고리/상품명 정보를 찾을 수 없는 블록 생략... (시작 내용: ${lines.slice(0, 2).join(' ')}...)`);
      continue;
    }

    let category = match[1].replace(/\s+|\//g, '_'); 
    let productName = match[2].replace(/[\\/:*?"<>|()]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
    
    const rawHtml = lines.slice(startIdx + 1).join('\n');

    // Create category directory if not exists
    const targetDir = path.join(__dirname, 'payloads', carrier, category);
    fs.mkdirSync(targetDir, { recursive: true });

    const payloadObj = {
      productCode: "Z_" + carrier + "_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
      productName: productName,
      carrier: carrier,
      category: category,
      rawHtml: rawHtml
    };

    const payloadCode = `const payload = {
  productCode: "${payloadObj.productCode}",
  productName: ${JSON.stringify(productName)},
  carrier: "${carrier}",
  category: ${JSON.stringify(category)},
  rawHtml: \`${rawHtml.replace(/`/g, '\\$&')}\`
};

async function sendRequest() {
  try {
    const response = await fetch("http://localhost:3000/api/parse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    console.log("Response:", JSON.stringify(result, null, 2));
  } catch (e) {
    console.error("Fetch Error:", e);
  }
}

sendRequest();
`;

    const payloadFilePath = path.join(targetDir, `payload_${productName.replace(/\s+/g, '_')}.js`);
    fs.writeFileSync(payloadFilePath, payloadCode, 'utf8');
    console.log(`\n▶ [File Saved] ${productName} 의 Payload가 저장되었습니다 -> ${payloadFilePath}`);

    try {
      const response = await fetch("http://localhost:3000/api/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadObj),
      });
      const result = await response.json();
      console.log(`▶ [Parsed] ${productName} DB 생성 완료! (경로: ${result.data?.savedPath})`);
      successCount++;
    } catch(e) {
      console.error(`▶ [Error] ${productName} 파싱 중 서버 오류 발생:`, e);
    }
  }

  console.log(`\n================================`);
  console.log(` 일괄 처리 완료: 성공적으로 파싱된 상품 수 - ${successCount}개`);
  console.log(`================================\n`);
}

processReadTxt();
