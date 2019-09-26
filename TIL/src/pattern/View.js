import ComponentDot from './ComponentDot.js';
import ComponentImg from './ComponentImg.js';
import ComponentArrow from './ComponentArrow.js';

export default class View {
	// ImageSlider에 사용되는 구체적인 View라 볼 수 있으니, 명시적인 이름을 가져야 함
	constructor(rootSeletor, observer) {
		const sliderRoot = document.querySelector(rootSeletor);

		this.componentDot = new ComponentDot(rootSeletor + ' .circle_area', observer);
		this.componentImg = new ComponentImg(rootSeletor + ' .img_area', observer);
		this.componentArrow = new ComponentArrow(rootSeletor + ' .arrow_area', observer);
	}

	initDot(num) {
		this.componentDot.initDot(num);
	}

	activeDot(index) {
		this.componentDot.activeDot(index);
	}

	updateImg(imgSrc) {
		this.componentImg.updateImg(imgSrc);
	}
}