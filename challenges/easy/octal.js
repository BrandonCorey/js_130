// Write a method that converts an octal number to a decimal number
class Octal {
  constructor(num) {
    this.num = num;
  }

  toDecimal(octal = Number(this.num)) {
    const BASE = 8;
    const power = String(octal).length - 1;
    const digits = String(octal).split('').map(num => +num);
    const [ multiplier, ...otherDigits ] = digits;

    let sum = multiplier * (BASE ** power);

    if (digits.some(num => num > 7 ||
      Number.isNaN(num))) return 0;
    if (power === 0) return sum;
    return sum + this.toDecimal(+otherDigits.join(''));
  }
}

module.exports = Octal;