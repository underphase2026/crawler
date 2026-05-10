const payload = {
  productCode: "Z_KT_1778216237420_260",
  productName: "국제전화수신차단",
  carrier: "KT",
  category: "보안_안심",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><div class="thumb-left">
<div class="text receipt-block" style="background:url('/static/prodetail/971/web/itemForte/img/thumb-phone-202.png') 80px 80px no-repeat;">
<div class="title">해외에서 걸려오는 보이스 피싱.<br>
국제전화수신차단 서비스로<br>
사전에 방지하세요!</div>

<div class="desc">핸드폰으로 걸려오는 국제전화를 차단하는 서비스입니다.</div>
</div>
</div>

<div class="list-area-01 catchcall-plus"><strong class="pduct-bold">꼭 알아두세요!</strong>

<ul class="fare-list">
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
						<div id="appendPriceDiv" class="desc">	<p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>
						<table class="table-plan">
							<caption class="invisible">국제전화수신차단에 대한 내용을 상품명, 이용요금(월), 혜택으로 구분하여 정의한 표</caption>
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
									<th scope="row">국제전화수신차단</th>
									<td>무료</td>
									<td>핸드폰으로 걸려오는 국제전화를 차단하는 서비스</td>
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
			                                <h2 class="seo-improve-heading">이용방법</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/971/web/itemAccordion/html/', 'accordion_20170920163041.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_국제전화수신차단^아코디언^', '이용방법');" id="title1" title="이용방법 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1">	<ul class="fare-list">
										<li>서비스 ON/OFF 설정
											<ul>
												<li>서비스 활성화(ON) : 핸드폰에서 "*+81+통화버튼"</li>
												<li>서비스 비활성화(OFF) : 핸드폰에서 "*+810+통화버튼"</li>
											</ul>
										</li>
										<li>기타 문의사항 : 고객센터 문의(국번없이 100번)</li>
									</ul></div>
										</div>
									</div>
								<div class="tab-content-02 accordionH">
    										<!-- 0613 SEO 개선 -->
			                                <h2 class="seo-improve-heading">가입 및 유의사항</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/971/web/itemAccordion/html/', 'accordion_20200911170927.html', '2');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_국제전화수신차단^아코디언^', '가입 및 유의사항');" id="title2" title="가입 및 유의사항 내용" aria-expanded="false">
										</button>
										<div class="accordion-contents desc" style="display: none; height: 0px; padding-top: 50px; margin-top: 0px; padding-bottom: 50px; margin-bottom: 0px;">
											<div id="accordion2"><ul class="fare-list">
	<li>국제전화수신차단 서비스를 가입하면 핸드폰으로 걸려오는 모든 국제전화가 차단됩니다.
	<ul>
		<li>국내 특정 번호의 차단을 원할 경우 “특정번호수신차단” 서비스를 이용하시기 바랍니다.</li>
	</ul>
	</li>
	<li>국제전화를 수신하기 위해서는 서비스를 해지하거나 서비스 상태를 OFF로 설정해야 합니다. (*+81+통화버튼)</li>
	<li>기본적으로 해외로밍은 차단되지 않으나 해외 사업자의 사정에 따라 수신차단될 수 있습니다.</li>
	<li>음성/문자(SMS/LMS(장문 메시지)/MMS(사진/영상 메시지)) 모두 수신 차단됩니다.</li>
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
