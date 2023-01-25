class Car {
  constructor() {
    this.wheels = 4;
    this.mileageInfo = null;
  }

  drive() {
    throw new Error('This car is broken');
  }
}

module.exports = Car;