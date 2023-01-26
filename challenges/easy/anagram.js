
const Anagram  =  (function () {
  const sortWord = word => [...word].sort().join('');
  const validAnagram = (...args) => {
    let [ word1, word2 ] = args.map(el => el.toLowerCase());

    if (word1 === word2) return false;
    return sortWord(word1) === sortWord(word2);
  }

  return class {
    constructor(word) {
      this.word = word;
    }
  
    match(array) {
      return array.filter(word => {
        return validAnagram(word, this.word);
      });
    }
  }
})();
  

module.exports = Anagram;