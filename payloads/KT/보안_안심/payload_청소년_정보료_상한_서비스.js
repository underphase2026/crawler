const payload = {
  productCode: "Z_KT_1778216237405_8",
  productName: "청소년 정보료 상한 서비스",
  carrier: "KT",
  category: "보안_안심",
  rawHtml: `<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금 안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc"><table class="pduct-tbl-plan first">
	<caption class="invisible">요금안내 표, 상품명, 이용 요금(월), 상품 설명 등으로 구성함</caption>
	<colgroup>
		<col style="width:34%;">
		<col style="width:33%;">
		<col style="width:33%;">
	</colgroup>
	<thead>
		<tr>
			<th>상품명</th>
			<th>이용 요금(월)</th>
			<th>상품 설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>청소년 정보료 상한 서비스</th>
			<td>무료</td>
			<td>무선인터넷 서비스 이용 시 부과되는 정보이용료의<br>
			상한금액을&nbsp;설정하여 과다 요금 청구를 방지할&nbsp;수 있는<br>
			청소년 보호서비스</td>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/1148/web/itemAccordion/html/', 'accordion_20251010090902.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_청소년 정보료 상한 서비스^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="pduct-list">
	<li>가입 채널 : 대리점, KT플라자, 모바일 상품 고객센터(100번, 114번)</li>
	<li>이용가능고객 : 청소년 요금제 중 상한이 있는 요금제 이용 고객 (알 요금제 및 복지요금제 포함)
		<ul class="pduct-desh-list">
			<li>대상 요금제 가입 시 자동 가입되며, 법정대리인 동의 하에 상한 변경 및 해지 가능</li>
			<li>성인 요금제로 변경 시 자동 해지</li>
		</ul>
	</li>
	<li>정보료 상한액 : 0원, 3,000원, 10,000원, 20,000원, 30,000원 (알 단위 : 1알=1원)</li>
	<li>정보료 상한 적용 대상
		<ul class="pduct-desh-list">
			<li>KT명세서 결제(후청구)로 구매한 VOD</li>
			<li>KT 메시지 서비스 이용 시 발생하는 정보료 (등기문자, 사진 콘텐츠 등)</li>
			<li>kt.com 및 스마트벨링 등을 통해 구매한 벨소리, 링투유 음원 등</li>
			<li class="bl-noted">참고 : 정보이용료 월정액 상품 이용 시, 정보이용료 상한 미적용</li>
		</ul>
	</li>
	<li>법정 대리인 문자 발송
		<ul class="pduct-desh-list">
			<li>한도 3,000원인 경우 : 1,000원 남은 시점과 소진 시 문자 발송으로 총 2회 발송</li>
			<li>10,000원 이상인 경우 : 5,000원 남은 시점과 소진 시 문자 발송으로 총 2회 발송</li>
		</ul>
	</li>
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
