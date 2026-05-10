const payload = {
  productCode: "Z_KT_1778213099532_608",
  productName: "착신거절",
  carrier: "KT",
  category: "통화편의",
  rawHtml: `<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금 안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc"><p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>
						<table class="table-plan">
							<caption class="invisible">착신거절에 대한 내용을 상품명, 이용요금(월)으로 구분하여 정의한 표</caption>
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
									<th scope="row">착신거절</th>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/417/web/itemAccordion/html/', 'accordion_20170920171020.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_착신거절^아코디언^', '서비스 이용방법');" id="title1" title="서비스 이용방법 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1">			<ul class="fare-list">
										<li>통화하기 힘든 상황이나 게임, mp3, 카메라 등 핸드폰 사용 중 전화가 걸려왔을 경우 음성사서함으로 전환되는 통화거절 서비스입니다.</li>
										<li>착신거절 안내 멘트 : "지금 거신 전화는 고객님의 요청으로 착신이 금지되어 연결할 수 없습니다."</li>
										<li>설정 : * + 24 + 통화 + "삐~"응답음 확인 + 종료</li>
										<li>해제 : * + 240 + 통화 + "삐~"응답음 확인 + 종료</li>
									</ul></div>
										</div>
									</div>
								<div class="tab-content-02 accordionH">
    										<!-- 0613 SEO 개선 -->
			                                <h2 class="seo-improve-heading">가입 및 유의사항</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/417/web/itemAccordion/html/', 'accordion_20190617172205.html', '2');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_착신거절^아코디언^', '가입 및 유의사항');" id="title2" title="가입 및 유의사항 내용" aria-expanded="false">
										</button>
										<div class="accordion-contents desc" style="display: none; height: 0px; padding-top: 50px; margin-top: 0px; padding-bottom: 50px; margin-bottom: 0px;">
											<div id="accordion2"><ul class="fare-list">
	<li>기능 부여/해제시 반드시 통화가능지역에서 실행하시기 바랍니다.</li>
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
