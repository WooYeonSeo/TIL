import View from './View.js';

export default class ComponentDot extends View {
	constructor(rootSeletor) {
		super(rootSeletor);
	}

	initElement(rootEl) {
		this.dom = {
			dotContainer: rootEl.querySelector('.circle_area'),
			dotList: rootEl.querySelector('.container'),
		};

		this.template = {
			dotTemplate: `
				<li class='dot' data-index="{index}">
					<a href='#'></a>
				</li>
			`
		};
	}

	bindEvent() {
		this.dom.dotList.addEventListener('click', (e) => this.emit('ACTIVE_DOT',e));
	}

	initDot(num) {
		let dots = "";
		for (let i = 0; i < num; i++) {
			let dotTemplate = this.template.dotTemplate;
			dotTemplate = dotTemplate.replace('{index}', `${i}`);
			dots += dotTemplate;
		}
		this.dom.dotList.innerHTML = dots;
		this.dom.dots = this.dom.dotList.children;
	}

	activeDot(index) {
		const activeClass = 'on';

		[...this.dom.dots].forEach(dot => {
			if (parseInt(dot.dataset.index, 10) === index ) {
				dot.classList.add(activeClass);
			} else {
				dot.classList.remove(activeClass);
			}
		});
	}
}