export default class ImageSliderViewModel extends EventEmitter {
	constructor(model) {
		super();
		this.model = model;

		this.sliderState = {
			imgIndex: 0,
		};
	}

	updateDot(e) {
		e.preventDefault();
		const targetIndex = e.target.dataset.index;

		this.setImg(parseInt(targetIndex,10));
	}

	updateImgIndex(changeIndex) {
		const { imgIndex } = this.sliderState;
		const nextIndex = imgIndex + changeIndex;

		if (nextIndex < 0) {
			this.setImg(this.getImgLength() - 1);
		} else if (nextIndex >= this.getImgLength()) {
			this.setImg(0);
		} else {
			this.setImg(nextIndex);
		}
	}

	setImg(newIndex = 0) {
		this.sliderState.imgIndex = newIndex;
		this.emit('CHANGE_INDEX');
	}

	getImgLength() {
		return this.model.getImgDataLength();
	}

	getImgIndex() {
		return this.sliderState.imgIndex;
	}

	getImgInfo() {
		return this.model.getImgInfo(this.sliderState.imgIndex);
	}
}