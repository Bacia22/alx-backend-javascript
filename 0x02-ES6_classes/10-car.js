export default class Car {
	constructor(brand, montor, color) {
		this._brand = brand;
		this._motor = motor;
		this._color = color;
	}

	static get [symbol.species]() {
		return this.prototype.constructor;
	}

	cloneCar() {
		return new (this.constructor[symbol.species])();
	}
}
