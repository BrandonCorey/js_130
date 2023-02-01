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
