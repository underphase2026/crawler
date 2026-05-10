const payload = {
  productCode: "Z_KT_1778219567658_673",
  productName: "우리펫상조",
  carrier: "KT",
  category: "생활편의",
  rawHtml: `<div class="inner forte-area"><div class="pd-i1616-section01"><img alt="반려동물을 위한 준비, 잘 하고 계신가요?, 언젠가 다가올 이별의 순간이 후회로 남지 않도록., 사랑하는 반려동물과의 마지막 순간, 우리펫상조와 함께 미리 준비하세요." src="/static/prodetail/1616/web/itemForte/images/img/w_img_section01_20260504.png"></div>

<div class="pd-i1616-interval-box"><img alt="화장, 유골함, 추모공간, 장례예식까지, 최대 20년 보장받는 원스톱 장례지원 서비스, 우리펫상조 라이트 월 19,800원 X 24개월, 우리펫상조 베이직 월 22,000원 X 36개월, 우리펫상조 평생 월 22,000원 X 36개월" src="/static/prodetail/1616/web/itemForte/images/img/w_img_section02.png"> <img alt="왜 우리펫상조일까요?, 24개월·36개월 분할 납부로 부담은 낮추고!, 물가 상승 걱정 없이 처음 금액 그대로!, 10년·20년 내 언제든 필요한 순간에 이용하고!, ‘일생 내 혜택’ 구성으로 언제나 든든하게!" class="pd-i1616-interval-tp1" src="/static/prodetail/1616/web/itemForte/images/img/w_img_section03.png"> <img alt="01 경제적 부담은 덜고, 마음은 편하게 24개월 또는 36개월로 나눠서 부담 없이 납부할 수 있어요. KT 부가 서비스로 모바일 요금에 함께 청구되니 따로 챙길 필요 없이 간편해요., 02 가격은 그대로, 걱정은 줄이고 지금 가입한 가격 그대로! 물가가 올라가도 추가 부담 없이 서비스를 이용할 수 있어요. 가입 시 비용이 투명하게 안내되고, 분할 납부로 미리 준비 할 수 있어요., 03 오래도록 든든하게 24개월/36개월 납부만으로 최대 10년/20년 동안 필요한 순간에 언제든지 이용 가능해요., 04 일상에서도 함께하는 혜택 장례 서비스뿐 아니라 개 물림 배상 보험, 반려동물 AI 건강 체크, 음성 문진 및 맞춤 케어 리포트까지! 최대 18만 원 상당의 펫 라이프케어 서비스를 포함한 다양한 생애 내 혜택으로 반려동물의 일상을 든든하게 함께하세요., 05 믿을 수 있는 품질 전국 협회 인증 장묘시설과 협약된 전문가가 직접 진행해요. 언제 어디서든 믿고 맡길 수 있는 품질과 안전을 보장합니다." class="pd-i1616-interval-tp2" src="/static/prodetail/1616/web/itemForte/images/img/w_img_section04.png"></div>
<style type="text/css">.detail-plan-area .column, .detail-plan-area .forte-area {width:100%;transition:none;}
.pd-i1616-interval-box {width:1080px;margin:100px auto 0;}
.pd-i1616-section01 {margin:60px 0 0 0;}
.pd-i1616-interval-tp1 {margin:80px 0 0 0;}
.pd-i1616-interval-tp2 {margin:86px 0 0 0;}
</style>
<script>
const initCopyRequestPath = (function() {
	'use strict';

	const defaults = {
		copyUrl: 'https://savedream.co.kr/',
		selectors: {
			copyButton: '.btn-copy',
			copyContent: '.copy-content',
			copyToast: '.picode-copy-toast-wrap'
		},
		classes: {
			visible: 'picode-copy-isvisible',
			active: 'active',
			bound: 'copyBound'
		},
		icons: {
			head: '/static/prodetail/web/images/picode/request/icon/w_icon_copy_request_path.png',
			copy: '/static/prodetail/common/images/picode/request/icon/icon_copy_link.png',
			check: '/static/prodetail/common/images/picode/request/icon/icon_copy_check.png',
			toastCheck: '/static/prodetail/common/images/picode/request/icon/icon_copy_toast_check.png'
		},
		labels: {
			head: '신청 경로',
			content: '아껴드림(savedream.co.kr) › 펫보험/상조 › <span class="import">우리펫상조</span>',
			copy: '주소 복사',
			copied: '복사됨',
			toastTitle: 'savedream.co.kr 주소 복사 완료!',
			toastDesc: '복사된 주소를 브라우저에 붙여 넣어 <br>펫 상조 혜택을 확인하세요'
		},
		timing: {
			showDelay: 100,
			hideDelay: 2000,
			removeDelay: 300
		}
	};

	function qs(root, sel) {
		console.log(root);
		console.log(sel);

		return root ? root.querySelector(sel) : null;
	}

	function getOptions(userOptions) {
		const uOptions = userOptions || {};
		const options = Object.assign({}, defaults, uOptions);

		options.selectors = Object.assign({}, defaults.selectors, uOptions.selectors || {});
		options.classes = Object.assign({}, defaults.classes, uOptions.classes || {});
		options.icons = Object.assign({}, defaults.icons, uOptions.icons || {});
		options.labels = Object.assign({}, defaults.labels, uOptions.labels || {});
		options.timing = Object.assign({}, defaults.timing, uOptions.timing || {});

		return options;
	}

	function buildHeadHTML(options) {
		return (
			'<strong class="copy-head">' +
				'<img src="' + options.icons.head + '" alt="" class="icon">' +
				options.labels.head +
			'</strong>'
		);
	}

	function buildContentHTML(options) {
		return (
			'<div class="copy-content">' +
				options.labels.content +
			'</div>'
		);
	}

	function buildButtonHTML(options) {
		return (
			'<button type="button" class="btn-copy" data-url="' + options.copyUrl + '">' +
				'<img src="' + options.icons.copy + '" alt="" class="icon">' +
				options.labels.copy +
			'</button>'
		);
	}

	function buildToastHTML(options) {
		return (
			'<div class="picode-copy-toast-wrap">' +
				'<img src="' + options.icons.toastCheck + '" alt="">' +
				'<span class="import-tt">' + options.labels.toastTitle + '</span> ' +
			'</div>'
		);
	}

	function buildCtx(root, options) {
		if (!root) return null;

		return {
			root: root,
			btnCopy: null,
			timer: null,
			state: {
				isCopied: false
			}
		};
	}

	function renderBase(ctx, options) {
		ctx.root.classList.add(options.classes.visible);

		if (!qs(ctx.root, options.selectors.copyContent)) {
			ctx.root.insertAdjacentHTML('afterbegin', buildContentHTML(options));
		}

		if (!qs(ctx.root, '.copy-head')) {
			ctx.root.insertAdjacentHTML('afterbegin', buildHeadHTML(options));
		}

		if (!qs(ctx.root, options.selectors.copyButton)) {
			ctx.root.insertAdjacentHTML('beforeend', buildButtonHTML(options));
		}

		if (qs(ctx.root.parentElement.querySelector('.summary-info'), 'ul')) {
			const rootW = ctx.root.parentElement.querySelector('.summary-info ul').getBoundingClientRect().width;
			ctx.root.style.width = rootW + 'px';
		}

		ctx.btnCopy = qs(ctx.root, options.selectors.copyButton);
	}

	function setCopyButtonDefault(ctx, options) {
		if (!ctx.btnCopy) return;

		ctx.btnCopy.classList.remove(options.classes.active);
		ctx.btnCopy.innerHTML = (
			'<img src="' + options.icons.copy + '" alt="" class="icon">' +
			options.labels.copy
		);
	}

	function setCopyButtonActive(ctx, options) {
		if (!ctx.btnCopy) return;

		ctx.btnCopy.classList.add(options.classes.active);
		ctx.btnCopy.innerHTML = (
			'<img src="' + options.icons.check + '" alt="" class="icon tp1">' +
			options.labels.copied
		);
	}

	function showToast(ctx, options) {
		const oldToast = document.querySelector(options.selectors.copyToast);
		if (oldToast) return;

		ctx.root.insertAdjacentHTML('afterend', buildToastHTML(options));

		const toast = document.querySelector(options.selectors.copyToast);
		if (!toast) return;

		setTimeout(function() {
			toast.classList.add(options.classes.active);

			clearTimeout(ctx.timer);
			ctx.timer = setTimeout(function() {
				hideToast(ctx, options);
			}, options.timing.hideDelay);
		}, options.timing.showDelay);
	}

	function hideToast(ctx, options) {
		const toast = document.querySelector(options.selectors.copyToast);

		if (toast) {
			toast.classList.remove(options.classes.active);

			setTimeout(function() {
				if (toast.parentNode) {
					toast.remove();
				}
			}, options.timing.removeDelay);
		}

		ctx.state.isCopied = false;
		setCopyButtonDefault(ctx, options);
	}

	function updateUI(ctx, options) {
		if (ctx.state.isCopied) {
			setCopyButtonActive(ctx, options);
			showToast(ctx, options);
		} else {
			setCopyButtonDefault(ctx, options);
		}
	}

	function copyText(text) {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			return navigator.clipboard.writeText(text);
		}

		return new Promise(function(resolve, reject) {
			try {
				var ta = document.createElement('textarea');
				ta.value = text;
				ta.style.cssText = 'position:fixed;opacity:0;left:-9999px';
				document.body.appendChild(ta);
				ta.select();
				var ok = document.execCommand('copy');
				document.body.removeChild(ta);
				ok ? resolve() : reject(new Error('execCommand failed'));
			} catch (err) {
				reject(err);
			}
		});
	}

	function bindEvents(ctx, options) {
		if (ctx.root.dataset[options.classes.bound]) return;
		ctx.root.dataset[options.classes.bound] = 'true';

		if (!ctx.btnCopy) return;

		ctx.btnCopy.addEventListener('click', function(e) {
			e.preventDefault();

			const toast = document.querySelector(options.selectors.copyToast);
			if (ctx.btnCopy.classList.contains(options.classes.active) || toast) return;

			const textURL = e.currentTarget.dataset.url;
			if (!textURL) return;

			copyText(textURL).then(function() {
				ctx.state.isCopied = true;
				updateUI(ctx, options);
			}).catch(function(err) {
				console.log('복사 실패', err);
			});
		});
	}

	function init(selectorOrEl, userOptions) {
		const rootSel = selectorOrEl || '.pdt-N-btns';
		const root = typeof rootSel === 'string' ? document.querySelector(rootSel) : rootSel;

		if (!root) return;

		const options = getOptions(userOptions);
		const ctx = buildCtx(root, options);

		if (!ctx) return;

		renderBase(ctx, options);
		bindEvents(ctx, options);
	}

	return init;
})();

// 실행부
initCopyRequestPath('.pdt-N-btns');
</script></div>
<div class="price-information-area">
				<div class="column">
					<div class="inner">
       					<!-- SEO 고도화 -->
    			    	<h2 class="title">요금안내</h2>
                        <!-- //SEO 고도화 -->	    			    	
						<div id="appendPriceDiv" class="desc"><p class="pduct-tbl-top-desc">부가세가 포함된 실제 지불금액입니다.</p>

<table class="pduct-tbl-plan">
	<caption class="invisible">요금안내표, 상품명, 금액(VAT포함) 사용 기한, 제공 서비스 등으로 구성함</caption>
	<colgroup>
		<col style="width:25%;">
		<col style="width:25%;">
		<col style="width:15%;">
		<col style="width:35%;">
	</colgroup>
	<thead>
		<tr>
			<th>상품명</th>
			<th>금액 (VAT포함)</th>
			<th>사용 기한</th>
			<th>제공 서비스</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th><span class="sm pduct-skyblue">필수 장례만 담은 실속형 상품</span><br>
			우리펫상조_라이트</th>
			<td class="td-total-price-tp1">월 19,800원 <span class="pduct-red">* 24개월</span><br>
			<span class="td-total-tp1">총 475,200원</span></td>
			<td class="pduct-skyblue">가입 후 10년</td>
			<td class="td-left">
			<ul class="td-list">
				<li>기본 장례 일체 (10kg 미만)</li>
			</ul>
			</td>
		</tr>
		<tr>
			<th><span class="sm pduct-skyblue">고급 장례 + 건강까지 생각한 합리적 상품</span><br>
			우리펫상조_베이직</th>
			<td class="td-total-price-tp1">월 22,000원 <span class="pduct-red">* 36개월</span><br>
			<span class="td-total-tp1">총 792,000원</span></td>
			<td class="pduct-skyblue">가입 후 10년</td>
			<td class="td-left">
			<ul class="td-list">
				<li>기본 장례 일체 (10kg 미만)</li>
				<li>오동나무 관</li>
				<li>펫 라이프 케어 서비스</li>
			</ul>
			</td>
		</tr>
		<tr>
			<th><span class="sm pduct-skyblue">지금부터 시작되는 반려동물 20년 보장 상품</span><br>
			우리펫상조_평생</th>
			<td class="td-total-price-tp1">월 22,000원 <span class="pduct-red">* 36개월</span><br>
			<span class="td-total-tp1">총 792,000원</span></td>
			<td class="pduct-skyblue">가입 후 20년</td>
			<td class="td-left">
			<ul class="td-list">
				<li>기본 장례 일체 (10kg 미만)</li>
				<li>오동나무 관</li>
			</ul>
			</td>
		</tr>
	</tbody>
</table>

<p class="pduct-tbl-right-note pduct-red">※ 기본 장례 사항 : 염습, 추모 의식, 개별 화장, 기본 유골함 등 / 장례 시점 10kg 초과시 추가 부담금 발생 가능함.</p></div><!-- end appendPriceInfo -->
					</div>
				</div>
			</div>
<div class="tab-toggle-area">
				<div class="column">
					<div class="inner">
						<div class="accordions active">
							<div class="tab-content-01 accordionH moveH">
    										<!-- 0613 SEO 개선 -->
			                                <h2 class="seo-improve-heading">상품 개요</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title active" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/1616/web/itemAccordion/html/', 'accordion_20251029095518.html', '1');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_우리펫상조^아코디언^', '상품 개요');" id="title1" title="상품 개요 내용" aria-expanded="true">
										</button>
										<div class="accordion-contents desc" style="display: block;">
											<div id="accordion1"><ul class="pduct-list">
	<li>우리펫상조 서비스는 고품격 반려동물 장례 서비스에 대하여 월정액 &amp; 분납으로 부담 없이 제공하는 제휴형 펫 상조 서비스입니다.</li>
	<li>주요 서비스
	<table class="pduct-tbl-col">
		<caption class="invisible">상픔개요 안내표, 구분, 제공 업체, 세부 사항 등으로 구성함</caption>
		<colgroup>
			<col style="width:25%;">
			<col style="width:25%;">
			<col style="width:50%;">
		</colgroup>
		<thead>
			<tr>
				<th>구분</th>
				<th>제공 업체</th>
				<th>세부 사항</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>반려동물 장례 서비스</td>
				<td>포포즈 외<br>
				(전국 8개 장묘지)</td>
				<td class="td-left">
				<ul class="td-list">
					<li>기본 장례 : 염습, 추모 의식, 개별 화장, 기본 유골함 등 제공</li>
					<li>서비스 제공 지역 (지속 확대 예정)
					<ul class="td-desh-list">
						<li>경기/서울 (4) : 포포즈_광주, 포포즈_김포, 포포즈_화성 1호점, 포포즈_화성 2호점, 포포즈_양주</li>
						<li>충남/충북(2) : 포포즈_세종, 우바스_청주</li>
						<li>경남 (2): 포포즈_김해, 별이되다_김해</li>
					</ul>
					</li>
				</ul>
				</td>
			</tr>
			<tr>
				<td>반려견 배상책임보장보험</td>
				<td>삼성화재</td>
				<td class="td-left">개물림 사고 발생시, 피해 보상 보장
				<ul class="td-list">
					<li>사고당 보상한도 500만원 / 1년 총 보상한도 500만원</li>
				</ul>
				</td>
			</tr>
			<tr>
				<td>펫 라이프 케어 서비스</td>
				<td>㈜에이아이포펫</td>
				<td class="td-left">
				<ul class="td-list">
					<li>제공서비스: 집에서 간편하게 건강체크, 음성문진, 맞춤 케어 리포트,할인 혜택까지 제공하는 반려동물 홈케어 앱(APP) ‘티티케어’ 서비스의 라이트 상품 <a href="https://product.kt.com/wDic/productDetail.do?ItemCode=1661" class="pduct-btn-is-line">바로가기</a></li>
					<li>우리펫 베이직 상품 가입 후 가입안내 문자에 따라 사용쿠폰 및 앱 다운로드 후 쿠폰을 직접 등록하여 사용하실 수 있습니다.</li>
					<li>분납기간 내 계약 유지 고객대상으로 제공됩니다.</li>
					<li>일시불 고객의 경우, 최초 가입일로부터 36개월간 서비스 이용이 가능합니다.</li>
					<li>해지 고객의 경우, 해지 월 마지막 일까지 사용이 가능합니다.</li>
				</ul>
				</td>
			</tr>
		</tbody>
	</table>
	</li>
</ul>
</div>
										</div>
									</div>
								<div class="tab-content-02 accordionH">
    										<!-- 0613 SEO 개선 -->
			                                <h2 class="seo-improve-heading">가입/해지 방법 안내</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/1616/web/itemAccordion/html/', 'accordion_20250404165412.html', '2');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_우리펫상조^아코디언^', '가입/해지 방법 안내');" id="title2" title="가입/해지 방법 안내 내용" aria-expanded="false">
										</button>
										<div class="accordion-contents desc" style="display: none; height: 0px; padding-top: 50px; margin-top: 0px; padding-bottom: 50px; margin-bottom: 0px;">
											<div id="accordion2"><table class="pduct-tbl-col">
	<caption class="invisible">가입/해지방법 안내 표, 구분, 상세 내용, 상세 경로 등으로 구성함</caption>
	<colgroup>
		<col style="width:30%;">
		<col style="width:30%;">
		<col style="width:40%;">
	</colgroup>
	<thead>
		<tr>
			<th>구분</th>
			<th>상세 내용</th>
			<th>상세 경로</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td rowspan="2">가입</td>
			<td>PASS 앱</td>
			<td>PASS앱 &gt;&nbsp;<span class="pduct-red">펫쿵</span></td>
		</tr>
		<tr>
			<td>아껴드림(savedream.co.kr)</td>
			<td>아껴드림 &gt; 펫보험/상조 &gt; 우리펫상조</td>
		</tr>
		<tr>
			<td rowspan="2">해지</td>
			<td>PASS 앱 (해지 신청)</td>
			<td>PASS앱 &gt;&nbsp;<span class="pduct-red">펫쿵</span></td>
		</tr>
		<tr>
			<td>우리펫상조 고객 센터</td>
			<td>1899-0079</td>
		</tr>
	</tbody>
</table>
</div>
										</div>
									</div>
								<div class="tab-content-03 accordionH">
    										<!-- 0613 SEO 개선 -->
			                                <h2 class="seo-improve-heading">유의사항</h2>
			                                <!-- //0613 SEO 개선 -->
										<button type="button" class="accordion-trigger title" onclick="javascript:loadHtml.fn_getItemAccordionInfo('/static/prodetail/1616/web/itemAccordion/html/', 'accordion_20250122092852.html', '3');  detailClickStatistics.click('KT닷컴_PC_상품_모바일_모바일 부가서비스', '^KT닷컴_PC_상품_모바일_모바일 부가서비스_우리펫상조^아코디언^', '유의사항');" id="title3" title="유의사항 내용" aria-expanded="false">
										</button>
										<div class="accordion-contents desc" style="display: none; height: 0px; padding-top: 50px; margin-top: 0px; padding-bottom: 50px; margin-bottom: 0px;">
											<div id="accordion3"><ul class="pduct-list">
	<li>우리펫상조 서비스는 만 19세 이상 개인고객이 가입 및 이용 가능하며, 법인/외국인/선불폰/일뜰폰은 가입이 제한됩니다</li>
	<li>해당 상품은 ㈜우리마인즈가 제공하는 펫상조 서비스로, 총 상품금액에 대하여 납부 완료 후 서비스 이용이 가능합니다.</li>
	<li>서비스 중도 이용을 원하실 경우, 잔여 납부금을 완납하신 이후 서비스 이용이 가능하며, 잔여금 납부는 PASS앱내의 펫쿵에서 신청 가능합니다.</li>
	<li>보다 편리한 우리펫상조 서비스 이용을 위하여 아래 PASS앱 펫쿵 서비스를 꼭 가입하시기 바랍니다.</li>
	<li>서비스 해지는 PASS앱내의 펫쿵을 통해 해지신청 가능하고 ㈜우리마인즈와 고객 간의 해지 정산금 처리가 필요함에 따라 최종 ㈜우리인즈를 통해서만 처리 가능합니다. <!-- <a class="pduct-btn-is-line" href="#" target="_blank" title="새창열림">펫쿵 바로가기</a> --></li>
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
