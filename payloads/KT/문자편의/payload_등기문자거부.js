const payload = {
  productCode: "Z_KT_1778215169741_933",
  productName: "등기문자거부",
  carrier: "KT",
  category: "문자편의",
  rawHtml: `<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금 안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc"><p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>
						<table class="table-plan">
							<caption class="invisible">등기문자거부에 대한 내용을 상품명, 이용요금(월), 제공 혜택으로 구분하여 정의한 표</caption>
							<colgroup>								
								<col style="width:20%;">
								<col style="width:15%;">
								<col>				
							</colgroup>
							<thead>
							<tr>
								<th scope="col">상품명</th>
								<th scope="col">이용요금(월)</th>
								<th scope="col">제공 혜택</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<th scope="row">등기문자거부</th>
								<td>무료</td>
								<td>상대방에게 문자수신 또는 읽음 여부를 알려주지 않는 기능 제공</td>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/483/web/itemAccordion/html/', 'accordion_20190617161254.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_등기문자거부^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>문자 수신 또는 읽음 여부를 확인해주는 상품(등기문자)으로부터 사생활 보호를 위해 수신 또는 읽음 확인을 알려주지 않는 기능을 제공합니다.</li>
	<li>위 상품은 온라인(kt.com), 전화상담(국번없이 100번) 및 직접방문(KT플라자/대리점 <a class="btn small is-line-lightgray" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창이동">매장찾기</a>)을 통해 신청 가능합니다.</li>
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
