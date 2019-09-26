export default class ViewModel {
	// 구체적인 View들을 추상화 한 class이므로 ViewModel이란 이름은 맞지 않음
	constructor(rootSeletor, observer) {
		const rootEl = document.querySelector(rootSeletor);
		this.observer = observer;

		this.initElement(rootEl);
		this.bindEvent();
	}

	initElement(rootEl) {
		this.dom = {};
		this.template = {};
	}

	bindEvent() {
	}
}