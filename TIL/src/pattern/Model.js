export default class Model {
	constructor(initialData = []) {
		this.imgData = initialData;
	}

	getImgDataLength() {
		return this.imgData.length;
	}

	getImgInfo(index) {
		return this.imgData[index];
	}

	getImgData() {
		return [...this.imgData];
	}

	setImgData(item) {
		this.imgData.push(item);
	}
}