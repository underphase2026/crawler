const payload = {
  productCode: "Z_KT_1778219567717_372",
  productName: "전국민할인요금",
  carrier: "KT",
  category: "생활편의",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><div class="thumb-left">
<div class="text whole-nation" style="background:url('/static/prodetail/212/web/itemForte/img/thumb-phone-211.png') 99px 58px no-repeat;">
<div class="title">통화량이 많은<br>
사용자에게 추천해요!</div>

<div class="desc">휴대폰으로 발신하는 국내 음성/영상 통화료를<br>
30% 할인해드리는 서비스 입니다.</div>
</div>
</div>

<div class="list-area-01 catchcall-plus"><strong>꼭 알아두세요!</strong>

<ul class="fare-list">
	<li>위 상품은 온라인(KT닷컴), 전화상담(국번없이 100번) 및 직접방문(KT플라자/대리점&nbsp;<a class="btn small is-line-lightgray mt0" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창이동">매장찾기</a> )을 통해 신청 가능합니다.</li>
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
						<div id="appendPriceDiv" class="desc"><p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>

<table class="table-plan">
	<caption class="invisible">전국민할인요금에 대한 내용을 상품명, 이용요금(월), 혜택으로 구분하여 정의한 표</caption>
	<colgroup>
		<col style="width:20%;">
		<col style="width:20%;">
		<col>
	</colgroup>
	<thead>
		<tr>
			<th scope="col">상품명</th>
			<th scope="col">이용요금(월)</th>
			<th scope="col">혜택</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">전국민할인요금</th>
			<td>2,750원</td>
			<td>
			<ul class="fare-list">
				<li>모든 이동통신사와의 국내 음성/영상 통화료 30% 할인</li>
				<li>할인대상 식별번호 : 010, 011, 016, 017, 018, 019</li>
			</ul>
			</td>
		</tr>
	</tbody>
</table>
</div><!-- end appendPriceInfo -->
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/212/web/itemAccordion/html/', 'accordion_20190617172233.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_전국민할인요금^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>010, 016, 018, 011, 017, 019로 시작하는 전화번호로 발신하는 경우에만 할인이 적용됩니다.
	<ul>
		<li>유선 전화번호와 016/018로 시작하는 200/700 국번 대역, 060, 080, 1588, 1566 등 전화정보서비스 이용료 및 특수번호로 발신하는 경우는 할인되지 않습니다.</li>
	</ul>
	</li>
	<li>무료통화 요금상품과 동시 가입 시 제공통화 선 적용 후, 초과 통화료에 대해 할인 적용됩니다.</li>
	<li>국내 음성/영상 통화료가 할인되는 요금상품과 동시 가입하는 경우, 요금상품에 적용되는 할인과 전국민30%할인이 중복 적용됩니다.
	<ul>
		<li>예) 지정번호할인(40% 할인)요금상품 가입자가 전국민할인요금을 가입한 경우, 지정번호에 적용되는 40% 할인 적용 후, 전국민30%할인이 적용되어 최종적으로 58%가 할인됩니다.</li>
	</ul>
	</li>
	<li>kt 패밀리 50% 할인요금 상품과 동시 가입하실 수 없습니다.</li>
	<li>2007년 11월 2일 이전 신규가입 제한 요금제 및 선불요금상품, 청소년 요금제, 자동상한요금제, 복지요금제, 손말요금제, 모뎀전용요금제, 법인전용요금제는 가입 불가합니다.</li>
	<li>해당 서비스를 해지하실 경우 1개월 이내 재가입이 되지 않습니다.</li>
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
