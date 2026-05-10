const payload = {
  productCode: "Z_KT_1778207920717_210",
  productName: "무선데이터 차단서비스",
  carrier: "KT",
  category: "데이터",
  rawHtml: `<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금 안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc"><p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>
                     <table class="table-plan">
                        <caption class="invisible">무선데이터 차단서비스 서비스에 대한 내용을 이용 요금,제공 혜택으로 정의한 표</caption>
                        <colgroup>
                           <col style="width:25%;">
                           <col style="width:25%;">
                           <col>
                        </colgroup>
                        <thead>
                           <tr>
                              <th scope="col">상세 상품명</th>
                              <th scope="col">이용 요금(월)</th>
                              <th scope="col">제공 혜택</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th scope="row">무선데이터 차단서비스</th>
                              <td>무료</td>
                              <td>서비스를 신청하시면 별도의 설정 없이 바로 적용됩니다.</td>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/486/web/itemAccordion/html/', 'accordion_20260113140032.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_무선데이터 차단서비스^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>무절제한 무선 인터넷 사용을 차단하기 위해 만들어진 무료 부가서비스이며, 가입 이후 무선 인터넷 접속이 원천적으로 차단됩니다.</li>
	<li>모든 고객이 이용 가능한 서비스입니다. (캐쉬 선불 고객의 경우도 이용이 가능합니다.)</li>
	<li>위 상품은 온라인(kt닷컴), 전화상담(국번없이 100번) 및 직접방문(KT플라자/대리점 <a class="btn small is-line-lightgray" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창열기">매장찾기</a> )을 통해 신청 가능합니다</li>
	<li>본 서비스 가입 시 무선 인터넷 접속이 불가합니다.</li>
	<li>본 서비스 가입 시 유선 인터넷(선물하기, 멀티팩 다운로드) 사용이 제한됩니다.</li>
	<li>본 서비스는 일부 무선 데이터 월정액 및 부가서비스와 동시 가입이 불가합니다.</li>
	<li>미성년자의 경우 본 서비스 해지 시 법정 대리인의 확인 후 해지 처리가 가능합니다.</li>
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
