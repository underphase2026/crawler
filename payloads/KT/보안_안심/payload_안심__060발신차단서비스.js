const payload = {
  productCode: "Z_KT_1778216237300_677",
  productName: "안심_ 060발신차단서비스",
  carrier: "KT",
  category: "보안_안심",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><h2 class="pduct-m-tit ctit"><span class="pduct-rgb-code-d71826">나도 모르게 060으로 발신해서 새고있는 요금,</span><br>
<span class="bold">요금폭탄을 미연에 방지하세요!</span></h2>

<div style="margin:20px 0 0 0;"><img alt="POINT01 060 발신 전화를 신속하게 감지해 자동으로 060 차단, POINT02 나도 모르게 나가는 운세, 상담, 후원금을 막아 과도한 요금 발생 방지" src="/static/prodetail/686/web/itemForte/images/w_pduct_686.png"></div>
</div>
				</div>
			</div>
<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금 안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc"><p class="pduct-tbl-top-desc">부가세가 포함된 실제 지불금액입니다.</p>
<table class="pduct-tbl-plan">
	<caption class="invisible">060발신차단서비스의 이용 요금을 나타낸 표</caption>
	<colgroup>
		<col style="width:30%;">
		<col style="width:35%;">
		<col style="width:35%;">
	</colgroup>
	<thead>
		<tr>
			<th scope="col">상품명</th>
			<th scope="col">이용 요금</th>
			<th scope="col">제공혜택</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">(안심) 060발신차단서비스</th>
			<td>무료</td>
			<td>060으로 시작하는 번호 발신을 자동 차단</td>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/686/web/itemAccordion/html/', 'accordion_20190617163034.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_(안심) 060발신차단서비스^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>060발신차단서비스 가입 시 060으로 시작하는 번호를 자동으로 차단합니다.</li>
	<li>060 발신 시 과도한 요금이 나오는 것을 미연에 방지하기 위해, 060 발신을 감지 및 차단하도록 설정하는 서비스입니다.</li>
	<li>미성년 고객의 정보이용료 과다 부과방지를 위해 2011년 2월 7일부터 만 18세 이하 이용자는 본 서비스가 자동 가입됩니다.</li>
	<li>해지는 kt.com(마이페이지)에서 법정대리인의 SMS 인증을 통해 가능합니다.</li>
	<li>위 상품은 온라인(kt.com), 전화상담(국번없이 100번) 및 직접방문(KT플라자/대리점 <a class="btn small is-line-lightgray" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창열기">매장찾기</a> )을 통해 신청 가능합니다</li>
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
