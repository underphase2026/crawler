const payload = {
  productCode: "Z_KT_1778207920806_288",
  productName: "Style안심데이터",
  carrier: "KT",
  category: "데이터",
  rawHtml: `<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금 안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc"> <p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>
                     <table class="table-plan">
                        <caption class="invisible">Style안심데이터 서비스에 대한 내용을 이용 요금,제공 혜택으로 정의한 표</caption>
                        <colgroup>
                           <col style="width:30.00%;">
                           <col style="width:30.00%;">
                           <col style="width:40.00%;">
                        </colgroup>
                        <thead>
                           <tr>
                              <th scope="col" rowspan="2">상세 상품명</th>
                              <th scope="col" rowspan="2">이용 요금(월)</th>
                              <th scope="col" colspan="2">제공 혜택</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th scope="row">Style안심데이터 100MB</th>
                              <td>5,500원</td>
                              <td>100MB 데이터 제공</td>
                           </tr>
                           <tr>
                              <th scope="row">Style안심데이터 300MB</th>
                              <td>8,800원</td>
                              <td>300MB 데이터 제공</td>
                           </tr>
                           <tr>
                              <th scope="row">Style안심데이터 500MB</th>
                              <td>11,000원</td>
                              <td>500MB 데이터 제공</td>
                           </tr>
                           <tr>
                              <th scope="row">Style안심데이터 1GB</th>
                              <td>16,500원</td>
                              <td>1GB 데이터 제공</td>
                           </tr>
                           <tr>
                              <th scope="row">Style안심데이터 2GB</th>
                              <td>22,000원</td>
                              <td>2GB 데이터 제공</td>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/236/web/itemAccordion/html/', 'accordion_20200408160419.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_Style안심데이터^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="pduct-list">
	<li>Style 요금제 가입자가 데이터를 추가로 가입하여 사용하도록 설계된 서비스로 제공된 데이터량을 모두 사용하면 자동으로 안심 차단(데이터 접속 차단) 되는 서비스 입니다.</li>
	<li>Style 요금제 이용 고객만 가입 가능합니다. <a class="btn small is-line-lightgray" href="https://product.kt.com/wDic/productDetail.do?ItemCode=36" target="_blank" title="새창이동">Style 요금제 바로가기</a></li>
	<li>기본 제공되는 데이터가 부족한 경우, 100MB(3,300원), 500MB(8,800원) 단위로 추가 충전이 가능합니다. (월 최대 10회까지)</li>
	<li>월 1회 Style안심데이터끼리 변경 가능하며, 월 중 가입 시 이용 요금은 일자별 계산됩니다.</li>
	<li>80%, 100% 데이터 소진 시(60% 추가 선택 가능) 차단 및 추가 충전 안내 문자가 발송됩니다.</li>
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
