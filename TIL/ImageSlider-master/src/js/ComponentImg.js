import View from './View.js';

export default class ComponentImg extends View {
	constructor(rootSeletor) {
		super(rootSeletor);
	}

	initElement(rootEl) {
		this.dom = {
			imgContainer: rootEl.querySelector('.img_area'),
			imgLink: rootEl.querySelector('.img_area a'),
			imgItem: rootEl.querySelector('.img_area .bannerImg'),
		};
	}

	updateImg(imgSrc) {
		Promise.resolve(this.dom.imgItem.setAttribute('src', ''))
			.then(this.dom.imgItem.setAttribute('src', imgSrc));
	}
}