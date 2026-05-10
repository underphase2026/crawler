const payload = {
  productCode: "Z_KT_1778207920730_718",
  productName: "LTE안심QoS옵션",
  carrier: "KT",
  category: "데이터",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><h2 class="pduct-m-heading">LTE안심Qos옵션 요금제는 월정액 5,500원으로<br>
통신 속도 400kbps 이하 추가 데이터 이용료 없이<br>
안심하고 데이터를 이용하실 수 있는 서비스입니다.</h2>
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
	<caption class="invisible">LTE안심QoS옵션에 대한 내용을 상품명, 이용요금(월), 제공혜택으로 구분하여 정의한 표</caption>
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
			<th scope="row">LTE안심QoS옵션</th>
			<td><span class="txt-red">5,500</span>원</td>
			<td>일정 속도(400kbps) 이하로 데이터 무제한 이용 가능</td>
		</tr>
	</tbody>
</table>

<p class="table-desc">'17.4.1일자로 9,900원에서 5,500원으로 월 이용요금 변경(부가세 포함)</p>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/749/web/itemAccordion/html/', 'accordion_20200922111127.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_LTE안심QoS옵션^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>LTE 일반형 요금제 가입 후 데이터 기본 제공량 소진 시, 데이터 서비스를 안심하고 이용할 수 있는 서비스입니다.
	<p>단, VOD 등이 차단되며 통신 속도를 400kbps 이하로 조절하여 웹서핑, 이메일이 가능한 수준으로 변경됩니다.</p>
	</li>
	<li>QoS(인터넷속도제어) 제어는 기본 제공 데이터를 모두 사용한 다음부터 적용됩니다.</li>
	<li>위 상품은 온라인(kt.com), 전화상담(국번없이 100번) 및 직접방문(KT플라자/대리점 <a class="btn small is-line-lightgray" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창이동">매장찾기</a>)을 통해 신청 가능합니다.</li>
	<li>위 상품은 LTE 요금제 이용 고객만 가입할 수 있습니다.
	<p>단 안심차단형, 이월 가능한 요금제, QoS(인터넷속도제어) 제어를 받는 요금제는 가입하실 수 없습니다.</p>
	</li>
	<li>월 중 가입하더라도 다음달 1일부터 적용됩니다.</li>
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
