// Calculate the hamming distance
// GAGCCTACTAACGGGAT
// CATCGTAATGACGGCCT
// ^ ^ ^  ^ ^    ^^ // => 7

class DNA {
  constructor(seq) {
    this.seq = seq;
  }

  hammingDistance(otherseq) {
    let seq = this.seq;
    let upper = Math.min(seq.length, otherseq.length);
    let mutations = 0;
  
    for (let cnt = 0; cnt < upper; cnt++) {
      if (seq[cnt] !== otherseq[cnt]) mutations += 1;
    }
    return mutations;
  }
}

module.exports = DNA;

// Understand problem
// Input: A DNA stand of nucleotides (string)
// Output A number of point mutations (number)

// Test cases
// We will need a class/type for "DNA"
// We will need an instance method for DNA called 'hammingDistance'
// - This method takes another DNA stand and returns number of mutations compared to instance
// - If the seq lengths are unequal, count mutations present in shorter one


// Algorithm
// Create "DNA" class
// - "DNA" constructor takes argument of DNA seq as string
// - Define an instance method for DNA class called 'hammingDistance'
//   - Takes string argument for "DNA" seq
//   - Must count DNA differences for shorter of the two seqs
//     1. Identify the shorter of the two seqs
//     2. Use the length of the shorter seq as the upper bound for a loop
//     3. Start stepping through both DNA seqs at the same time
//     4. If each nucleotide (character) is not the same, tick a couter
//     5. Return the counter when we are done stepping through the seqs