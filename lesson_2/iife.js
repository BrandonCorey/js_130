// 1. Will the following code execute without error? Try to answer without running it.
// function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// }();

// It will throw an syntax error unexpected token I believe as the IIEF is not wrapped in parenthesis

// 2. Rewrite the example above so it works

// (function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// }());

// 3. Why does the below code throw an error? Correct the code

// Answer:
// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// sum += (function(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);  // ?


// hoisted version of 3 to see more clearly
// function sum(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// sum += sum(numbers);  // ?

// 4. Create a countdown IIEF that counts down from a number arg and logs the countdown
// ((start) => {
//   console.log(start);
//   while (start > 0) {
//     start -= 1;
//   }
// })(7);

// 5. Is the name function inside this IIFE acessible in the global scope
// (function foo() {
//   console.log('Bar');
// })();

// Answer: No, this type of syntax creates private scope

// 6. Rewrite the following code using an IIFE
// let bar = (function(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   }
// })(2);

// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// 7. For a challenge, refactor problem 4 to use recursion
// (function countDown(start) {
//   console.log(start);
//   if (start > 0) {
//     countDown(start - 1);
//   }
// })(7);