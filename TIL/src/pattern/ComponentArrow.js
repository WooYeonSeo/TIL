import ViewModel from './ViewModel.js';

export default class ComponentArrow extends ViewModel {
	constructor(rootSeletor, observer) {
		super(rootSeletor, observer);
	}

	initElement(rootEl) {
		this.dom = {
			btnPrev: rootEl.querySelector('.prev'),
			btnNext: rootEl.querySelector('.next'),
		};
	}

	bindEvent() {
		this.dom.btnPrev.addEventListener('click', () => this.observer.callObserve('clickPrev'));
		this.dom.btnNext.addEventListener('click', () => this.observer.callObserve('clickNext'));
	}
}
