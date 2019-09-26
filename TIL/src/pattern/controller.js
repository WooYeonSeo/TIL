export default class Controller {
	constructor(model, view, info, observer) {
		this.model = model;
		this.view = view;
		this.imgLen = this.model.getImgDataLength();
		this.observer = observer;
		this.sliderState = {
			imgIndex: 0,
			slideLoop: null,
		};

		this.initSlider(this.imgLen, info.time);
		this.bindObserver();
	}

	bindObserver() {
		this.observer.addObserver('clickPrev', () => {
			this.updateImgIndex(-1);
		});
		this.observer.addObserver('clickNext', () => {
			this.updateImgIndex(1);
		});
		this.observer.addObserver('activeDot', (e) => {
			this.selectDot(e);
		});
	}

	initSlider(num, time) {
		this.view.initDot(num);
		this.setImg();
		this.slideImg(time);
	}

	setImg(newIndex = 0) {
		this.sliderState.imgIndex = newIndex;

		this.view.activeDot(newIndex);
		this.view.updateImg(this.model.getImgInfo(newIndex));
	}

	slideImg(time = 3000) {
		if(this.sliderState.slideLoop) {
			clearInterval(this.sliderState.slideLoop);
		} else {
			this.sliderState.slideLoop = setInterval(() => this.updateImgIndex(1), time);
		}
	}

	updateImgIndex(changeIndex) {
		const { imgIndex } = this.sliderState;
		const nextIndex = imgIndex + changeIndex;

		if (nextIndex < 0) {
			this.setImg(this.imgLen - 1);
		} else if (nextIndex >= this.imgLen) {
			this.setImg(0);
		} else {
			this.setImg(nextIndex);
		}
	}

	selectDot(e) {
		e.preventDefault();
		const targetIndex = e.target.dataset.index;

		this.setImg(parseInt(targetIndex,10));
	}
}