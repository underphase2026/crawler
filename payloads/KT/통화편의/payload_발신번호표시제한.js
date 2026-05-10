const payload = {
  productCode: "Z_KT_1778213099745_171",
  productName: "발신번호표시제한",
  carrier: "KT",
  category: "통화편의",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><div class="thumb-left">
<div class="text outnumber-restraint" style="background:url('/static/prodetail/481/web/itemForte/img/thumb-phone-204.png') 94px 77px no-repeat;">
<div class="title">내 전화번호가 상대방에게<br>
표시되지 않았으면 해요!</div>

<div class="desc">상대방이 내 전화번호를 모르게 통화하고 싶은 경우<br>
사용하는 서비스 입니다.</div>
</div>
</div>

<div class="list-area-01 catchcall-plus"><strong class="bold">꼭 알아두세요!</strong>

<ul class="fare-list">
	<li>상대방이 내 전화번호를 모르게 통화하고 싶은 경우 사용하는 서비스입니다.
	<ul>
		<li>수신하는 상대방이 발신번호표시 서비스 사용 중이어도 내 전화번호가 표시되지 않습니다.</li>
		<li>개인정보 보호가 중요한 고객님들께 유용한 서비스입니다.</li>
	</ul>
	</li>
	<li>Call Blocking (콜 블로킹 서비스)
	<ul>
		<li>별도의 등록 절차 없이 전화할 때마다 아래의 방법을 이용하여 전화 번호가 표시되는 것을 방지하는 1회성 발신번호 표시제한 서비스입니다.</li>
		<li>설정 + * + 23 + # + 상대방 전화 번호 + 통화</li>
	</ul>
	</li>
	<li>위 상품은 온라인(KT닷컴), 전화상담(국번없이 100번) 및 직접방문(KT플라자/대리점 <a class="btn small is-line-lightgray mt0" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창이동">매장찾기</a> )을 통해 신청 가능합니다.</li>
</ul>
</div>
</div>
				</div>
			</div>
<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금 안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc"><p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>
						<table class="table-plan multiple-cultures">
							<caption class="invisible">발신번호표시제한 요금제에 대한 내용을 상품명, 이용요금, 혜택으로 구분하여 정의한 표</caption>
							<colgroup>
								<col style="width:20%;">
								<col style="width:20%;">
								<col>
							</colgroup>
							<thead>
							<tr>
								<th scope="col">상품명</th>
								<th scope="col">이용요금(월)</th>								
								<th scope="col">혜택</th>
							</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">발신번호표시제한</th>
									<td>무료</td>
									<td>상대방이 내 전화번호를 알 수 없이 통화할 수 있는 기능 제공</td>								
								</tr>
							</tbody>
						</table></div><!-- end appendPriceInfo -->
					</div>
				</div>
			</div>`
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
