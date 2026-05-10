const payload = {
  productCode: "Z_KT_1778215169760_689",
  productName: "Style문자",
  carrier: "KT",
  category: "문자편의",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><h2 class="pduct-m-tit">필요한 만큼 선택하여 사용하세요!<br>
<strong>Style요금제 더 알아보기</strong></h2>

<div class="thumb-left">
<div class="text style-plan" style="background:url('/static/prodetail/235/web/itemForte/img/thumb-phone-67.png') 123px 80px no-repeat;">
<div class="title">Style요금제
<p>월 <span>19,900</span>원 <small>(부가세 포함)</small></p>
</div>

<div class="desc">음성은 기본, 데이터와 문자를 필요한 만큼<br>
추가 선택하여 사용하는 서비스</div>

<p style="margin-top:15px !important"><a class="btn regular is-lightgray" href="https://product.kt.com/wDic/productDetail.do?ItemCode=36" target="_blank">Style요금제 안내</a></p>
</div>
</div>

<div class="thumb-right">
<div class="text style-plan" style="background:url('/static/prodetail/235/web/itemForte/img/thumb-phone-154.png') 587px 66px no-repeat;">
<div class="title">Style안심데이터
<p>월 <span>5,500</span>원<br>
<small>(부가세 포함/Style안심데이터 100MB 경우)</small></p>
</div>

<div class="desc">Style요금제 가입자가 데이터를 추가<br>
구매하여 사용하는 서비스</div>

<p style="margin-top:15px !important"><a class="btn regular is-lightgray" href="https://product.kt.com/wDic/productDetail.do?ItemCode=236" target="_blank">Style안심데이터 안내</a></p>
</div>
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
						<div id="appendPriceDiv" class="desc"><p class="pduct-tbl-top-desc">부가세가 포함된 실제 지불금액입니다.</p>

<table class="pduct-tbl-plan">
	<caption class="invisible">상품명, 이용요금(월), 제공 혜택으로 정의한 표</caption>
	<colgroup>
		<col style="width:25%;">
		<col style="width:20%;">
		<col>
	</colgroup>
	<thead>
		<tr>
			<th scope="col">상품명</th>
			<th scope="col">이용요금(월)</th>
			<th scope="col">제공 혜택</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">Style문자 200건</th>
			<td><span class="txt-red">3,300</span>원</td>
			<td>200건 문자 제공 (SMS/LMS(장문메시지), MMS(사진/영상메시지) 구분 없이 건수 차감)</td>
		</tr>
		<tr>
			<th scope="row">Style문자 500건</th>
			<td><span class="txt-red">6,600</span>원</td>
			<td>500건 문자 제공 (SMS/LMS(장문메시지), MMS(사진/영상메시지) 구분 없이 건수 차감)</td>
		</tr>
		<tr>
			<th scope="row">Style문자 1,000건</th>
			<td><span class="txt-red">11,000</span>원</td>
			<td>1,000건 문자 제공 (SMS/LMS(장문메시지), MMS(사진/영상메시지) 구분 없이 건수 차감)</td>
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
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/235/web/itemAccordion/html/', 'accordion_20200910164325.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_Style문자^아코디언^', '가입 및 유의사항');" id="title1" title="가입 및 유의사항 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="fare-list">
	<li>Style 요금제 가입자가 문자를 추가로 가입하여 저렴하게 사용할 수 있도록 제공하는 부가서비스 입니다.</li>
	<li>SMS/LMS(장문메시지), MMS(사진/영상메시지) 사용 시, 동일하게 1건씩 차감함으로써 LMS(장문메시지), MMS(사진/영상메시지)를 보다 저렴하게 이용하실 수 있습니다.</li>
	<li>본 요금제는 3G폰 사용자만 가입 가능합니다.</li>
	<li>Style 요금제에 가입하신 사용자만 가입 가능합니다.</li>
	<li>월 중 가입 시 이용 요금 및 제공량은 일자별&nbsp;계산됩니다.</li>
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
