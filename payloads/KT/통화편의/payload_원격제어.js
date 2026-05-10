const payload = {
  productCode: "Z_KT_1778213099758_228",
  productName: "원격제어",
  carrier: "KT",
  category: "통화편의",
  rawHtml: `<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금 안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc">	<p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>
						<table class="table-plan">
							<caption class="invisible">원격제어에 대한 내용을 상품명, 요금으로 구분하여 정의한 표</caption>
							<colgroup>
								<col>
								<col>
							</colgroup>
							<thead>
							<tr>
								<th scope="col">상품명</th>
								<th scope="col">요금</th>
							</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">원격제어</th>
									<td>무료(이용 시 통화료 부과)</td>
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
			                                <h2 class="seo-improve-heading">서비스 이용방법</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/433/web/itemAccordion/html/', 'accordion_20221104102751.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_원격제어^아코디언^', '서비스 이용방법');" id="title1" title="서비스 이용방법 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>본인 핸드폰 없이도 다른 전화를 이용하여 부가서비스에 대한 등록/변경/해제를 마음대로 할 수 있는 서비스입니다.</li>
	<li>서비스 등록/해제가 가능한 서비스
	<ul>
		<li>음성 사서함, 자동연결, 착신전환, 통화중대기 서비스를 사용하기 위한 등록 및 해제가 가능합니다.</li>
		<li>자동연결, 착신전환은 먼저 부가서비스 가입을 하셔야 이용 가능합니다.</li>
	</ul>
	</li>
	<li>ARS 접속방법
	<ul>
		<li>010-6682-6016 (통화료 부과) + 통화 →비밀번호입력 → ARS안내 멘트에 따라 설정<br>
		* 초기 설정된 핸드폰 뒷 4자리 비밀번호로는 서비스 이용이 불가능하므로 비밀번호를 먼저 변경하시기 바랍니다.</li>
	</ul>
	</li>
	<li>비밀번호 변경 방법
	<ul>
		<li>본&nbsp;서비스는&nbsp;비밀번호를&nbsp;미리&nbsp;등록하셔야&nbsp;이용이&nbsp;가능합니다.&nbsp;</li>
		<li>마이페이지&nbsp;(http://my.kt.com) &gt;&nbsp;요금제/부가서비스&nbsp;&gt;&nbsp;부가서비스&nbsp;조회/변경&nbsp;메뉴에서&nbsp;상단의&nbsp;‘원격제어&nbsp;설정’을&nbsp;통해&nbsp;가능&nbsp;<br>
		<a href="https://my.kt.com/product/MobileUseAddedProdView.do" target="_blank" title="새창이동">원격제어&nbsp;비밀번호&nbsp;관리&gt;&nbsp;</a>&nbsp;</li>
		<li>KT고객센터&nbsp;전화&nbsp;신청(핸드폰에서&nbsp;114(무료) /&nbsp;일반전화에서&nbsp;1588-0010(유료))</li>
		<li>KT플라자&nbsp;및&nbsp;대리점 <a class="btn small is-line-lightgray" href="https://help.kt.com/store/KtStoreSearch.do" target="_blank" title="새창이동">매장찾기</a></li>
	</ul>
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
