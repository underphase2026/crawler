const payload = {
  productCode: "Z2025_CALL_FILTERING",
  productName: "지정번호_필터링",
  carrier: "LGU",
  category: "통화_문자메시지",
  rawHtml: `
<div data-v-1ee6e5b2="" class="part-header box-color4"><div class="middlearea"><div class="part-header-top"><!----> <div class="part-header-sec01"><span class="option-flag"><!----> <!----> <!----></span> <div class="tit">지정번호 필터링</div> <div class="txt">받고 싶지 않은 전화와 문자를 차단하고, 상대에게 안내 멘트를 남길 수 있는 서비스</div> <div class="qr-wrap"><!----> <!----> <!----> <!----> <!----></div></div> <div class="part-header-sec02"><p class="price"><strong>월 2,200원</strong></p> <p class="price-txt">부가세 포함 금액</p> <!----> <div class="part-header-sec-etc"></div> <div class="part-header-sec-btns"><!----> <!----> <!----> <!----> <!----> <!----></div></div></div> <!----></div></div>
<div data-v-1ee6e5b2=""><div data-v-1ee6e5b2="" class="middlearea"><div data-v-1ee6e5b2=""><div data-v-1ee6e5b2="" class="base-area"><div data-v-1ee6e5b2="" class="middlearea"><div data-v-1ee6e5b2="" class="add-service-info"><div data-v-1ee6e5b2="" class="contentsWrap"><div class="cv-html-wrap">
  <div class="pc-cv-box">
    <div class="middlearea">
      <div class="cv-content-inner">
        <div class="c-page-section">
          <h2 class="h2">서비스 내용</h2>
          <div class="cv-sv-group">
            <p class="sv-tit">요금제</p>
            <div class="row c-table">
              <table class="table b-table table-bordered c-table-row">
                <caption>요금제 정보 : 월정액, 내용에 대한 표</caption>
                <colgroup><col style="width: 340px"><col></colgroup>
                <thead><tr><th scope="col">월정액</th><th scope="col">내용</th></tr></thead>
                <tbody><tr><td class="c-middle c-cell-center">2,200원</td><td class="c-cell-left"><ul class="c-bullet-type-circle grow-1"><li>차단 번호 최대 100개 등록</li><li>차단 설정 시 멘트 설정</li></ul></td></tr></tbody>
              </table>
            </div>
            <ul class="c-bullet-type-circle"><li>부가세가 포함된 금액이에요.</li></ul>
          </div>
        </div>
        <div class="c-page-section">
          <h2 class="h2">서비스 안내</h2>
          <dl class="cv-sv-group">
            <dt class="sv-tit">서비스 특징</dt>
            <dd><ul class="c-bullet-type-circle grow-1"><li>받고 싶지 않은 전화와 문자메시지를 차단할 수 있어요.</li><li>8~21자리 번호를 최대 100개까지 차단할 수 있어요.</li><li>차단한 상대에게는 내가 설정한 안내 멘트만 들리고 이후에 전화가 끊겨요.</li></ul></dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</div></div></div></div></div> <div data-v-1ee6e5b2=""><!----> <div data-v-1ee6e5b2="" class="c-charge-wrap middlearea"><div class="accordion-group-button"><button class="btn-acc-toggle">전체 펼치기</button></div> <div class="accordion c-accordion accord-short-title">
<div class="c-accordion-group">
  <div variant="primary" class="c-accordion-header collapsed" role="button" tabindex="0"><strong>이용방법</strong></div> 
  <div class="card-body"><div class="cv-html-wrap"><div class="pc-cv-box">
  <dl class="cv-exp-list">
    <dt class="c-acc-sec-tit">U+모바일매니저 앱 <a data-route="" class="c-link-arr-1-s" href="https://lgudcb.com/4jB8ZnC" target="_blank" title="새창열기">앱 내려받기</a></dt>
    <dd><ul class="c-bullet-type-circle grow-1"><li>U+모바일매니저는 안드로이드폰에서만 이용할 수 있어요.</li></ul></dd>
  </dl>
  </div></div></div>
</div>
<div class="c-accordion-group">
  <div variant="primary" class="c-accordion-header collapsed" role="button" tabindex="0"><strong>꼭 확인하세요</strong></div> 
  <div class="card-body"><div class="cv-html-wrap"><div class="pc-cv-box">
  <ul class="c-bullet-type-circle grow-1"><li>요금은 매달 자동으로 결제돼요.</li><li>월 중간에 가입하거나 해지하면 사용 일수만큼 요금을 계산해요.</li></ul>
  </div></div></div>
</div>
<div class="c-accordion-group">
  <div variant="primary" class="c-accordion-header collapsed" role="button" tabindex="0"><strong>자주 하는 질문</strong></div> 
  <div class="card-body"><div class="cv-html-wrap"><div class="pc-cv-box">
  <div class="c-accordion-group"><strong>[지정번호필터링] 어떤 서비스인가요?</strong></div>
  <div class="card-body"><p>받고 싶지 않은 번호로 오는 전화와 문자메시지를 자동으로 차단해주는 서비스예요.</p></div>
  </div></div></div>
</div>
</div></div></div></div>
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
