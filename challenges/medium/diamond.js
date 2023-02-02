const Diamond = (() => {
  const LETTER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const outerSpaces = (letterIdx, charIdx) => {
    return charIdx - letterIdx;
  };

  const middleSpaces = (char) => {
    let currcharIdx = 1;
    let spaces = 1;
    let letter = LETTER[currcharIdx];

    if (char === 'A') return '';

    while (letter !== char) {
      spaces += 2;
      currcharIdx++;
      letter = LETTER[currcharIdx];
    }

    return (' ').repeat(spaces);
  };

  const buildDiamond = (letterIdx, charIdx) => {
    let letter = LETTER[letterIdx];
    let middle = middleSpaces(letter);
    let spaces = ' '.repeat(outerSpaces(letterIdx, charIdx));
    let string = '';

    if (letterIdx === 0) string += spaces + letter + spaces + '\n';
    else {
      string += spaces + letter + middle + letter + spaces + '\n';
    }
    return string;
  };

  return class {
    static makeDiamond(char) {
      const charIdx = LETTER.indexOf(char);
      let result = '';

      for (let letterIdx = 0; letterIdx <= charIdx; letterIdx++) {
        result += buildDiamond(letterIdx, charIdx);
      }

      for (let letterIdx = charIdx - 1; letterIdx >= 0; letterIdx--) {
        result += buildDiamond(letterIdx, charIdx);
      }
      return result;
    }
  };
})();

module.exports = Diamond;