const payload = {
  productCode: "Z_KT_1778219567817_704",
  productName: "데이터 전용 단말 통보 서비스",
  carrier: "KT",
  category: "생활편의",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><div class="thumb-left">
<div class="text count-date" style="background: url(&quot;/static/prodetail/536/web/itemForte/img/thumb-phone-184.png&quot;) no-repeat 120px 75px;">
<div class="title">패드, 태블릿 PC에서<br>
데이터를 얼만큼 사용했을까?</div>

<div class="desc">태블릿 PC의 데이터 소진율을 지정하신 핸드폰으로<br>
알림 받아보세요.</div>
</div>
</div>

<div class="notice">
<div class="notice-title">꼭 알아두세요!</div>

<ul class="fare-list">
	<li>iPad, 갤럭시탭 등 태블릿PC의 데이터 소진율을 지정하신 핸드폰으로 문자메시지 알림</li>
	<li>제공 데이터의 60%, 80%, 100% 소진 시 문자메시지로 전달</li>
	<li>기본료에서 2/4/6/8/10/15만원 초과 시 문자메시지로 전달</li>
	<li>위 상품은 온라인(KT닷컴), 전화상담(국번없이 100번) 및 직접방문(KT플라자/대리점 <a class="btn small is-line-lightgray" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창이동">매장찾기</a> )을 통해 신청 가능합니다.</li>
</ul>
</div>
</div>
				</div>
			</div>
<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금 안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc">		<p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>
						<table class="table-plan">
							<caption class="invisible">데이터 전용 단말 통보 서비스에 대한 내용을 상품명, 이용요금(월)으로 구분하여 정의한 표</caption>
							<colgroup>
								<col style="width:50%;">
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
									<th scope="row">데이터 전용 단말 통보 서비스<br>(구) Pad 사용량 통보 서비스</th>
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
			                                <h2 class="seo-improve-heading">가입 및 유의사항</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/536/web/itemAccordion/html/', 'accordion_20190617165432.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_데이터 전용 단말 통보 서비스^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block; height: 0px; padding-top: 50px; margin-top: 0px; padding-bottom: 50px; margin-bottom: 0px;">
											<div id="accordion1"><ul class="fare-list">
	<li>서비스 가입시 문자메시지 수신 핸드폰 번호를 입력해야 가입이 가능합니다. (타사 번호 입력 가능)</li>
	<li>순 데이터(LTE/3G), 스마트액션, 데이터평생(LTE/3G) 요금을 이용 중이신 고객님만 가입 가능합니다.</li>
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
