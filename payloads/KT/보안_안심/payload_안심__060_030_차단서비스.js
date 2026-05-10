const payload = {
  productCode: "Z_KT_1778216237273_812",
  productName: "안심_ 060_030 차단서비스",
  carrier: "KT",
  category: "보안_안심",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><h2 class="pduct-m-tit ctit"><span class="pduct-rgb-code-d71826">자주 걸려오는 060등 정보제공 사업자 번호,</span><br>
<span class="bold">이젠 번거롭지 않게 모두 차단하세요!</span></h2>

<div style="margin:20px 0 0 0;"><img alt="POINT01 선택된 정보제공 사업바번호 음성, 문자 차단, POINT02 030, 060 등 번호부터 원하는 차단 번호까지 최대 10개 번호 차단" src="/static/prodetail/478/web/itemForte/images/w_pduct_478_20260123.png"></div>
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
	<caption class="invisible">요금안내 표,. 상품명, 이용요금(월), 제공혜택 등으로 구성함</caption>
	<colgroup>
		<col style="width:25%;">
		<col style="width:20%;">
		<col>
	</colgroup>
	<thead>
		<tr>
			<th scope="col">상품명</th>
			<th scope="col">이용요금(월)</th>
			<th scope="col">제공혜택</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">(안심) 060/030 차단서비스<br>
			<span class="sm">정보제공사업자번호차단</span></th>
			<td>무료</td>
			<td class="td-left">
			<ul class="td-list">
				<li>정보 제공 사업자 번호(030, 060)에 대해 일괄 수신차단하는 기능 제공<br>
				(원하는 차단 번호는 직접 입력)</li>
				<li>선택된 음성/문자/음성+문자에 대해 수신차단 기능 제공</li>
				<li>070, 080, 15XX, 16XX 등의 국번도 추가 차단 가능</li>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/478/web/itemAccordion/html/', 'accordion_20260123153634.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_(안심) 060/030 차단서비스 &lt;br /&gt;정보제공사업자번호차단^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="pduct-list">
	<li>정보 제공 사업자로부터 오는 스팸 음성과 스팸 문자 메시지를 차단하는 서비스입니다.</li>
	<li>본 상품은 온라인(kt닷컴), 전화상담(국번없이 100번) 및 직접방문(KT플라자/대리점 <a class="pduct-btn-is-line" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창열림">매장찾기</a>)을 통해 신청 가능합니다.</li>
	<li>수신 차단 국번은 030, 060 등 지정된 식별 번호만 입력 가능합니다. (예: 030, 0301, 060, 1610)</li>
	<li>원하시는 고객의 경우 070, 080, 15XX, 16XX 번호도 추가 차단설정이 가능합니다.
		<ul class="pduct-desh-list">
			<li>070 번호 차단 시 인터넷전화 수신이 함께 차단될 수 있는 점 유의하시기 바랍니다(070 번호 차단은 대리점 방문을 통해 신청 가능)</li>
			<li>15XX 식별 번호 차단 요청 시 금융권에서 자동 이체 및 카드 결제 시에 발송되는 SMS도 차단될 수 있으니 유의하십시오.</li>
		</ul>
	</li>
	<li>수신 차단 국번은 최대 10개까지 입력 가능합니다.</li>
	<li>수신 차단 국번은 최소 3자리에서 최대 8자리까지 입력 가능합니다.</li>
	<li>중복된 수신 차단 번호는 입력이 불가능합니다. (예: 0301 번호와 03011 번호는 중복된 번호이므로, 0301만 입력 하시면 됩니다.)</li>
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
