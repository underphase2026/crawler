const payload = {
  productCode: "Z_KT_1778218885499_120",
  productName: "요금납부알림서비스",
  carrier: "KT",
  category: "금융결제",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><div class="thumb-left">
<div class="text plan-alert-cp" style="background: url(&quot;/static/prodetail/535/web/itemForte/img/thumb-phone-178.png&quot;) no-repeat 120px 125px;">
<div class="title">휴대폰 요금이 납부되면<br>
문자로 알려드려요!</div>

<div class="desc">매월 납부하신 휴대폰 요금 내역을<br>
핸드폰으로 전달해 드리는 서비스 입니다.<br>
<small>(이용요금 무료)</small></div>
</div>
</div>

<div class="notice">
<div class="notice-title">꼭 알아두세요!</div>

<ul class="fare-list">
	<li>고객이 자동이체(은행,신용카드) 및 1회성(현금,신용카드,전용계좌,지로)으로 요금을 납부할 경우 요금납부 확인 SMS를 발송하는 서비스 입니다.</li>
	<li>SMS 문자 통보 내용 : 납부일자, 납부방법, 납부금액
	<p>예) 은행자동이체 납부 : 08/07 국민은행계좌로 자동이체 된 KT 요금 45,670원이 납부확인 되었습니다.</p>
	</li>
	<li>SMS 발송시점 : 자동이체 및 지로 납부는 수납반영일 다음날 오전 / 기타 1회성 납부는 수납반영 시점에 발송</li>
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
						<div id="appendPriceDiv" class="desc"><p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>
						<table class="table-plan">
							<caption class="invisible">요금납부알림 서비스에 대한 내용을 상품명, 이용요금(월)으로 구분하여 정의한 표</caption>
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
									<th scope="row">요금납부알림서비스</th>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/535/web/itemAccordion/html/', 'accordion_20190617165246.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_요금납부알림서비스^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>여러 개의 번호를 하나의 청구계정으로 납부하시는 고객의 경우 모든 전화번호에 SMS가 발송됩니다.</li>
	<li>서비스에 가입하시면 신청하신 시점 이후 SMS로 납부확인이 통보 됩니다.</li>
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
