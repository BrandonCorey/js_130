/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
// diamond


// understand problem
// width of each diamond
// width gets two spaces wider with each additional letter
//  - starts at 1 wide with 'A', 3 with 'B' etc.
//  - A is always at the center idx of string (rounded up)
//  - Each subsequent letter has two copies, one further left, and one further right by one space
//  -each line ends with newline char

// create template string for each loop that is correct width plus a newline char
// if loop count = 0, place 'A' at midpoint
// else place chart at midpoint - count and midpoint + count
// loop until index of char in alphabet


class Diamond {
  static border = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  static makeDiamond(char) {
    const charIdx = this.border.indexOf(char);
    const width = (charIdx * 2) + 1;
    const mid = Math.ceil(width / 2);
    let spaceCnt = mid - 1;
    let string = '';

    for (let cnt = 0; cnt <= charIdx; cnt++) {
      let letter = this.border[cnt];
      let middleSpaces = this.middleSpaces(letter);
      let spaces = ' '.repeat(spaceCnt);

      if (cnt === 0) string += spaces + letter + spaces + '\n';
      else {
        string += spaces + letter + middleSpaces + letter + spaces + '\n';
      }

      spaceCnt -= 1;
    }
    spaceCnt = 1;

    for (let cnt = charIdx - 1; cnt >= 0; cnt--) {
      let letter = this.border[cnt];
      let middleSpaces = this.middleSpaces(letter);
      let spaces = ' '.repeat(spaceCnt);

      if (cnt === 0) string += spaces + letter + spaces + '\n';
      else {
        string += spaces + letter + middleSpaces + letter + spaces + '\n';
      }

      spaceCnt += 1;
    }
    return string;
  }


  static middleSpaces(letter) {
    let currLetterIdx = 1;
    let spaces = 1;
    let currentLetter = this.border[currLetterIdx];

    if (letter === 'A') return '';

    while (currentLetter !== letter) {
      spaces += 2;
      currLetterIdx++;
      currentLetter = this.border[currLetterIdx];
    }

    return (' ').repeat(spaces);
  }
}

module.exports = Diamond;
console.log(Diamond.makeDiamond('E'));