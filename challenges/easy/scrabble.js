// Calculate scrabble points for a word

class Scrabble {
  static SCORES = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10
  };

  static score(str) {
    return new Scrabble(str).score();
  }

  static charScore(char) {
    char = char.toUpperCase().replace(/\s/);
    for (let key in this.SCORES) {
      if (key.includes(char)) return this.SCORES[key];
    }
    return false;
  }

  constructor(word) {
    this.word = word;
  }

  score() {
    let str = this.word;
    return !str ? 0 : [...str].reduce((count, char) => {
      count += Scrabble.charScore(char);
      return count;
    }, 0);
  }
}

module.exports = Scrabble;

// Understand problem
// Input: a word (string)
// output: a score (number)
// - What about invalid strings / data types?

// Test cases
// Need a "Scrabble" class
//  - Constructor takes string as argument
//  - Need a static "score" method as well that almost calculates score
// Need a "score" instance method
//  - Takes no arguments
//  - Calculates scrabble score, returns a number
//  - Validate string input

// Data structure

// const SCORES = {
//   AEIOULNRST: 1,
//   DG: 2,
//   BCMP: 3,
//   FHVWY: 4,
//   K: 5,
//   JX: 8,
//   QZ: 10
// };


// Algorithm
// 1. Create "Scabble" class
// 2. Create static property "SCORES" as an object with all scores
// 3. Create static method that calculates and returns scrabble score
// 4. Create constructor that takes word as argument
// 5. Create instance method "score" that takes no arguments returns score

// Calculating score
// 1. Create a function that takes a char, and returns an score
// 1. Step through desired string
// 2. Generate a table of all char in words and their frequency
// 3. Create a counter
// 4. Loop through charInWord
// 5. Add charScore to counter and return counter