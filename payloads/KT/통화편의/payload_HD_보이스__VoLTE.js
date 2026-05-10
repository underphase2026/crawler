const payload = {
  productCode: "Z_KT_1778213099720_247",
  productName: "HD 보이스 _VoLTE",
  carrier: "KT",
  category: "통화편의",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><h2 class="pduct-m-heading">GiGA LTE로 즐기는<br>
<strong class="pduct-bold">고품질 통화서비스</strong></h2>
<img alt="고품질 서비스" class="rate-img fix" src="/static/prodetail/785/web/itemForte/img/thumb-phone-278.png"></div>
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
	<caption class="invisible">HD 보이스 (VoLTE)에 대한 내용을 초과 요금 산정 방식에 따른 차이를 정의한 표</caption>
	<colgroup>
		<col>
		<col style="width:50%;">
	</colgroup>
	<thead>
		<tr>
			<th scope="col">구분</th>
			<th scope="col">초과요금 산정 방식</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">가입 요금제 기본 제공량에서 요금 산정 방식 차감</th>
			<td>가입요금제 요금 산정 방식에 따라 과금</td>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/785/web/itemAccordion/html/', 'accordion_20221101151928.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_HD 보이스 (VoLTE)^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>HD 보이스는 기존 음성통화에서 진화한 HD급 서비스로 고품질의 음성 서비스를 지원합니다.</li>
	<li>HD 보이스 통화 중에 끊기지 않고, 자연스럽게 음성과 영상간 상호 전환이 가능합니다.</li>
	<li>통화 접속 시간도 기존 음성대비(5초) HD 보이스(0.25~2.5초)는 최대 20배 빠른 접속 속도를 제공합니다.</li>
	<li>HD 보이스 서비스를 이용해도 별도 데이터 차감은 없으며, 이용중인 요금제의 음성 기본제공량에서 차감되며, 초과시 요금 산정 방식에 따라 과금 됩니다.
	<p>단, 통화중 동시에 사용하는 데이터는 데이터 기본제공량에서 차감되고 기본제공량 초과시 요금 산정 방식에 따라 과금됩니다.<br>
	(※ 무료 프로모션 종료에 따라 8월 1일부터 망내/외 HD 보이스 통화에 과금됨)</p>
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
