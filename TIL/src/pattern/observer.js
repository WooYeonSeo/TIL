export default class Observer {
	constructor() {
		this.handlers = {};
	}

	addObserver(event, handler) {
		if (this.handlers[event] === undefined) {
			this.handlers[event] = [];
		}

		this.handlers[event].push({
			handler: handler,
		});
	}

	callObserve(event, data='') {
		const length = this.handlers[event].length;

		if (this.handlers[event] === undefined) {
			return;
		}

		for (let handlerIndex = 0; handlerIndex < length; handlerIndex++) {
			this.handlers[event][handlerIndex]['handler'](data);
		}
	}

	removeObserver(event, handler) {
		let length = this.handlers[event].length;

		if (this.handlers[event] === undefined){
			return;
		}

		for (let handlerIndex = 0; handlerIndex < length; handlerIndex++) {
			let currentHandler = this.handlers[event][handlerIndex];

			if (handler === currentHandler['handler']) {
				this.handlers[event].splice(handlerIndex, 1);
				return;
			}
		}
	}
}
