const payload = {
  productCode: "Z_KT_1778219567834_833",
  productName: "내위치전송 서비스",
  carrier: "KT",
  category: "생활편의",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><div class="thumb-left">
	<div class="text my-position" style="background:url('/static/prodetail/463/web/itemForte/img/thumb-phone-185.png') 120px 75px no-repeat;">
		<div class="title">현재 내 위치를 지도에 <br>표시해서 보내주세요.</div>
		<div class="desc">
			위급 상황 발생 시 구조/구난활동에 유용하게 <br>이용할 수 있습니다.
		</div>
	</div>
</div>
<div class="notice">
	<div class="notice-title">꼭 알아두세요!</div>
	<ul class="fare-list">
		<li>메시지를 보낼 때 현재 자신의 위치를 지도로 표시하여 보내주는 서비스</li>
		<li>본 서비스는 문자메시지 작성 후 지도만 첨부하는 방식으로 이용절차가 간편하여, 위급/급 상황 발생시 구조/구난활동에 유용하게 이용 가능합니다.</li>
	</ul>
</div></div>
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
	<caption class="invisible">내위치전송 서비스에 대한 내용을 상품명, 이용요금(월)으로 구분하여 정의한 표</caption>
	<colgroup>
		<col style="width:50%;">
		<col>
	</colgroup>
	<thead>
		<tr>
			<th scope="col">상품명</th>
			<th scope="col">이용요금</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">내위치전송 서비스</th>
			<td>건당 275원<br>
			(MMS(사진/영상 메시지) 전송료 220원, 정보 이용료 55원)</td>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/463/web/itemAccordion/html/', 'accordion_20190617165509.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_내위치전송 서비스^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>내위치전송 서비스는 위치정보 메뉴가 탑재된 핸드폰에서만 이용 가능합니다.</li>
	<li>본 상품은 별도의 가입 절차 없이, 이용 건당 275원(부가세 포함)이 부과되는 서비스입니다.</li>
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
