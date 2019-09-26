import ViewModel from './ViewModel.js';

export default class ComponentImg extends ViewModel {
	constructor(rootSeletor, observer) {
		super(rootSeletor, observer);
	}

	initElement(rootEl) {
		this.dom = {
			imgLink: rootEl.querySelector('.img_area a'),
			imgItem: rootEl.querySelector('.img_area .bannerImg'),
		};
	}

	updateImg(imgSrc) {
		Promise.resolve(this.dom.imgItem.setAttribute('src', ''))
			.then(this.dom.imgItem.setAttribute('src', imgSrc));
	}
}