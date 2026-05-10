const payload = {
  productCode: "Z_KT_1778219567851_423",
  productName: "영문이용요금알리미",
  carrier: "KT",
  category: "생활편의",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><div class="thumb-left">
<div class="text plan-alert-eg" style="background:url('/static/prodetail/514/web/itemForte/img/thumb-phone-177.png') 90px 95px no-repeat;">
<div class="title">휴대폰 요금 청구내역을<br>
영문 문자로 받아보세요.</div>

<div class="desc">매월 납부해야 할 요금과 미납 금액을<br>
핸드폰으로 영문으로 전달해 드리는 서비스 입니다.<br>
<small>(이용요금 무료)</small></div>
</div>
</div>

<div class="notice">
<div class="notice-title">꼭 알아두세요!</div>

<ul class="fare-list">
	<li>매월 납부 해야 할 요금과 미납 금액을 핸드폰으로 - 영문으로 전달해 드리는 서비스이며, 이용 요금은 무료입니다.</li>
	<li>Get notified of your monthly usage on the go with monthly usage alerts! This free service alerts you to how much your current monthly charge is via a free text message, sent to you every 15th of the month.</li>
	<li>위 상품은 온라인(KT닷컴), 전화상담(국번없이 100번) 및 직접방문(KT플라자/대리점 매장찾기 <a class="btn small is-line-lightgray" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창이동">바로가기</a>)을 통해 신청 가능합니다.</li>
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
	<caption class="invisible">영문이용요금알리미에 대한 내용을 상품명, 이용요금(월), 제공 혜택으로 구분하여 정의한 표</caption>
	<colgroup>
		<col style="width:20%;">
		<col style="width:15%;">
		<col>
	</colgroup>
	<thead>
		<tr>
			<th scope="col">상품명</th>
			<th scope="col">이용요금(월)</th>
			<th scope="col">제공 혜택</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">영문이용요금알리미</th>
			<td>무료</td>
			<td>매월 납부해야 할 요금과 미납금액을 핸드폰 영문 문자 메시지로 전달</td>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/514/web/itemAccordion/html/', 'accordion_20200911164247.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_영문이용요금알리미^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>MMS(사진/영상 메시지) 수신 날짜는 납부 방법과 상관 없이 매월 15일에 발송됩니다.</li>
	<li>서비스에 가입하시면 신청하신 다음달부터 MMS(사진/영상 메시지)로 이용 요금이 통보됩니다.</li>
	<li>고객의 핸드폰 상태나 기타 여건(문자 서비스 폭주 등)에 의해 MMS(사진/영상 메시지) 수신에 문제가 생길 수도 있습니다.
	<ul>
		<li>(이 경우, ‘재발송’을 사용하시면 이용 요금 MMS(사진/영상 메시지)를 다시 받아보실 수 있습니다.)</li>
		<li>마이페이지&nbsp;&gt; 요금제/부가서비스 &gt; 부가서비스 조회/변경 &gt; 영문이용요금알리미(English Monthly Usage Alerts) [재발송] 버튼을 클릭하시면 이용 요금 MMS(사진/영상 메시지)를 다시 받아보실 수 있습니다.</li>
	</ul>
	</li>
	<li>재발송 시 여러 개의 번호를 보유하고 계신 고객의 경우에는 번호 별로 재발송을 신청하셔야 합니다.
	<p>(기존 이용 요금 MMS(사진/영상 메시지)는 총 합산 요금이 통보됨)</p>
	</li>
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
