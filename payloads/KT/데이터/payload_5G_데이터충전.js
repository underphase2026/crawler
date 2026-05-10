const payload = {
  productCode: "Z_KT_1778207920621_883",
  productName: "5G 데이터충전",
  carrier: "KT",
  category: "데이터",
  rawHtml: `<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc"><p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>

<table class="pduct-tbl-plan">
	<caption class="invisible">5G 데이터 충전에 대한 내용을 일반 충전, 멤버십 80% 할인 충전(차감 멤버십P)으로 구분하여 정의한 표</caption>
	<colgroup>
		<col style="width: 36%;">
		<col style="width: 32%;">
		<col style="width: 32%;">
		<col>
	</colgroup>
	<thead>
		<tr>
			<th scope="col">데이터충전 구분</th>
			<th scope="col">일반 충전</th>
			<th scope="col">멤버십 80% 할인 충전<br>
			<span class="small">(멤버십 할인금액)</span></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">5G 데이터충전 100MB</th>
			<td><span class="txt-red">1,000</span>원</td>
			<td><span class="txt-red">200</span>원 <span class="small">(800원 할인)</span></td>
		</tr>
		<tr>
			<th scope="row">5G 데이터충전 1GB</th>
			<td><span class="txt-red">7,000</span>원</td>
			<td><span class="txt-red">1,400</span>원 <span class="small">(5,600원 할인)</span></td>
		</tr>
		<tr>
			<th scope="row">5G 데이터충전 5GB</th>
			<td><span class="txt-red">15,000</span>원</td>
			<td><span class="txt-red">3,000</span>원 <span class="small">(12,000원 할인)</span></td>
		</tr>
	</tbody>
</table>

<ul class="pdc-list">
	<li>5G 요금제 기본 제공 데이터 또는 스마트기기/테더링 별도 한도 데이터를 모두 사용했을 때, 추가로 데이터를 즉시 충전하여 사용할 수 있는 5G 전용 서비스입니다.</li>
	<li>충전된 5G데이터는 당월 말까지 사용하실 수 있으며 사용 후 남은 데이터는 이월되지 않습니다.</li>
</ul>
<style type="text/css">.pduct-tbl-plan .small { font-size: 14px !important; }
</style>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/1287/web/itemAccordion/html/', 'accordion_20260127091538.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_5G 데이터충전^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><div class="pdc-content">
<ul class="pdc-list">
	<li>본 서비스는 5G 요금제만 가입이 가능합니다.</li>
	<li>일회성 충전 상품으로 요금 및 데이터 제공량은 일자별 계산이 적용되지 않습니다.</li>
	<li>데이터 제공량은 가입 당월 말일까지 사용 가능하고, 요금제 기본 제공 데이터 소진 후 차감됩니다.</li>
	<li>가입은 일반결제 또는 멤버십 80% 할인 금액으로 결제 가능합니다.
	<ul class="pdchy-list">
		<li>멤버십 80% 할인은 모바일 회선당 5G/LTE데이터충전 통합 월 3회 이용이 가능합니다.</li>
	</ul>
	</li>
	<li>충전 취소는 가입 당월에 한하여 데이터 사용량이 없는 경우만 가능합니다.
	<ul class="pdchy-list">
		<li>멤버십 80%할인 충전 취소 시, 할인 이용 횟수는 복구됩니다.(최대 3회)</li>
	</ul>
	</li>
	<!-- <li>2025년 5월 8일부터 멤버십 할인 충전은 포인트 차감 없이 80% 할인된 금액으로 충전이 가능합니다. 단, 월 3회까지 이용이 가능하며 추가 데이터 충전을 원하시는 경우 일반 충전을 통해 지속 이용 가능합니다.</li> -->
	<li>가입 후 명의 변경, 번호 이동, 일반 해지 시 잔여 데이터는 소멸되며, 복구되지 않습니다.</li>
	<li>위 상품은 온라인(KT닷컴), 전화상담(국번없이 100번) 및 직접방문(KT플라자/대리점 <a class="btn small is-line-lightgray" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창열림">매장찾기</a>)을 통해 가입 가능합니다.</li>
</ul>
</div>
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
