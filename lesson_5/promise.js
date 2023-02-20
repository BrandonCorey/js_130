const makePromise = (num) => {
  return new Promise((resolve, reject) => { // Could also pass a second 'reject' cllback, but can also just use catch instance method later
    if (num < 0 || Number.isNaN(+num)) reject(num);
    setTimeout(() => {
      resolve(num); // Passed as callback, will need 3 seconds to resolve
    }, 3000);
  });
}

const notANum = (num) => console.log(num + ' is not a number!'); 

makePromise('a').then(num => num ** 2, notANum) // resolve callback gets passed to then method
      .then(num => num * 2, notANum) // 'then' returns a new probmise, so we can chain for callbacks to resolve
      .then((num => console.log(num - 20)), notANum) // 30
      .catch(error => new Error(error.name)); // Can catch at end, or could have passed invididual 'reject' callbacks to each 'then' method

const promise1 = Promise.resolve(3); // Resolved immediately
const promise2 = 42; // Resolved immediately
const promise3 = new Promise((resolve) => {
  setTimeout(resolve('foo'), 5000); // Resolved immediately, since we pass an invocation to setTimeout, not a function
});
const promise4 = new Promise((resolve) => {
  setTimeout(() => resolve('foo'), 5000); // Resolved after 5 seconds
});

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values); // Because promise 4 doesn't resolve until 5 seconds after the rest, these values take 5 seconds to log
});
// Expected output: Array [3, 42, "foo"]

Promise.race([promise1, promise2, promise3, promise4]).then((value) => {
  console.log(value); // Logs first value to resolve
});


// Bonus Callback syntax
// const makeCallback = (callback) => {
//   setTimeout(() => {
//     callback(5);
//   });
// }

// const squareNum = (num, callback) => {
//   num **= 2;
//   callback(num);
// }

// const doubleNum = (num, callback) => {
//   num *= 2;
//   callback(num);
// }

// const subtractTwenty = (num, callback) => {
//   num = num - 20;
//   callback(num);
// }

// makeCallback((numToSquare) => { // pass makeCallack a a callback that squares a num
//   squareNum(numToSquare, (resultToDouble) => { // pass squareNum a number to square, and another callback to double num
//     doubleNum(resultToDouble, (resultToSubtract) => { // pass double num a num to square
//       subtractTwenty(resultToSubtract, (finalResult) => {
//         console.log(finalResult);
//       });
//     });
//   });
// });
