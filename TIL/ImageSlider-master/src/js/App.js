import { imgData } from './Data.js';
import ImageSliderModel from './ImageSliderModel.js';
import ImageSlider from './ImageSlider.js';
import ImageSliderViewModel from './ImageSliderViewModel.js';

class App {
	constructor() {
		this.ImageSliderModel = new ImageSliderModel(imgData);
		this.ImageSliderViewModel = new ImageSliderViewModel(this.ImageSliderModel);
		this.ImageSlider = new ImageSlider(this.ImageSliderViewModel, { time: 1000, });
	}
}

new App();