const payload = {
  productCode: "Z_KT_1778213099732_63",
  productName: "HD 영상통화",
  carrier: "KT",
  category: "통화편의",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><h2 class="pduct-m-heading">고화질급의 고화질 영상과 음성으로<br>
<strong class="pduct-bold">즐기는 영상통화 서비스</strong></h2>
<img alt="고품질 서비스" class="rate-img fix" src="/static/prodetail/786/web/itemForte/img/thumb-phone-279.png"></div>
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
	<caption class="invisible">HD 영상통화에 대한 내용을 초과 요금 산정 방식에 따른 차이를 정의한 표</caption>
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
			<th scope="row">가입 요금제 기본 제공량에서 요금 산정 방식 차감<br>
			(음성통화 대비 1.66배 차감)</th>
			<td>영상 3.3원/초<br>
			알 요금제는 영상 2.5알/초</td>
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
			                                <h2 class="seo-improve-heading">사용 환경</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/786/web/itemAccordion/html/', 'accordion_20200921112130.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_HD 영상통화^아코디언^', '사용 환경');" id="title1" title="사용 환경 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>HD 영상통화는 사용자의 단말기 및 네트워크 환경에 따라 고화질/일반화질 영상통화 서비스를 제공합니다.
	<ul>
		<li>HD 영상통화 : LTE 서비스 이용가능지역 내 HD 영상통화 지원 단말 간 영상통화 시</li>
		<li>일반화질 영상통화 : 3G 서비스 이용가능지역 내 혹은 HD 영상통화 미지원 단말과 영상통화 시</li>
	</ul>
	</li>
	<li>HD 영상통화 지원 단말 및 사용 방법에 대한 자세한 안내는 KT 스마트블로그를 참고해주세요. <a class="btn small is-line-lightgray" href="http://smartblog.KT.com/1836">바로가기</a></li>
</ul>
</div>
										</div>
									</div>
								<div class="tab-content-02 accordionH">
    										<!-- 0613 SEO 개선 -->
			                                <h2 class="seo-improve-heading">가입 및 유의사항</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/786/web/itemAccordion/html/', 'accordion_20200911170249.html', '2');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_HD 영상통화^아코디언^', '가입 및 유의사항');" id="title2" title="가입 및 유의사항 내용" aria-expanded="false">
										</button>
										<div class="accordion-contents desc" style="display: none;">
											<div id="accordion2"><ul class="fare-list">
	<li>HD 영상통화는 3G 영상통화에서 진화한 고화질급 서비스로 고품질 음성과 선명하고 깨끗한 VGA급 영상을 제공합니다.</li>
	<li>고화질 영상통화 중에 끊기지 않고, 음성통화(HD 보이스)로 자유로운 전환이 가능합니다.</li>
	<li>본 상품은 로밍 서비스 및 영상사서함 서비스를 제공하지 않습니다.</li>
	<li>HD 영상통화 중 음성/영상 전환 기능은 고화질 영상통화 시에만 제공 됩니다.</li>
	<li>HD 영상통화 서비스는 일부 음성통화 부가서비스를 지원하지 않습니다.</li>
	<li>HD 영상통화는 모든 LTE 요금제에서 제공됩니다.
	<p>HD 음성/영상 서비스는 LTE 서비스 이용가능지역에서만 제공됩니다.</p>
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
