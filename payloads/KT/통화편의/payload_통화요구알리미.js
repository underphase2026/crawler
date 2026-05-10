const payload = {
  productCode: "Z_KT_1778213099582_647",
  productName: "통화요구알리미",
  carrier: "KT",
  category: "통화편의",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><div class="thumb-left">
<div class="text call-notice" style="background:url('/static/prodetail/660/web/itemForte/img/thumb-phone-194.png') 105px 90px no-repeat;">
<div class="title">통화 연결이 되지 않았을 때,<br>
상대방에게 통화 요청 문자를<br>
자동으로 전송 해줘요!</div>

<div class="desc">상대방과 통화연결이 안 되는 경우(통화 중, 전원 꺼짐)<br>
상대방에게 자동으로 통화요청 메시지를 전송하는<br>
편리한 서비스를 이용해 보세요.</div>
</div>
</div>

<!--
<div class="list-area-01 catchcall-plus"><strong>꼭 알아두세요!</strong>
<ul class="fare-list">
	<li>상대방이 통화 가능한 상태가 되면 내(발신자)가 전화를 걸었음을 나타내는 문자메시지가 상대방(수신자)에게 통보되며 통화 키를 누르면 내 전화번호로 연결됩니다.
	<ul>
		<li>단, 상대방(수신자)이 캐치콜 이용고객인 경우 통화요구 알림 메시지는 통보하지 않습니다.</li>
	</ul>
	</li>
	<li>위 상품은 온라인(KT닷컴), 전화상담(국번없이 100번) 및 직접방문(KT플라자/대리점&nbsp;<a class="btn small is-line-lightgray mt0" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창이동">바로가기</a> )을 통해 신청 가능합니다.</li>
</ul>
</div>
--></div>
				</div>
			</div>
<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금 안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc">	<p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>
						<table class="table-plan">
							<caption class="invisible">통화요구알리미 요금제에 대한 내용을 상품명, 이용요금, 혜택으로 구분하여 정의한 표</caption>
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
									<th scope="row">통화요구알리미</th>
									<td>550원</td>
									<td>통화 연결이 안될 때, 상대에게 통화 요청 메시지 자동 전송</td>								
								</tr>
							</tbody>
						</table></div><!-- end appendPriceInfo -->
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/660/web/itemAccordion/html/', 'accordion_20200923162137.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_통화요구알리미^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="pduct-list">
	<li>통화 요구 알리미 서비스는 수신자가 KT 모바일 고객일 때만 이용할 수 있습니다.</li>
	<li>단, 상대방(수신자)이 캐치콜 이용 고객인 경우, 통화 요구 알림 메시지를 전송하지 않습니다.</li>
	<li>통화요구알리미 문자메시지의 발신번호는 고객님 번호로 전송됩니다.</li>
	<li>해당 상품은 온라인(kt.com), 앱(마이케이티), 전화상담(국번없이 114번), 직접방문(KT플라자/대리점)을 통해 신청 가능합니다.</li>
</ul></div>
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
