async function testParser() {
  const dummyHtml = `
    <html>
      <head><title>Test Page</title></head>
      <body>
        <script>alert("noise")</script>
        <div id="recommService">Recomm noise</div>
        
        <div class="content-body">
          <h3>서비스 특징</h3>
          <p>이 서비스는 무제한 데이터를 제공합니다.</p>
          <ul>
             <li>5G 속도</li>
             <li>다양한 제휴 혜택</li>
          </ul>

          <h3>이용 안내</h3>
          <div class="usage-box">
            <p>월 89,000원에 이용 가능합니다.</p>
          </div>
          
          <h3>유의사항</h3>
          <ul class="notice-list">
             <li>가입 후 3개월 유지 필수</li>
             <li>해지 시 위약금 발생 가능</li>
          </ul>
          <h2>다른 섹션</h2>
        </div>
      </body>
    </html>
  `;

  try {
    const response = await fetch('http://localhost:3000/api/parse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rawHtml: dummyHtml,
        carrier: 'SKT',
        category: '요금제',
        productName: '5G 무제한 플랜 test test/<>?',
        productCode: 'PROD_12345'
      })
    });

    const data = await response.json();
    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

testParser();
