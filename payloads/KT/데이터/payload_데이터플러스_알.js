const payload = {
  productCode: "Z_KT_1778207920861_790",
  productName: "데이터플러스_알",
  carrier: "KT",
  category: "데이터",
  rawHtml: `<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금 안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc">   <p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>
                     <table class="table-plan">
                        <caption class="invisible">데이터플러스(알) 서비스에 대한 내용을 월정액,데이터로 정의한 표</caption>
                        <colgroup>
                           <col style="width:20.00%;">
                           <col style="width:20.00%;">
                           <col style="width:30.00%;">
                           <col style="width:30.00%;">
                        </colgroup>
                        <thead>
                           <tr>
                              <th scope="col" rowspan="2">상세 상품명</th>
                              <th scope="col" rowspan="2">월정액</th>
                              <th scope="col" colspan="2">데이터</th>
                           </tr>
                           <tr class="row">
                              <th scope="col">기본 제공</th>
                              <th scope="col">초과시</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th scope="row">데이터플러스 100M(알)</th>
                              <td>5,500원</td>
                              <td>100MB / 51,200원 상당의 용량</td>
                              <td rowspan="3">0.02알/패킷<br>(≒45.1원/MB)</td>
                           </tr>
                           <tr>
                              <th scope="row">데이터플러스 500M(알)</th>
                              <td>11,000원</td>
                              <td>500MB / 256,000원 상당의 용량</td>
                           </tr>
                           <tr>
                              <th scope="row">데이터플러스 1G(알)</th>
                              <td>16,500원</td>
                              <td>1GB / 524,288원 상당의 용량</td>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/645/web/itemAccordion/html/', 'accordion_20191028111103.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_데이터플러스(알)^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>무선 데이터 이용량에 맞추어 저렴하게 충분히 데이터를 이용하실 수 있는 청소년 요금제 이용 고객 전용 상품입니다.</li>
	<li>기본제공 초과 시 요금 부과 기준은 0.02알/패킷(45.1원/MB, 부가세 포함)입니다.</li>
	<li>위 상품은 3G용 알 요금제(i-teen, 알스마트 요금제, 알 요금제 등) 이용 고객만 이용할 수 있습니다.</li>
	<li>알 요금제 이용 고객의 경우, 기본제공 데이터 소진 시 45.1원/MB(부가세 포함) 수준으로 요금상품 기본알에서 차감됩니다.
	<ul>
		<li>보통 포털사이트 첫 페이지 용량은 0.5MB ~ 1MB, MP3 벨소리는 3~5MB/개, 동영상 2~3MB/분 정도 사용됩니다.</li>
	</ul>
	</li>
	<li>블루투스 기능이 탑재된 일반 휴대폰(비 스마트폰)으로 테더링이 가능합니다.
	<ul>
		<li>단, 팬택 제품의 경우에는 블루투스 기능이 있더라도 테더링을 할 수 없습니다.</li>
	</ul>
	</li>
	<li>본 요금제 이용 고객에게는 KT WiFi 서비스가 기본 제공됩니다.
	<ul>
		<li>단, 데이터플러스(알) 100M 요금제인 경우에는 월 2,200원(부가세 포함) 추가시 이용 가능합니다.</li>
	</ul>
	</li>
	<li>완전자유150 요금제 이용 고객은 데이터플러스를 이용할 수 없습니다.</li>
	<li>일반 휴대폰(비 스마트폰) 가입 고객은 완전자유존이 무료로 제공됩니다.
	<ul>
		<li>완전자유존에서는 컨텐츠를 데이터 통화료, 정보료 추가 부담없이 이용할 수 있습니다.</li>
	</ul>
	</li>
	<li>데이터플러스(알) 상품은 해지 후 당월 재가입할 수 없습니다.</li>
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
