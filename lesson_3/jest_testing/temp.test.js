const Car = require('./car');

describe("car Instance Tests", () => {
  let car;
  beforeEach(() => {
    car = new Car();
  });

  test("has four wheels", () => {
    expect(car.wheels).toBe(4);
  });

  test("mileage is null", () => {
    expect(car.mileageInfo).toBeNull();
  });

  test("instances are identical", () => {
    let newCar = new Car();
    expect(newCar).toEqual(car);
  });

  test("car cannot be driven", () => {
    expect(car.drive).toThrow();
  });

  test("wheels is truthy value", () => {
    expect(car.wheels).toBeTruthy();
  });

  test("car  has a 'wheels' property", () => {
    expect(car.wheels).not.toBeUndefined();
  });

  test("car is in car array", () => {
    let arr = [];
    arr.push(car);

    expect(arr).toContain(car);
  });

  test("string contains car", () => {
    let str = 'I am very scared';
    expect(str).toContain('car');
  });
}); 