const payload = {
  productCode: "Z_KT_1778216237389_462",
  productName: "자녀정보이용료알리미",
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
			<th>자녀정보이용료알리미</th>
			<td>무료</td>
			<td>자녀의정보이용료 사용 금액이 일정 금액 이상 초과 시<br>법정대리인에게 문자를 발송하는 서비스</td>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/515/web/itemAccordion/html/', 'accordion_20251010091406.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_자녀정보이용료알리미^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="pduct-list">
	<li>이용가능고객 : KT에 만 20세 미만 미성년자 명의로 개통된 고객 (명의자가 성인이거나, 실사용자가 미성년자인 경우 미제공)   
		<ul class="pduct-desh-list">
			<li>청소년 요금제 및 복지 요금제 사용자, 미성년자의 경우 자동 가입</li>
			<li>법정대리인 동의 후 해지 가능하며, 명의자가 만 20세 도래한 월말 자동해지</li>
		</ul>
	</li>
	<li>문자발송기준
		<ul class="pduct-desh-list">
			<li>문자 수신자 : 명의자 및 법정대리인 (단, 법정대리인 연락처 미등록 시 명의자만 문자 수신)</li>
			<li>통보 대상 : 데이터통화료, 정보이용료, 음성/영상통화 사용료, 문자사용료</li>
			<li>기준 금액 : 3천원, 5천원, 1만원, 1만 5천원, 2만원, 2만 5천원, 3만원, 4만원, 5만원, 6만원, 8만원, 10만원</li>
		</ul>
	</li>
	<li>자녀정보료 알리미 미가입 시 명의자에게만 문자 발송(법정대리인에게는 미발송)</li>
	<li>법정대리인이 타사 사용 시에도 통보됨</li>
	<li>법정대리인 연락처 등록해야만 해당 연락처로 자녀정보료 알리미가 통보됨</li>
	<li>자녀정보료 알리미 해지 시 해지 안내 문자는 명의자에게만 발송</li>
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
