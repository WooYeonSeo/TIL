import { imgData } from './Data.js';
import Model from './Model.js';
import View from './View.js';
import Controller from './Controller.js';
import Observer from './Observer.js';

class App {
	constructor() {
		this.observer = new Observer();
		this.model = new Model(imgData);
		this.view = new View('.contents', this.observer);
		this.controller = new Controller(this.model, this.view, { time:1000, }, this.observer);
	}
}

new App();