const payload = {
  productCode: "Z_KT_1778213099773_749",
  productName: "호보류",
  carrier: "KT",
  category: "통화편의",
  rawHtml: `<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금 안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc">	<p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>
						<table class="table-plan">
							<caption class="invisible">호보류에 대한 내용을 상품명, 이용요금(월)으로 구분하여 정의한 표</caption>
							<colgroup>
								<col>
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
									<th scope="row">호보류</th>
									<td>무료</td>
								</tr>
							</tbody>
						</table>
						<ul class="fare-list">
							<li>서비스에 가입하시면 자동으로 제공됩니다.</li>
						</ul></div><!-- end appendPriceInfo -->
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/418/web/itemAccordion/html/', 'accordion_20170920170837.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_호보류^아코디언^', '서비스 이용방법');" id="title1" title="서비스 이용방법 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1">		<ul class="fare-list">
										<li>전화 통화 중 다른 곳에서 급하게 전화가 걸려오거나 해야 하는 경우 끊지 않고 잠시 대기시킨 후 다른 곳에 전화를 하고 난 뒤 다시 처음 통화자와의 통화로 연결시켜주는 호보류 서비스입니다.</li>
										<li>통화 + * + 21 + 상대방 전화번호 + 통화<br>새로운 통화자와 통화가 끝난 다음 처음의 통화자와 다시 통화할 때 통화를 누르시면 됩니다.<br>*상대방 전화번호에 반드시 지역번호 또는 식별번호를 눌러야 합니다.</li>
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
