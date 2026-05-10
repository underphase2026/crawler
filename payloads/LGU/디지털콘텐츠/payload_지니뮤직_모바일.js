const payload = {
  productCode: "Z2025_DIGITAL_GENIE_MOBILE",
  productName: "지니뮤직_마음껏_듣기(모바일전용)",
  carrier: "LGU",
  category: "디지털콘텐츠",
  rawHtml: `
<div class="background"><div class="background__left"><p class="title">지니뮤직 마음껏 듣기(모바일전용)</p> <p class="desc">지니뮤직 앱에서 데이터 무료로 음악을 감상할 수 있는 서비스</p></div> <div class="background__right"><p class="price"><span>월 7,900원</span></p></div></div>
<section id="33" class="html__container">
  <p class="faq-tit"><strong>이용방법</strong></p>
  <div class="pc-cv-box">
    <dl class="cv-exp-list">
      <dt>지니뮤직 모바일 앱에서 이용하기</dt>
      <dd>
        <p><strong>지니뮤직 앱 설치하기</strong></p>
        <ul class="c-bullet-type-circle grow-1"><li>구글 플레이 스토어, 원스토어, 애플 앱스토어에서 ‘지니뮤직’ 검색 후 앱을 설치하세요.</li></ul>
        <div class="cv-use-app-wrap">
          <ul class="u-item-list"><li><p class="u-tit">지니뮤직 앱</p> <p class="u-qr"><img src="https://www.lguplus.com/static/pc-contents/images/vas/LRZ0001479/PC/CV_HOWTO_QR_01.jpg" alt=""></p> <a href="https://lgudcb.com/4fR9Z6J" class="c-link-arr-1-s" target="_blank" title="새창열기">앱 내려받기</a></li></ul>
        </div>
        <p><strong>지니뮤직 앱 로그인하기</strong></p>
        <ul class="c-bullet-type-circle grow-1"><li>세 가지 방법 중 원하는 방법으로 로그인할 수 있어요.</li></ul>
        <div class="cv-use-wrap"><div class="m-swiper swiper_swiper2-1 -mt-8n-1"><ul class="cv-thumb-list type-col-3n col-fixed"><li><p>지니뮤직 계정</p> <p class="th-thumb"><img src="https://www.lguplus.com/static/pc-contents/images/vas/LRZ0001479/PC/CV_HOWTO_STEP_01.jpg" alt=""></p></li><li><p>간단 로그인</p> <p class="th-thumb"><img src="https://www.lguplus.com/static/pc-contents/images/vas/LRZ0001479/PC/CV_HOWTO_STEP_02.jpg" alt=""></p></li><li><p>전화번호 로그인</p> <p class="th-thumb"><img src="https://www.lguplus.com/static/pc-contents/images/vas/LRZ0001479/PC/CV_HOWTO_STEP_03.jpg" alt=""></p></li></ul></div></div>
        <p><strong>가입한 지니뮤직 상품 확인하기</strong></p>
        <ul class="c-bullet-type-circle grow-1"><li>최초 1회 휴대폰 인증을 해야 가입한 U+지니뮤직 상품을 확인하고 이용할 수 있어요.</li></ul>
        <div class="cv-use-wrap"><div class="m-swiper swiper_swiper2-3 -mt-8n-2"><ul class="cv-thumb-list type-col-3n col-fixed"><li><p>1단계</p> <p class="th-thumb"><img src="https://www.lguplus.com/static/pc-contents/images/vas/LRZ0001479/PC/CV_HOWTO_STEP_04.jpg" alt=""></p> <div class="th-cont"><p>[더보기] → [내 정보] → [등록된 요금제]를 누르세요.</p></div></li><li><p>2단계</p> <p class="th-thumb"><img src="https://www.lguplus.com/static/pc-contents/images/vas/LRZ0001479/PC/CV_HOWTO_STEP_05.jpg" alt=""></p> <div class="th-cont"><p>[부가서비스 인증]을 누르세요.</p></div></li><li><p>3단계</p> <p class="th-thumb"><img src="https://www.lguplus.com/static/pc-contents/images/vas/LRZ0001479/PC/CV_HOWTO_STEP_06.jpg" alt=""></p> <div class="th-cont"><p>인증 완료 후 지니뮤직 전용 데이터를 이용해 음악을 감상하세요.</p></div></li></ul></div></div>
      </dd>
    </dl>
  </div>
</section>
<section id="34" class="html__container html__item">
  <p class="faq-tit"><strong>가입 및 해지</strong></p>
  <dl class="cv-exp-list">
    <dt>가입하기</dt>
    <dd><ul class="c-bullet-type-circle grow-1"><li>지금 보고 있는 화면에 있는 [서비스 가입]을 누르세요.</li></ul></dd>
    <dt>해지하기</dt>
    <dd>
      <p><strong>U+one 앱/U+ 홈페이지</strong></p>
      <ul class="c-bullet-type-circle grow-1"><li>로그인 → [마이페이지] → [부가서비스 조회/변경/해지] → ‘지니뮤직 마음껏 듣기(모바일전용)’의 [해지]를 누르세요.</li></ul>
      <p><strong>고객센터</strong></p>
      <ul class="c-bullet-type-circle grow-1"><li>휴대폰에서 114(무료), 1544-0010(유료)로 신청하세요.</li></ul>
    </dd>
  </dl>
</section>
<section id="35" class="html__container html__item">
  <p class="faq-tit"><strong>유의사항</strong></p>
  <ul class="c-bullet-type-circle grow-1">
    <li>요금은 매달 자동으로 결제돼요.</li>
    <li>월 중간에 가입하거나 해지하면 사용 일수만큼 요금을 계산해요.</li>
    <li>해외에서는 서비스를 이용할 수 없어요.</li>
    <li>해지하면 30일 후에 다시 가입할 수 있어요.</li>
  </ul>
</section>
`
};

async function sendRequest() {
  const response = await fetch("http://127.0.0.1:3000/api/parse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  console.log("Response:", JSON.stringify(result, null, 2));
}

sendRequest();
