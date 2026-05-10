const payload = {
  productCode: "Z2025_DIGITAL_MOAJIN",
  productName: "모아진_(무제한_매거진)",
  carrier: "LGU",
  category: "디지털콘텐츠",
  rawHtml: `
<div class="part-header-sec01"><span class="option-flag"><small class="c-flag" color="new">최신</small></span> <div class="tit">모아진 (무제한 매거진)</div> <div class="txt">전 세계 매거진 20만여 권을 무제한으로 볼 수 있는 매거진 플랫폼</div></div>
<div class="pc-cv-box">
  <div class="middlearea">
    <div class="cv-content-inner">
      <div class="c-page-section">
        <h2 class="h2">서비스 내용</h2>
        <p class="h5">요금제</p>
        <div class="cv-sv-group">
          <div class="row c-table">
            <table class="table b-table table-bordered">
              <caption>요금제 정보 :모아진 월정액, 내용에 대한 표</caption>
              <thead><tr><th scope="col">서비스명</th><th scope="col">월정액</th><th scope="col">내용</th></tr></thead>
              <tbody>
                <tr><td>모아진</td><td>무료</td><td class="c-cell-left">대상요금제 선택 시 미디어팩 혜택으로 이용 가능</td></tr>
              </tbody>
            </table>
          </div>
          <div class="cv-banner-wrap">
            <div class="h2">전 세계 2,600여 종의 매거진으로 라이프를 업데이트 하세요. 잡지적으로.</div>
            <p class="desc">국내 최대 매거진 플랫폼</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- 서비스 안내 -->
<div class="c-accordion-group">
  <div class="c-accordion-header not-collapsed"><strong>서비스 안내</strong></div>
  <div class="collapse show">
    <div class="card-body">
      <div class="pc-cv-box">
        <dl class="cv-exp-list">
          <dt class="cl-black">서비스 특징</dt>
          <dd>
            <ul class="c-bullet-type-circle grow-1">
              <li>국내/해외 매거진을 무제한으로 볼 수 있어요.</li>
              <li>HBR(하버드비즈니스리뷰), DBR(동아비즈니스리뷰) 등 매거진 2,600여 종, 20만여 권을 볼 수 있어요.</li>
              <li>패션, 경제, 취미, 라이프스타일 등 다양한 매거진을 모바일과 PC에서 자유롭게 이용할 수 있어요.</li>
            </ul>
          </dd>
          <dt class="cl-black">서비스 대상</dt>
          <dd>
            <ul class="c-bullet-type-circle grow-1">
              <li>5G 시그니처, 5G 프리미어 슈퍼 등 대상 요금제에 가입한 고객 중 미디어 서비스로 ‘모아진’을 선택한 고객</li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</div>
<!-- 가입 및 해지 -->
<div class="c-accordion-group">
  <div class="c-accordion-header not-collapsed"><strong>가입 및 해지</strong></div>
  <div class="collapse show">
    <div class="card-body">
      <div class="pc-cv-box">
        <dl class="cv-exp-list">
          <dt class="cl-black">서비스 가입하기</dt>
          <dd>
            <ul class="c-bullet-type-circle grow-1">
              <li>대상 요금제 가입할 때 미디어 서비스로 ‘모아진’을 선택하세요.</li>
              <li>U+홈페이지 또는 U+one 앱에서 서비스 변경 가능합니다. (만 19세 이상)</li>
            </ul>
          </dd>
          <dt class="cl-black">계정 등록하기</dt>
          <dd>
            <ul class="c-bullet-type-circle grow-1">
              <li>유독 홈페이지(www.lguplus.com/pogg) → [MY 구독] → [U+요금제 전용 모아진 이용권] → [계정 연결하기]를 눌러 등록해 주세요.</li>
              <li>이미 구독 중인 경우 정기 결제 해지 후 등록 가능합니다.</li>
            </ul>
            <div class="cv-use-wrap">
              <p>Step 01. 유독 MY구독 방문 -> Step 02. 유독 상품 가입 -> Step 03. 모아진 계정 연결</p>
            </div>
          </dd>
          <dt class="cl-black">서비스 해지하기</dt>
          <dd><ul class="c-bullet-type-circle grow-1"><li>대상 요금제가 아닌 요금제로 변경하면 자동으로 해지돼요.</li></ul></dd>
        </dl>
      </div>
    </div>
  </div>
</div>
<!-- 꼭 확인하세요 -->
<div class="c-accordion-group">
  <div class="c-accordion-header not-collapsed"><strong>꼭 확인하세요</strong></div>
  <div class="collapse show">
    <div class="card-body">
      <div class="pc-cv-box">
        <ul class="c-bullet-type-circle grow-1">
          <li>만 19세 이상만 가입할 수 있어요.</li>
          <li>유독에서 모아진 이용권을 구독해야 무료로 이용할 수 있어요.</li>
          <li>모아진 이용권을 구독할 수 없는 요금제로 바꾸거나 휴대폰을 일시 정지/해지하면 서비스가 자동 해지돼요.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`
};

async function sendRequest() {
  const response = await fetch("http://localhost:3000/api/parse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  console.log("Response:", JSON.stringify(result, null, 2));
}

sendRequest();
