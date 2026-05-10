const payload = {
  productCode: "Z_KT_1778216237372_302",
  productName: "불법TM 수신차단",
  carrier: "KT",
  category: "보안_안심",
  rawHtml: `<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금 안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc">  <p class="table-guide-desc">* 부가세가 포함된 실제 지불금액입니다.</p>
                            <table class="table-plan">
                                <caption class="invisible">불법TM 수신차단에 대한 내용을 이용 요금, 제공 혜택으로 나타낸 표</caption>
                                <colgroup>
                                    <col style="width:30%;">
                                    <col style="width:30%;">
                                    <col style="width:40%;">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col">상품명</th>
                                        <th scope="col">이용 요금</th>
                                        <th scope="col">제공 혜택</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">불법TM차단</th>
                                        <td>무료</td>
                                        <td>최대 50개 TM번호 차단 기능 제공</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p class="table-guide-desc">* 2013년 4월 1일자로 가격인하 되었습니다.</p></div><!-- end appendPriceInfo -->
					</div>
				</div>
			</div>
<div class="tab-toggle-area">
				<div class="column">
					<div class="inner">
						<div class="accordions active">
							<div class="tab-content-01 accordionH moveH">
    										<!-- 0613 SEO 개선 -->
			                                <h2 class="seo-improve-heading">이용안내</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/957/web/itemAccordion/html/', 'accordion_20171013142121.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_불법TM 수신차단^아코디언^', '이용안내');" id="title1" title="이용안내 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>최대 50개까지 수신 번호 차단 등록이 가능합니다.</li>
	<li>수신 차단할 전화번호는 최소 8자리 이상 최대 15자 이하까지 입력 가능하며, 등록된 전화번호의 문자와 전화 수신은 자동 차단됩니다.</li>
	<li>추가적인 기능을 원하시는 고객은 최대 100개의 번호 대역 차단과 차단 내역 확인이 가능한 특정번호 수신차단 서비스(유료)를 이용해 주시기 바랍니다. <a href="http://product.kt.com/wDic/productDetail.do?ItemCode=477" target="_blank" class="btn small is-line-lightgray">바로가기</a></li>
</ul>
</div>
										</div>
									</div>
								<div class="tab-content-02 accordionH">
    										<!-- 0613 SEO 개선 -->
			                                <h2 class="seo-improve-heading">가입 및 유의사항</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/957/web/itemAccordion/html/', 'accordion_20191016131428.html', '2');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_불법TM 수신차단^아코디언^', '가입 및 유의사항');" id="title2" title="가입 및 유의사항 내용" aria-expanded="false">
										</button>
										<div class="accordion-contents desc" style="display: none; height: 0px; padding-top: 50px; margin-top: 0px; padding-bottom: 50px; margin-bottom: 0px;">
											<div id="accordion2"><ul class="fare-list">
	<li>위 상품은 온라인(KT닷컴), 전화상담(국번없이 100번) 및 직접방문(KT플라자/대리점 <a class="btn small is-line-lightgray" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창열기">매장찾기</a> )을 통해 신청 가능합니다.</li>
	<li>공항, 앵콜, 호텔 렌탈 고객 및 특정번호 수신차단 서비스 이용 중인 경우에는 본 상품을 이용할 수 없습니다.</li>
	<li>불법TM차단, 스팸, 특정번호 수신 차단 서비스는 다른 부가서비스와의 관계에서 최우선 적용됩니다.</li>
	<li>발신자가 투넘버 서비스 이용자일 경우 원번호를 차단해도 투넘버 번호는 차단되지 않습니다.</li>
	<li>SMS 차단은 수신 번호를 기준으로 차단되며 문자열이나 무선 인터넷 주소에 의한 차단은 되지 않습니다.</li>
	<li>채팅서비스 이용 시 일부 문자에 대해 서비스 기능 제공이 되지 않을 수 있으니, 서비스 기능 정상 사용을 원하실 경우 단말에서 채팅서비스를 꺼주시면 됩니다.</li>
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
