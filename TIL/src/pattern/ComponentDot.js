import ViewModel from './ViewModel.js';

export default class ComponentDot extends ViewModel {
	constructor(rootSeletor, observer) {
		super(rootSeletor, observer);
	}

	initElement(rootEl) {
		this.dom = {
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
		this.dom.dotList.addEventListener('click', (e) => this.observer.callObserve('activeDot', e));
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