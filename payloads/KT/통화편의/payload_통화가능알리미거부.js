const payload = {
  productCode: "Z_KT_1778213099593_44",
  productName: "통화가능알리미거부",
  carrier: "KT",
  category: "통화편의",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><div class="thumb-left">
<div class="text call-reject" style="background:url('/static/prodetail/416/web/itemForte/img/thumb-phone-196.png') 149px 90px no-repeat;">
<div class="title">내가 통화 가능한 상태가 된 것을<br>
상대방(발신자)에게 알리고 싶지 않아요!</div>

<div class="desc">고객님이 통화 중일 때 통화가능알리미 가입자가 발신을 할 경우,<br>
고객님이 통화 가능 상태가 되어도 알려주지 않는 서비스 입니다.</div>
</div>
</div>
<!--
<div class="list-area-01 catchcall-plus"><strong>꼭 알아두세요!</strong>
<ul class="fare-list">
	<li>서비스에 가입하시면 자동으로 제공됩니다.</li>
	<li>본 서비스에 가입하시면, 통화가능알리미 서비스 가입자가 전화를 할 경우 고객님이 통화 중이면 &quot;통화가능알리미 서비스가 제공되지 않는 고객입니다&quot; 라는 멘트가 제공되니 참조하시기 바랍니다.</li>
	<li>위 상품은 온라인(KT닷컴), 전화상담(국번없이 100번) 및 직접방문(KT플라자/대리점 <a class="btn small is-line-lightgray mt0" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창이동">매장찾기</a> )을 통해 신청 가능합니다.</li>
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
						<div id="appendPriceDiv" class="desc"><p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>

<table class="pduct-tbl-plan">
	<caption class="invisible">통화가능알리미거부에 대한 내용을 상품명, 이용요금으로 구분하여 정의한 표</caption>
	<colgroup>
		<col style="width:35%;">
		<col>
	</colgroup>
	<thead>
		<tr>
			<th scope="col">상품명</th>
			<th scope="col">이용요금(월)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">통화가능알리미거부</th>
			<td>무료</td>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/416/web/itemAccordion/html/', 'accordion_20200923161114.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_통화가능알리미거부^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="pduct-list">
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
