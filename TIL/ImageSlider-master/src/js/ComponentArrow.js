import View from './View.js';

export default class ComponentArrow extends View {
	constructor(rootSeletor) {
		super(rootSeletor);
	}

	initElement(rootEl) {
		this.dom = {
			arrowContainer: rootEl.querySelector('.arrow_area'),
			btnPrev: rootEl.querySelector('.prev'),
			btnNext: rootEl.querySelector('.next'),
		};
	}

	bindEvent() {
		this.dom.btnPrev.addEventListener('click', () => this.emit('CLICK_PREV'));
		this.dom.btnNext.addEventListener('click', () => this.emit('CLICK_NEXT'));
	}
}