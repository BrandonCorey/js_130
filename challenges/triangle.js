// Write a program to determine whether a triangle is equilateral, isosceles, or scalene.
// For a shape to be a triangle at all,
// all sides must be of length > 0,
// and the sum of the lengths of any two sides
// must be greater than the length of the third side.

class Triangle {
  static isValid = function(sides) {
  let [side1, side2, side3] = sides;
  return ((sides.every(side => side > 0)) &&
          (side1 + side2) > side3 &&
          (side1 + side3) > side2 &&
          (side2 + side3) > side1)
  }

  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];
    if (!Triangle.isValid(this.sides)) {
      throw new Error('invalid side length for triangle');
    }
  }

  kind() {
    let unique = this.sides.filter((side, idx) => {
      return this.sides.indexOf(side) === idx
    });

    if (unique.length === 3) return 'scalene';
    if (unique.length === 2) return 'isosceles';
    return 'equilateral';
  }
}
module.exports = Triangle;

// Input: 3 numbers
// output: string
// - For a shape to be a triangle at all,
// - all sides must be of length > 0,
// - and the sum of the lengths of any two sides
// - must be greater than the length of the third side.


// Test cases indicate that:
// - We need a Triangle class
// - We need to return a string for a valid triangle
// - We need to throw an error for an invalid triangle


// Data structures
// - Each triangle will be an object with different side properties
// - May want to store these side properties inside of an array

// Algorithm
// Check for exceptions
// - Is any side length equal to or less than 0?
// - Is the sum of any two sides less than the length of the third?
// Triangle type
// - All sides equal, 'equilateral'
// - Two sides equal, 'isosceles'
// - All sides different, 'scalene'