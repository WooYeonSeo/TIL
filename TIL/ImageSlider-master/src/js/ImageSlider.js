import ComponentDot from './ComponentDot.js';
import ComponentImg from './ComponentImg.js';
import ComponentArrow from './ComponentArrow.js';

export default class ImageSlider {
	constructor(viewModel, config) {
		this.viewModel = viewModel;
		this.config = {
			time: 3000,
			slideLoop: null,
		};

		this.initView('.contents');
		this.initEvent();
		this.initConfig(config);
		this.initSlider(this.viewModel.getImgLength(), this.config.time);
	}

	initView(rootSeletor) {
		this.componentDot = new ComponentDot(rootSeletor);
		this.componentImg = new ComponentImg(rootSeletor);
		this.componentArrow = new ComponentArrow(rootSeletor);
	}

	initEvent() {
		this.componentArrow.on('CLICK_PREV', () => {
			this.viewModel.updateImgIndex(-1);
		});
		this.componentArrow.on('CLICK_NEXT', () => {
			this.viewModel.updateImgIndex(1);
		});
		this.componentDot.on('ACTIVE_DOT', (e) => {
			this.viewModel.updateDot(e);
		});
		this.viewModel.on('CHANGE_INDEX', () => {
			this.updateSliderState();
		});
	}

	initConfig(config) {
		this.config = {
			...config
		}
	}

	initSlider(num, time) {
		this.initDot(num);
		this.slideImg(time);
		this.viewModel.setImg();
	}

	slideImg(time) {
		this.slideLoop = setInterval(() => {
			this.viewModel.updateImgIndex(1);
		}, time);
	}

	updateSliderState() {
		this.activeDot(this.viewModel.getImgIndex());
		this.updateImg(this.viewModel.getImgInfo());
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