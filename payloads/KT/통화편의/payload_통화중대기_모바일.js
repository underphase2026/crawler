const payload = {
  productCode: "Z_KT_1778213099475_893",
  productName: "통화중대기_모바일",
  carrier: "KT",
  category: "통화편의",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><div class="thumb-left">
	<div class="text call-waiting" style="background:url('/static/prodetail/432/web/itemForte/img/thumb-phone-209.png') 130px 90px no-repeat;">
		<div class="title">통화 중 갑자기 전화가<br>걸려온다면?</div>
		<div class="desc">기존 통화를 잠시 대기시킬 수 있는 서비스인<br>통화중대기 서비스에 가입하면 OK!</div>
	</div>
</div>
<div class="list-area-01 catchcall-plus">
	<ul class="fare-list">
		<li>통화 중 갑자기 전화가 걸려오는 경우, 현재 통화 중인 전화를 잠시 대기시킨 후 새로 걸려온 전화로 연결해주는 통화중대기 서비스입니다.</li>
	</ul>
</div></div>
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
							<caption class="invisible">통화중대기(모바일)에 대한 내용을 상품명, 월정액으로 구분하여 정의한 표</caption>
							<colgroup>
								<col>
								<col>
							</colgroup>
							<thead>
							<tr>
								<th scope="col">상품명</th>
								<th scope="col">월정액</th>
							</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">통화중대기</th>
									<td>무료</td>
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
			                                <h2 class="seo-improve-heading">서비스 이용방법</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/432/web/itemAccordion/html/', 'accordion_20170920170202.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_통화중대기(모바일)^아코디언^', '서비스 이용방법');" id="title1" title="서비스 이용방법 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1">	<ul class="fare-list">
										<li>기능 설정 후 통화 중 다른 전화가 걸려 오면 뚜뚜~ 하는 신호음이 들립니다.</li>
										<li>이 때 통화버튼을 누르면 현 통화자는 잠시 대기상태가 되고 걸려온 전화를 받을 수 있으며 다시 한번 통화 버튼을 누르면 기존 통화자와 통화가 가능합니다.</li>
										<li>설정
											<ul>
												<li>* + 40 + 통화 → 딩동댕 음원송출 → 종료</li>
											</ul>
										</li>
										<li>해제
											<ul>
												<li>* + 400 + 통화 → 딩동댕 음원송출 → 종료</li>												
											</ul>
										</li>										
									</ul></div>
										</div>
									</div>
								<div class="tab-content-02 accordionH">
    										<!-- 0613 SEO 개선 -->
			                                <h2 class="seo-improve-heading">가입 및 유의사항</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/432/web/itemAccordion/html/', 'accordion_20190617172112.html', '2');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_통화중대기(모바일)^아코디언^', '가입 및 유의사항');" id="title2" title="가입 및 유의사항 내용" aria-expanded="false">
										</button>
										<div class="accordion-contents desc" style="display: none; height: 0px; padding-top: 50px; margin-top: 0px; padding-bottom: 50px; margin-bottom: 0px;">
											<div id="accordion2"><ul class="fare-list">
	<li>기능부여/해제는 반드시 통화가능지역에서 실행하시기 바랍니다.</li>
	<li>발신번호표시서비스와 동시에 이용하시면 통화 중 걸려오는 전화번호까지 볼 수 있습니다.</li>
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
