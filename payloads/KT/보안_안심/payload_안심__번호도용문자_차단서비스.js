const payload = {
  productCode: "Z_KT_1778216237029_443",
  productName: "안심_ 번호도용문자 차단서비스",
  carrier: "KT",
  category: "보안_안심",
  rawHtml: `<div class="detail-plan-area">
				<div class="column">
					<div class="inner forte-area"><div class="inner forte-area"><h2 class="pduct-m-heading ctit">
  <span class="pduct-rgb-code-d71826">문자 발송 프로그램/웹에서 발송되는</span><br>
  <span class="pduct-bold">스팸/스미싱 문자에 내 번호가 악용되는 것을 방지해드려요!</span>
</h2>

<div style="margin: 20px 0 0 0">
  <img alt="POINT01 타인이 내 전화번호로 다량 문자 발송 시도 시 문자 발송 차단, POINT02 스팸 스미싱에 내 번호가 악용되지 않도록 번호 도용 예방" src="/static/prodetail/1047/web/itemForte/images/w_pduct_1047_250428.png">
</div>

<div style="margin-top: 40px">
  <a href="https://product.kt.com/wDic/productDetail.do?ItemCode=1645" onclick="detailClickStatistics.click('KT-개인_상품서비스_모바일_상세', '^KT-개인_상품서비스_모바일_상세^부가서비스_번호도용차단^', '하단롤링_유심보호');" target="_self" title="새창열림"><img alt="(안심)유심보호서비스, 유심 이동 제한을 통한 유심 안심 기능 제공" src="/static/prodetail/485/web/itemForte/images/banner/w_1489_banner_20250527.png"></a>
</div>
<!-- <div class="pduct-485-swiper">
				<ul class="swiper-wrapper">
					<li class="swiper-slide"></li>
					<li class="swiper-slide"><a href="https://product.kt.com/wDic/productDetail.do?ItemCode=485" onclick="detailClickStatistics.click('KT-개인_상품서비스_모바일_상세', '^KT-개인_상품서비스_모바일_상세^부가서비스_번호도용차단^', '하단롤링_정보보호');" target="_self" title="새창열림"><img alt="정보보호 알림이, 인터넷상 위험과 사고 발생 시 대처 방법 등 무료 문자 알림" src="/static/prodetail/485/web/itemForte/images/banner/w_485_banner.png" /></a></li>
				</ul>
				
				<div class="swiper-auto-pagination-all">
				<div class="swiper-pagination"></div>
				
				<div class="swiper-auto-button"><button class="swiper-start-button" type="button"><img alt="시작" src="/static/common/web/img/index/btn-banner-play.png" /></button><button class="swiper-stop-button active" type="button"><img alt="정지" src="/static/common/web/img/index/btn-banner-pause.png" /></button></div>
				</div>
				</div> --><!-- <style type="text/css">.pduct-485-banner {
								position: relative;
								overflow: hidden;
								margin: 30px 0 0 0;
							}
						
							.pduct-485-swiper {
								position: relative;
								overflow: hidden;
								margin: 30px 0 0 0;
							}
						
							.pduct-485-swiper .swiper-pagination-bullet {
								margin: 0 0 0 5px;
								background: #909090;
								opacity: 1;
							}
						
							.pduct-485-swiper .swiper-pagination-bullet-active {
								width: 21px;
								border-radius: 5px;
								background: #119891;
							}
						
							.pduct-485-swiper .swiper-auto-pagination-all {
								z-index: 10;
								position: absolute;
								bottom: 10px;
								left: 0;
								width: 100%;
								font-size: 0;
								text-align: center;
							}
						
							.pduct-485-swiper .swiper-auto-pagination-all .swiper-pagination {
								position: static;
								display: inline-block;
								vertical-align: middle;
							}
						
							.pduct-485-swiper .swiper-auto-pagination-all .swiper-auto-button {
								display: inline-block;
								margin: 0 0 0 10px;
								vertical-align: middle;
							}
						
							.pduct-485-swiper .swiper-auto-pagination-all .swiper-start-button,
							.pduct-485-swiper .swiper-auto-pagination-all .swiper-stop-button {
								display: none;
							}
						
							.pduct-485-swiper .swiper-auto-pagination-all .active {
								display: block;
							}
						
							.pduct-485-swiper .swiper-slide.swiper-slide-active a:focus {
								display: block;
								height: 100%;
								outline: 2px solid #000;
								outline-offset: -2px;
							}
				</style> --><!-- <script src="/static/common/js/pduct_swiper.min.js"></script><script>
							(function ($) {
								var swiper = new Swiper(".pduct-485-swiper", {
									autoplay: {
										delay: 2500,
										disableOnInteraction: false,
									},
									loop: true,
									pagination: {
										el: ".swiper-pagination",
										clickable: true,
									},
									on: {
										slideChange: function () {
											var $slides = $(this.el).find('.swiper-slide')
											$slides.children('a').attr({ 'aria-hidden': 'true', 'tabindex': '-1' }).attr('tabindex', '-1');
						
											$slides.eq(this.activeIndex).children('a').attr({ 'aria-hidden': 'false', 'tabindex': '0' }).attr('tabindex', '0');
										},
									},
						
									onInit: function () {
										var $slides = $(this.el).find('.swiper-slide');
										$slides.each(function (index) {
											if (index !== 0) {
												$(this).children('a').attr({ 'aria-hidden': 'true', 'tabindex': '-1' }).attr('tabindex', '-1');
											} else {
												$(this).children('a').attr({ 'aria-hidden': 'false', 'tabindex': '0' }).attr('tabindex', '0');
											}
										})
									},
								});
						
						
								swiper.el.querySelector('.swiper-start-button').addEventListener('click', function () {
									this.nextElementSibling.classList.add('active');
									this.classList.remove('active');
									swiper.autoplay.start();
									this.nextElementSibling.focus();
						
								});
								swiper.el.querySelector('.swiper-stop-button').addEventListener('click', function () {
									this.previousElementSibling.classList.add('active');
									this.classList.remove('active');
									swiper.autoplay.stop();
									this.previousElementSibling.focus();
						
								});
							})(jQuery);
						</script> -->
</div></div>
				</div>
			</div>
<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">가입 및 유의사항</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc"><ul class="pduct-list">
	<li>문자중계사업자를 통해 인터넷으로 발송되는 문자 서비스에서 타인이 임의로 내 이동전화번호를 발신번호(회신번호)로 문자를 발송할 수 없도록 하는 무료 서비스입니다.</li>
	<li>서비스를 가입하면 한국인터넷진흥원(KISA)을 통해 문자중계사업자에게 접수 받은 이동전화번호가 전달되며, 문자중계사업자는 전달받은 이동전화번호로는 문자 메시지 발송을 할 수 없도록 차단합니다.   </li>
	<li>서비스 신청자가 인터넷 발송 문자 사용 시 신청 고객 본인의 전화번호로 발송하는 경우에도 차단됩니다.</li>
	<li>한국인터넷진흥원(KISA), 문자중계사업자가 연동하여 제공하는 서비스 특성 상, 서비스가 일시적으로 제공되지 않을 수 있습니다.   </li>
</ul>
</div><!-- end appendPriceInfo -->
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
