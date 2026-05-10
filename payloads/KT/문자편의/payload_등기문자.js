const payload = {
  productCode: "Z_KT_1778215169714_863",
  productName: "등기문자",
  carrier: "KT",
  category: "문자편의",
  rawHtml: `<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금 안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc"><p class="table-guide-desc">부가세가 포함된 실제 지불금액입니다.</p>

<table class="table-plan">
	<caption class="invisible">등기문자 서비스에 대한 내용을 상품명, 이용 요금으로 정의한 표</caption>
	<colgroup>
		<col style="width:30%;">
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
			<th scope="row">등기문자</th>
			<td>
			<ul class="fare-list">
				<li>SMS 전송료&nbsp;<span class="txt-red">44</span>원 (전송료 22원+정보이용료 22원)</li>
				<li>LMS(장문메시지) 이용 시 정보이용료 무료</li>
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
			                                <h2 class="seo-improve-heading">서비스 이용방법</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/459/web/itemAccordion/html/', 'accordion_20200910145112.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_등기문자^아코디언^', '서비스 이용방법');" id="title1" title="서비스 이용방법 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>문자 전송시 상대방의 번호 입력 후 마지막에 #을 붙힌 후 전송합니다.<br>
	예) 010-1234-5678# + 전송</li>
	<li>서비스 사용 예
	<ul>
		<li>SMS를 받는 핸드폰이 MMS(사진/영상 메시지) 전용 핸드폰일 경우 수신은 MMS(사진/영상 메시지) 형태로 수신이 되며, 등기문자로 수신된 고객은 메시지의 제목에 [등기문자]라고 표시가 되어 수신됩니다.</li>
		<li>SMS를 수신하는 고객이 비MMS(사진/영상 메시지) 핸드폰 또는 타사의 핸드폰일 경우에는 일반 메시지와 동일하게 수신됩니다.<br>
		(문자전송 고객이 등기문자로 보낸 여부 확인 불가능)</li>
	</ul>
	</li>
</ul>
</div>
										</div>
									</div>
								<div class="tab-content-02 accordionH">
    										<!-- 0613 SEO 개선 -->
			                                <h2 class="seo-improve-heading">가입 및 유의사항</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/459/web/itemAccordion/html/', 'accordion_20200910145135.html', '2');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_등기문자^아코디언^', '가입 및 유의사항');" id="title2" title="가입 및 유의사항 내용" aria-expanded="false">
										</button>
										<div class="accordion-contents desc" style="display: none; height: 0px; padding-top: 50px; margin-top: 0px; padding-bottom: 50px; margin-bottom: 0px;">
											<div id="accordion2"><ul class="fare-list">
	<li>자사로 전송시 수신 핸드폰이 MMS(사진/영상 메시지) 전용 핸드폰일 경우 수신여부 확인과 읽음여부 확인까지 가능합니다.</li>
	<li>자사로 전송시 수신 핸드폰이 비MMS(사진/영상 메시지) 핸드폰일 경우 수신여부 확인만 가능합니다.</li>
	<li>타사(SKT, LGT)로 전송시 상대방 핸드폰의 종류에 관계없이 무조건 수신여부 확인만 가능합니다.</li>
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
