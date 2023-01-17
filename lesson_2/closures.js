"use strict"
// 1. What do the 4 console.log statements at the end of this program print? Try to answer without running the code:
// let counter = 0;

// function makeCounter() {
//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2

// incrementCounter = makeCounter();
// console.log(incrementCounter()); // 3
// console.log(incrementCounter()); // 4

// Answer:
// This will log 1, 2, 3, 4 because the counter that is being "closed" around is not part of the defintion of make counter
// This means that all increment functions are incremeneting the same counter, not their only local version

// 2. What do they print this time
// function makeCounter() {
//   return function() {
//     let counter = 0;
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 1

// incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 1

// Answer:
// This anonymous function closes around the counter variable
// This variable is declared and initalized to 0 within the anynomous function being returned
// As a result, when this returned function is called, it increments once and returns.
// On each subsequent call, it is redeclared and initalized to 0, then incremented once.

// 3. Let's move the variable declaration into makeCounter now. What do the 4 console.log statements at the end of this program print?
// Try to answer without running the code:

// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2

// incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2

// Answer:
// The anonmous function forms a closure around counter
// The anonymous function increments and returns counter
// Because the anonymous function holds a reference to counter, it incremenets it when it is called
// When makeCounter is invoked, a new counter variable is crated in memory, with a new reference
// So, when the counter is incremented after a new one has been created, the count resets, as the new counter has been reinitalized to 0.

// 4. We'll now make some changes to how we create the output. What do the 4 console.log statements at the end of this program print? Try to answer without running the code:

// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter1 = makeCounter();
// let incrementCounter2 = makeCounter();

// console.log(incrementCounter1()); // 1
// console.log(incrementCounter1()); // 2

// console.log(incrementCounter2()); // 1
// console.log(incrementCounter2()); // 2

// This is the same as the last problem'
// Each makeCounter invocation creates a differnt local counter variable
// The anonymous functions close over copies of different counter variables

// 5. Write a function named makeMultipleLister that you can call with a number as an argument. The function should return a new function that, when invoked, logs every positive integer multiple of that number less than 100. It should work like this:
// function makeMultipleLister(multiple) {
//   return function() {
//     for (let sum = multiple; sum < 100; sum += multiple) {
//       console.log(sum);
//     }
//   }
// }

// let lister = makeMultipleLister(17);
// lister();

// Write a program that uses two functions, add and subtract, to manipulate a running total. When you invoke either function with a number, it should add or subtract that number from the running total and log the new total to the console. It should work like this:

// function makeOperator() {
//   let counter = 0;

//   const add = (num) => {
//     counter += num;
//     return counter;
//   }

//   const subtract = (num) => {
//     return add(-num);
//   }

//   return [add, subtract];
// }

// let [add, subtract] = makeOperator(); // I had to use destructuring here as invoking the function more than once would pass two different counters to add and subtract

// console.log(add(1));       // 1
// console.log(add(42));      // 43
// console.log(subtract(39)); // 4
// console.log(add(6));       // 10

// This answer is overcomplicated, but I did it for practice


// 7. Without running the following code, determine what value it logs on the last line. Explain how the program arrived at that final result.
// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2);
// let result = bar(3); // 6
// result += bar(4); // 6 + 24; 30
// result += bar(5); // 30 + 120; 150
// console.log(result); // 150

// 8. Write a function later that takes an argument and a callback for that argument. Should return a new function that calls the input function with the arugment
// const later = (func, arg) => {
//   return () => func(arg);
// }

// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

// 9. Same thing as above
// const later2 = (func, message) => {
//   return time => {
//     func(message, time); // Use closure to grab reference of mesasge so that it referred to when the anonymous function is invoked
//   }
// }


// const notify = function(message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!

// 10. Create your own bind function

// function bind(context, func) {
//   return func.bind(context);
// }

// let obj = {};
// let boundFunc = bind(obj, function() {
//   this.foo = "bar";
// });

// boundFunc();
// console.log(obj); // { foo: 'bar' }