const http = require('http');
const fs = require('fs');

async function testKT() {
  const content = fs.readFileSync('read.txt', 'utf8');
  // 첫 번째 상품 추출 (내 마음대로 2시간 데이터 프리)
  const productMatch = content.match(/"이 파일은 KT의 "([^"]+)" 카테고리인 "([^"]+)"상품이야, 파싱해줘"([\s\S]+?)=======================================/);
  
  if (!productMatch) {
    console.log("KT 상품을 찾을 수 없습니다.");
    return;
  }

  const payload = JSON.stringify({
    carrier: "KT",
    category: productMatch[1],
    productName: productMatch[2],
    rawHtml: productMatch[3]
  });

  const options = {
    hostname: '127.0.0.1',
    port: 3000,
    path: '/api/parse',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  const req = http.request(options, (res) => {
    let responseData = '';
    res.on('data', (chunk) => { responseData += chunk; });
    res.on('end', () => {
      const data = JSON.parse(responseData);
      console.log("KT 테스트 파싱 결과:", JSON.stringify(data.data.parsedFields, null, 2));
      
      const resultJson = JSON.parse(fs.readFileSync(data.data.savedPath, 'utf8'));
      console.log("\n--- 파싱된 내용 확인 ---");
      console.log("Description:", resultJson.description);
      console.log("Details Length:", resultJson.content.details.length);
      console.log("Usage Length:", resultJson.content.usageGuidelines.length);
      console.log("Notices Length:", resultJson.content.notices.length);
    });
  });

  req.on('error', (e) => { console.error(`Error: ${e.message}`); });
  req.write(payload);
  req.end();
}

testKT();
