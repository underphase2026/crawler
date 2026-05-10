const payload = {
  productCode: "Z_KT_1778207920514_258",
  productName: "내 마음대로 2시간 데이터 프리",
  carrier: "KT",
  category: "데이터",
  rawHtml: `<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc"><p class="pduct-tbl-top-desc">부가세가 포함된 실제 지불금액입니다.</p>

<table class="pduct-tbl-plan">
	<caption class="invisible">요금안내 표, 상품명, 이용요금, 데이터 등으로 구성함</caption>
	<colgroup>
		<col style="width:25%;">
		<col style="width:25%;">
		<col style="width:50%;">
	</colgroup>
	<thead>
		<tr>
			<th scope="col">상품명</th>
			<th scope="col">이용요금</th>
			<th scope="col">데이터</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">내 마음대로 2시간 데이터 프리</th>
			<td>2,900원</td>
			<td>매일 원하는 2시간 무제한*</td>
		</tr>
	</tbody>
</table></div><!-- end appendPriceInfo -->
					</div>
				</div>
<div class="tab-toggle-area">
				<div class="column">
					<div class="inner">
						<div class="accordions active">
							<div class="tab-content-01 accordionH">
    										<!-- 0613 SEO 개선 -->
			                                <h2 class="seo-improve-heading">가입 및 유의사항</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/1650/web/itemAccordion/html/', 'accordion_20260126165905.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_내 마음대로 2시간 데이터 프리^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="false">
										</button>
										<div class="accordion-contents desc">
											<div id="accordion1"></div>
										</div>
									</div>
								<div class="tab-content-02 accordionH">
    										<!-- 0613 SEO 개선 -->
			                                <h2 class="seo-improve-heading">출시 기념 프로모션(‘25.11.1 ~ ‘26.1.31)</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/1650/web/itemAccordion/html/', 'accordion_20260126170334.html', '2');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_내 마음대로 2시간 데이터 프리^아코디언^', '출시 기념 프로모션(‘25.11.1 ~ ‘26.1.31)');" id="title2" title="출시 기념 프로모션(‘25.11.1 ~ ‘26.1.31) 내용" aria-expanded="false">
										</button>
										<div class="accordion-contents desc">
											<div id="accordion2"></div>
										</div>
									</div>
								<div class="tab-content-03 accordionH">
    										<!-- 0613 SEO 개선 -->
			                                <h2 class="seo-improve-heading">출시 기념 프로모션(‘25.7.21 ~ ‘25.10.31)</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/1650/web/itemAccordion/html/', 'accordion_20251024105853.html', '3');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_내 마음대로 2시간 데이터 프리^아코디언^', '출시 기념 프로모션(‘25.7.21 ~ ‘25.10.31)');" id="title3" title="출시 기념 프로모션(‘25.7.21 ~ ‘25.10.31) 내용" aria-expanded="false">
										</button>
										<div class="accordion-contents desc">
											<div id="accordion3"></div>
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
