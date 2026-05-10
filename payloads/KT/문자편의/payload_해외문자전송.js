const payload = {
  productCode: "Z_KT_1778215169653_249",
  productName: "해외문자전송",
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
							<caption class="invisible">해외문자전송에 대한 내용을 상품명, 이용요금(월), 이용안내로 표현한 표</caption>
							<colgroup>
								<col style="width:25%;">				
								<col style="width:20%;">
								<col>
							</colgroup>
							<thead>
							<tr>
								<th scope="col">상품명</th>
								<th scope="col">이용요금(월)</th>
								<th scope="col">이용안내</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<th scope="row">해외문자전송</th>
								<td>1건당 <span class="txt-red">110</span>원</td>
								<td>핸드폰에서 00345를 통해서 해외 문자 전송<br>예) 00345 &gt; 국가번호 &gt; 상대방 전화번호</td>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/462/web/itemAccordion/html/', 'accordion_20190617161815.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_해외문자전송^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>서비스 이용방법
	<p>해외로 문자 보내는 방법(Phone to Phone) : 핸드폰에서 00345를 통해서 해외 문자 전송 예) 00345 &gt; 국가번호 &gt; 상대방 전화번호.</p>
	</li>
	<li>본 상품은 마이페이지(http://my.kt.com)에서&nbsp;가입/해지가 불가능합니다.</li>
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
