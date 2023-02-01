// Write a class to create a clock
"use strict";
class Clock {
  static MIN_IN_DAY = 1440;
  static minutes(hour = 0, minute = 0) {
    return (hour * 60) + minute;
  }

  static fromMinutes(total) {
    let minutes = total % 60;
    let hours = Math.floor(total / 60);
    return new Clock(hours, minutes);
  }

  static at(hour = 0, minute = 0) {
    let total = Clock.minutes(hour, minute);
    return Clock.fromMinutes(total);
  }

  constructor(hour = null, minute = null) {
    this.hour = hour;
    this.minute = minute;
  }

  add(minutesToAdd) {
    let total = Clock.minutes(this.hour, this.minute) + minutesToAdd;
    total %= Clock.MIN_IN_DAY;
    return Clock.fromMinutes(total);
  }

  subtract(minutesToSubtract) {
    let total = Clock.minutes(this.hour, this.minute) - minutesToSubtract;
    if (total < 0) {
      total = Clock.MIN_IN_DAY - (Math.abs(total) % Clock.MIN_IN_DAY);
    }
    return Clock.fromMinutes(total);
  }

  isEqual(otherClock) {
    return (Clock.minutes(this.hour, this.minute) ===
      Clock.minutes(otherClock.hour, otherClock.minute));
  }

  toString() {
    let hour = String(this.hour).padStart(2, '0');
    let minute = String(this.minute).padStart(2, '0');
    return `${hour}:${minute}`;
  }
}

module.exports = Clock;

// Understand the problem
// We need a clock type
// The clock will have a time that tracks hours and minutes
// Can be stored as a number maybe, or a string?
// Should be able to add or subtract mintues
// Each clock should probably be in military time

// test cases and examples
// We will need a "Clock" class
// We will need an ("at") static method that returns clock at cetain time
//  - Takes two arguments
//  - First: hour (as a number)
//  - Second: minutes (as a number)
//    - Can take numbers out of range, but must convert them accodring
// Will need "add" method that can add a number of mintues to current time
// - Returns a new clock object
// Will need "subtract" method that can subtract a number of minutes from time
// - Returns a new clock object
// Will need a "toString" instance method converts time to string format '00:00'
// Should be able to compare clock times and have them be equal


// algo
// 1. Define a "Clock" class
// 2. Constructor will be blank
// 3. Define convert time static method
//   - Takes two arguments: minute, hour
//   - Will convert any out of range values to the correct ones
//   - Will return array of [minute, hour]
//   - If only one argument is provided, will only convert minutes and return
// 4. Define "at" static method
//   - Takes two arguments: hour and minute
//   - converts time using other static method
//   - Should return a new clock with a "hour" and "time" property
// 5. Define "add" instance method
//   - Converts time using static method
//   - Adds corresponding minutes to instance property
// 6. Define "subtract" instance method
//   - Converts time using static method
//   - subtracts corresponding minutes to instance property
// 7. Define "toString" instance method
//  - Converts time using static method
//  - Uses padStart(2, '0') method to get minutes string
//  - Uses padStart(2, '0') method to get hours string
//  - Concats strings on ':' and returns string


// algo for convert time method

