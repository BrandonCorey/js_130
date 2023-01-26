class RomanNumeral {
  static NUMERALS = {
    M: 1000,
    CM: 900,
    D: 500, 
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let NUMERALS = RomanNumeral.NUMERALS
    let runningNum = this.number;
    let output = '';

    for (let numeral in NUMERALS) {
      let numeralVal = RomanNumeral.NUMERALS[numeral];
      let times = Math.floor(runningNum / numeralVal)
      if (times >= 1) {
        output += numeral.repeat(times);
        runningNum -= numeralVal * times
      }
    }
    return output;
  }
}

module.exports = RomanNumeral;

// Input: a number
// Output: A roman number (string)

// Test cases
// We need a "RomanNumeral" class
// - The constructor for this class takes a number as an argument
// We need an instance method called "toRoman"
// - This method will convert our number to a roman numeral and return it

// Data structure
// - Does not seem apparent what we will use here yet
// - Perhaps an object for storing certain important values
// let ROMAN_NUMERALS = {
//    M: 1000,
//    CM: 900,
//     D: 500,
//    CD: 400,
//     C: 100,
//    XC: 90,
//     L: 50,
//    XL: 40,
//     X: 10,
//    IX: 9,
//     V: 5,
//    IV: 4,
//     I: 1
//  }

// Algorithm
// 1. Create a RomanNumeral Class
// - Create a static property with an object for all roman chars
// -  Create a static method to return this object
// 2. The constructor will take one number argument
// 3. We will use this number in the 'toRoman' method to convert
// 4. 'toRoman' definition
//   - check if number exists in roman char object
//     - We can loop through the object to check this
//     - If yes, return it
//   - figure out largest numeral that goes into our current number
//   - Do this for each digit down the line
//   - Once figured out, add roman character to a string
//   - After we have reached our number, return the string

