//  Create robot with random name
"use strict";
const Robot = (() => {
  const generateRandomChar = (count) => {
    let char;
    if (count === 0 || count === 1) {
      char = Math.floor((Math.random() * (91 - 65)) + 65);
    } else {
      char = Math.floor((Math.random() * (58 - 48)) + 48);
    }
    return String.fromCharCode(char);
  };

  const generateName = () => {
    let result = '';
    while (result.length < 5) {
      let char = generateRandomChar(result.length);
      result += char;
    }
    return result;
  };

  const generateUniqueName = (robot) => {
    let name;
    while (true) {
      name = generateName();
      if (!(Robot.usedNames.includes(name))) break;
    }
    robot.robotName = name;
  };

  return class {
    static usedNames = [];
    constructor() {
      generateUniqueName(this);
      Robot.usedNames.push(this.robotName);
    }

    name() {
      return this.robotName;
    }

    reset() {
      generateUniqueName(this);
    }
  };
})();

module.exports = Robot;

// Understand problem
// A new robot needs to be created
// It generates a random name at creation
// It has the ability to generate a new name with a "reset" method
// No two robots can have the same name
// input: nothing
// output: robot object

// test cases
// "robotName" will be an instance property
// "reset" will be an instance method
//  Robot constructor takes no arguments
//  Robot has "name" method that returns the name of the rogot

// Name will have following format: Two uppercase letters, followed by 3 numbers
// - Char code for 'A' is 65
// - char code for 'Z' is 90
// - CHAR CODE FOR 0 is 48
// - char code for 9 is 58
// If a robot generates a taken name, it will generate a new one automatically

// Data structure
// Will need either an array or object to store taken names
// Will most likely store this object as a property of the Robot object

// algorithm
// 1. Create a robot type
// 2. Create a a list for Robot to store names of new robots
// 3. Create new robot
//  - When we create a new robot, we need to create a new name for that robot
//  - Store the new name of the robot inside Robot used names list
// 4. Create a way to reset the robot name

// algo for creating name
// To get random charCode
// - For capital letter --> Math.floor(Math.random() * (91 - 65) + 65)
// - For digits --> Math.floor(Math.random() * (59 - 48) + 48)
// Create an empty string
// While the length of the string is less than 5
// - For the first two loops, generate a random letter code
//   - Convert code to character
// - For the last three loops, generate a random number code
//   - conver code to character
// - Check if fully created name is already taken by another robot
// - If it is, loop through all of this again


// Get random char
// - Take iteration count
// - If iteration count is 0 or 1, generate uppercase letter
// - Else, generate number
// - Return the random char