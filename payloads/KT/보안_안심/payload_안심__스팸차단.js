const payload = {
  productCode: "Z_KT_1778216237216_992",
  productName: "안심_ 스팸차단",
  carrier: "KT",
  category: "보안_안심",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><h2 class="pduct-m-tit ctit"><span class="pduct-rgb-code-d71826">번거로운 스팸차단 설정,</span><br>
<span class="bold">이젠 자동으로 해드려요!</span></h2>

<div style="margin:20px 0 0 0;"><img alt="POINT01 스마트 필터와 변종 문구 차단 기능으로 자동으로 스팸차단, POINT02 받고 싶지 않은 번호와 문구를 등록하시면 개별 추가 차단" src="/static/prodetail/479/web/itemForte/images/w_pduct_479.png"></div>
<!--
<script>
const btnAnchor = document.querySelectorAll('.pdt-N-btns .pdt-N-btn');

btnAnchor.forEach(function(item) {
	const original = item.onclick;

	item.href = '#';
	item.removeAttribute('title');

	item.addEventListener('click', function(e) {
	e.preventDefault();
	alert("더 나은 서비스를 위한 서비스 점검이 진행 중입니다.\n이용에 불편을 드려 죄송합니다.");
	if(original) {
		original.call(item, e);
	}
}, {capture:true});
});
</script>--></div>
				</div>
			</div>
<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc"><table class="table-plan more-margin">
	<caption class="invisible">스팸차단에 대한 내용을 이용 요금, 제공 혜택으로 구분하여 정의한 표</caption>
	<colgroup>
		<col style="width:30%;">
		<col style="width:20%;">
		<col style="width:50%;">
	</colgroup>
	<thead>
		<tr>
			<th scope="col">상품명</th>
			<th scope="col">이용 요금(월)</th>
			<th scope="col">제공 혜택</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">(안심) 스팸차단</th>
			<td>무료</td>
			<td>스팸 문자 자동 차단</td>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/479/web/itemAccordion/html/', 'accordion_20190617162800.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_(안심) 스팸차단^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>고객님의 핸드폰으로 오는 스팸 문자를 자동으로 차단 해주는 무료 부가서비스입니다.</li>
	<li>광고성 문자 이외에 고객님이 받고 싶지 않은 번호와 문구를 추가 등록하시면 해당 번호나 문구가 포함된 문자는 자동으로 필터링됩니다.</li>
	<li>필터링된 문자는 스팸 메시지함에서 확인할 수 있으며 고객님의 PC에 EXCEL 파일로 백업이 가능합니다.</li>
	<li>스팸차단 설정은 스팸필터 신청 후 해당 페이지에서 가능합니다.</li>
	<li>위 상품은 온라인(kt닷컴), 전화상담(국번없이 100번) 및 직접방문(kt플라자/대리점 <a class="btn small is-line-lightgray" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창열기">매장찾기</a> )을 통해 신청 가능합니다.</li>
	<li>본 서비스는 명의 변경 시 자동 해지 처리됩니다.</li>
	<li>스팸차단 설정은 kt.com (상품서비스 &gt; 모바일 &gt; 부가서비스 &gt; 안심/안전 &gt; 스팸차단 &gt; 설정하기)에서 가능합니다.</li>
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
