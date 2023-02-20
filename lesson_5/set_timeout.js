// Write a function delayLog that counts to 10 and logs it
// Should take a total of 10 seconds

// const delayLog = () => {
//   for (let sec = 1; sec <= 10; sec++) {
//     const ms = sec * 1000;
//     setTimeout(() => console.log(sec), ms);
//   }
// }

// delayLog();

// 2. 
// What would happen if we replaced let sec with var sec in previous problem
// It logs 11 ten times

// This is a lttle tricky, but the reason
// We are using closure in both of these examples. The passed to setTimeout
// has its definition within our outer function, referencing our counter (and ms)
// Because we use let and const, on each iteration, a new closure is formed with the callback
// This means each callback passed on each iteration has its own version of sec and ms, with the correct values

// On the other hand, using var isntead, the variables are function scope this would look like this
// const delayLog = () => {
//   for (var sec = 1; sec <= 10; sec++) {
//     var ms = sec * 1000;
//     setTimeout(() => console.log(sec), ms);
//   }
// }

// delayLog();

// Here, sec and ms are function scoped. Within the loop, they are merely assigned a value
// Because of this, only a single closure is formed with the callback of setTimeout
// As a result, when the loop runs, the variable reference in the callback is same one every iteration
// This means after the loop completes and the callback is finally executed, it logs the fully updated value
// It does not have access to the previous values as seperate variables sec and ms are not redeclared on each iteration

// Below is (almost) identical to what happens when we use var, and as we see, it logs 11 every time
// Remember that the loop will always finish executing before the timeout callbacks are exeucting
// The only reason the correct values are logged in our first example 
// is because a new closure is formed on each iteration due to our variables being redeclared on each iteration
// These new variables have their references passed to a new closure on each iteration
// We know a new closure is created because new variables are created, meaning a relationship between variable and its surrounding scope

// const delayLog = () => {
//   let sec;
//   let ms;
//   for ( sec = 1; sec <= 10; sec++) {
//     ms = sec * 1000;
//     setTimeout(() => console.log(sec), ms);
//   }
// }

// delayLog();


// 3.
// In what sequence will the JavaScript runtime run the following lines of code? Number them from 1-8 to show the order of execution.

// setTimeout(function() {   // 1
//   console.log('Once');    // 5
// }, 1000);

// setTimeout(function() {   // 2
//   console.log('upon');    // 7
// }, 3000);

// setTimeout(function() {   // 3
//   console.log('a');       // 6
// }, 2000);

// setTimeout(function() {   // 4
//   console.log('time');    // 8
// }, 4000);

//4. 
// In what sequence does the JavaScript runtime run the functions q(), d(), n(), z(), s(), f(), and g() in the following code?

// setTimeout(function() {
//   setTimeout(function() {
//     q(); // 7 (25 ms)
//   }, 15);

//   d(); // 3 (10 ms)

//   setTimeout(function() {
//     n(); // 5 (15 ms)
//   }, 5);

//   z(); // 4 (10 ms)
// }, 10);

// setTimeout(function() {
//   s(); // 6 (20 ms)
// }, 20);

// setTimeout(function() {
//   f(); // 2 (0 ms)
// });

// g(); // 1 (no delay)

// 5. Write a function afterNSeconds that takes two args
// a callback and a time duration
// It should wait the indicated time then invoke the callback

const afterNSeconds = (callback, delaySec) => {
  const ms = delaySec * 1000;
  return setTimeout(callback, ms)
}

afterNSeconds(() => console.log('banana'), 5);