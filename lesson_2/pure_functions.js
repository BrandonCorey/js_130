// 1. What side effects are present in the foo function in the following code?
const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop(); // side effect from mutating object
  console.log(`popped ${value} from the array`); // side effects from writing to console
  return value + bar + baz; //
}

foo(qux);

// 2. Which of the following functions are pure?
function sum(a, b) {
  console.log(a + b); // Side effects through writing to console
  return a + b;
}

function sum(a, b) {
  a + b; // Pure, no side affects, always evaluates to the same thing
         // It is still pure if a function always returns the same value regardless of arguments
         // Here that value is undefined
}

function sum(a, b) {
  return a + b; // This is a pure function, returns same thing every time with same set of args, no side effects
}

function sum(a, b) {
  return a + b + Math.random(); // Impure, does not return same thing every time, accesses random number generator
}

function sum(a, b) {
  return 3.1415; // Pure, no side affects, always returns same value
                 // It is still pure if a function always returns the same value regardless of arguments
                 // Here that value is undefined
}