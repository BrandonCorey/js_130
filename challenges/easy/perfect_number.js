
const PerfectNumber = (() => {
  const sumOfDivisors = num => {
    if (num < 0) throw new Error('invalid input');
    const divisors = [];

    for (let div = 0; div < num; div++) {
      if (num % div === 0) divisors.push(div);
    }
    return divisors.reduce((a, b) => a + b, 0);
  };

  return class {
    static classify(num) {
      let sum = sumOfDivisors(num);
      if (sum === num) return 'perfect';
      if (sum > num) return 'abundant';
      return 'deficient';
    }
  };
})();

module.exports = PerfectNumber;


// input: a number
// output: a string

// Understanding problem
// Need a function/method
// - tells us if we have perfect, abundant, of deficient number
// - pefect (all divisors of number summed equal number)
// - abundant (all divisors of number summed greater than number)
// - deficient (all disivosrs of number summed are less than number)

// Testing
// Need a PerfectNumber class
// Need a static method classify
// - Method will classify what type of number we have

// algo
// 1. Create necessary class
// 2. Add a "classify" static method
// 3. Get sum of divisors
// - Get all divisors
//   - Loop from 0 up until our target number
//   - Mod our target number by our incrementor each step of way
//   - If increment evently goes in, add to output array (it is divisor)
// - Sum all elements in our divisor array
// 4. If sum equals number tested, 'perfect'
// 5. If greater, 'abundant'
// 6. else, 'deficient'

// OPTIONAL: Refector solution to use private function for getting sumOfDivisors

