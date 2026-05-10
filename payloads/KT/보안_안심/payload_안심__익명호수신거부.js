const payload = {
  productCode: "Z_KT_1778216237290_816",
  productName: "안심_ 익명호수신거부",
  carrier: "KT",
  category: "보안_안심",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><h2 class="pduct-m-tit ctit"><span class="pduct-rgb-code-d71826">누군지 밝히지 않는 전화,</span><br>
<span class="bold">고민하지 마시고 자동 차단하세요!</span></h2>

<div style="margin:20px 0 0 0;"><img alt="POINT01 발신번호가 표시되지 않는 전화가 걸려오면 익명 전화 차단, POINT02 발신번호 표시제한 전화가 걸려오면 발신거부 멘트 송출" src="/static/prodetail/482/web/itemForte/images/w_pduct_482.png"></div>
<!-- 
<div class="thumb-left">
<div class="text anonymity-reject" style="background:url('/static/prodetail/482/common/itemForte/images/thumb_phone_482_20240305.png') 137px 80px no-repeat;">
<div class="title">누군지 밝히지 않는 전화!<br />
고민하지 마시고 익명호 수신거부로<br />
자동 차단하세요</div> 
<div class="desc">익명으로 오는 전화를 모두 차단하는 서비스 입니다.</div>
</div>
</div>
-->

<div class="list-area-01 catchcall-plus"><strong class="bold">꼭 알아두세요!</strong>

<ul class="fare-list">
	<li>발신 번호가 표시되지 않는 익명의 전화를 차단하여 직접 통화하지 않아도 되는 서비스입니다.</li>
	<li>발신번호표시제한 서비스 사용자에게서 전화가 걸려오면 아래와 같은 멘트가 송출되며 통화가 종료됩니다.
	<ul>
		<li>"발신번호가 제공되지 않아 통화하실 수 없습니다. 발신번호표시 제한을 해제하신 후 다시 걸어주시기 바랍니다."</li>
	</ul>
	</li>
	<li>위 상품은 온라인(KT닷컴), 전화상담(국번없이 100번) 및 직접방문(KT플라자/대리점&nbsp;<a class="btn small is-line-lightgray mt0" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창이동">매장찾기</a> )을 통해 신청 가능합니다.</li>
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

<table class="table-plan">
	<caption class="invisible">익명호수신거부 요금제에 대한 내용을 상품명, 이용요금(월), 혜택으로 구분하여 정의한 표</caption>
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
			<th scope="row">(안심) 익명호수신거부</th>
			<td>무료</td>
			<td>상대방의 번호가 표시되지 않고 걸려오는 전화의 수신을 자동으로 차단하는 기능 제공</td>
		</tr>
	</tbody>
</table>
</div><!-- end appendPriceInfo -->
					</div>
				</div>
			</div>
<div class="tab-toggle-area">
				<div class="column">
					<div class="inner">
						<div class="accordions active">
							<div class="tab-content-01 accordionH moveH">
    										<!-- 0613 SEO 개선 -->
			                                <h2 class="seo-improve-heading">가입 및 유의사항</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/482/web/itemAccordion/html/', 'accordion_20190617171833.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_(안심) 익명호수신거부^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>본 서비스는 발신번호표시 계열 서비스를 이용하시는 고객만 이용이 가능합니다.</li>
	<li>유선 전화 또는 구내 전화(회사 내선 등)의 경우 지역에 따라 발신 번호가 표시되지 않을 수 있습니다.<br>
	이 경우 핸드폰에 발신자의 번호가 뜨지 않지만 통화는 연결됩니다.</li>
</ul>
</div>
										</div>
									</div>
								</div>
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
