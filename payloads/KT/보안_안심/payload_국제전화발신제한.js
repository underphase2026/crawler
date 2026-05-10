const payload = {
  productCode: "Z_KT_1778216237451_191",
  productName: "국제전화발신제한",
  carrier: "KT",
  category: "보안_안심",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><div class="thumb-left">
<div class="text outgoing-block" style="background:url('/static/prodetail/480/web/itemForte/img/thumb-phone-203.png') 133px 77px no-repeat;">
<div class="title">국제전화를 사용하지 않는다면<br>
국제전화발신제한을<br>
이용해 보세요.</div>

<div class="desc">국제전화를 사용하지 않는 고객을 위한 차단 서비스입니다.</div>
</div>
</div>

<div class="list-area-01 catchcall-plus"><strong class="bold">꼭 알아두세요!</strong>

<ul class="fare-list">
	<li>휴대폰 분실 또는 부재 시 다른 사람이 몰래 국제전화 사용을 하여 부당한 전화 요금이 청구되는 상황을 미리 방지해드리는 서비스입니다.</li>
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
	<caption class="invisible">국제전화발신차단에 대한 내용을 상품명, 이용요금(월), 혜택으로 구분하여 정의한 표</caption>
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
			<th scope="row">국제전화발신제한</th>
			<td>무료</td>
			<td>
			<ul class="fare-list">
				<li>서비스를 신청하시면 별도의 설정 없이 바로 적용됩니다.</li>
				<li>국제전화 발신만 금지됩니다. 수신은 가능합니다.</li>
			</ul>
			</td>
		</tr>
	</tbody>
</table>
</div><!-- end appendPriceInfo -->
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
