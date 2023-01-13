function filter(array, callback, thisArg) {
  let output = [];

  for (let idx = 0; idx < array.length; idx++) {
    if (callback.call(thisArg, array[idx], idx, array)) {
      output.push(array[idx]);
    }
  }
  return output;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]