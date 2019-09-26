export default class View extends EventEmitter {
	constructor(rootSeletor) {
		super();
		const rootEl = document.querySelector(rootSeletor);

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