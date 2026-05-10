const item = {
  carrier: "LGU",
  category: "데이터",
  productName: "태블릿/스마트기기 요금할인",
  rawHtml: `<div class="middlearea"><div class="part-header-top"><!----> <div class="part-header-sec01"><span class="option-flag"><!----> <!----> <!----></span> <div class="tit">태블릿/스마트기기 요금할인</div> <div class="txt">특정 요금제에 가입하면 태블릿 또는 스마트기기 월정액을 할인받을 수 있는 혜택</div> <div class="qr-wrap"><!----> <!----> <!----> <!----> <!----></div></div> <div class="part-header-sec02"><p class="price"><strong>할인</strong></p> <p class="price-txt"></p> <!----> <div class="part-header-sec-etc"></div> <div class="part-header-sec-btns"><!----> <!----> <button id="_uid_430" data-gtm-event-name="button_click" data-gtm-event-category="클릭" data-gtm-event-action="상품정보 영역 - 버튼 클릭" data-gtm-event-label="컨텐츠 : 태블릿/스마트기기 요금할인 온라인가입" data-gtm-click-location="상품정보 영역" data-gtm-click-text="태블릿/스마트기기 요금할인 온라인가입" class="c-btn-solid-1-m px-1" style="width: 9rem;">
    서비스 신청 및 변경</button> <!----> <!----> <!----></div></div></div> <!----></div>
<div class="cv-content-inner">
        <div class="c-page-section">
          <h3 class="h2">서비스 내용</h3>
          <dl class="cv-sv-group">
            <dt class="h5 sv-tit">이용 가능 요금제</dt>
            <dd>
              <ul class="c-bullet-type-circle grow-1">
                <li>
                  다음과 같은 요금제에 가입하면 태블릿/스마트기기 월정액을 할인
                  받을 수 있어요.
                  <ul class="c-bullet-type-hypen">
                    <li>5G 시그니처 / 프리미어 슈퍼: 최대 22,000원 할인</li>
                    <li>
                      5G 프리미어 플러스 / 프리미어 레귤러 / 슈퍼 플래티넘 /
                      플래티넘 / 프리미엄, 속도용량 걱정없는 데이터 88, 데이터
                      스페셜 C/D: 최대 11,000원 할인
                    </li>
                  </ul>
                </li>
                <li>자세한 내용은 요금제별 상세페이지에서 확인해 주세요.</li>
              </ul>
            </dd>
          </dl>
        </div>

        <div class="c-page-section">
          <h2 class="h2">서비스 안내</h2>
          <ul class="c-bullet-type-circle grow-1">
            <li>대상 요금제 가입 후 별도 신청해야 이용할 수 있어요.</li>
            <li>
              내 명의로 가입한 태블릿/스마트기기 또는 내가 법정대리인으로 등록된
              아이의 키즈워치 월정액을 할인받을 수 있어요.
              <ul class="c-bullet-type-hypen">
                <li>
                  태블릿/스마트 기기: 태블릿/스마트기기 500MB + 데이터 나눠쓰기,
                  LTE 데이터쉐어링 500MB, 5G 태블릿 4GB + 데이터 나눠쓰기, 5G
                  태블릿 6GB + 데이터 나눠쓰기, 5G 데이터 나눠쓰기 요금제 중 선택 가능
                </li>
                <li>
                  워치: LTE Wearable, LTE Wearable KIDS 요금제 중 선택 가능
                </li>
              </ul>
            </li>
            <li>
              휴대폰을 해지하거나 일시정지하면 할인을 받을 수 없어요. 해지
              취소/일시정지 해제 후에는 다시 혜택을 신청해야 할인받을 수 있어요.
            </li>
          </ul>
        </div>
      </div>`
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
