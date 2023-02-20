// Write a function named startCounting that
// logs a number to the console every second,
// starting with 1.
// Each output number should be one greater than the previous one.

const startCounting = () => {
  let count = 0;

  return setInterval(() => { // Returning invocation of set Interval can be used to cancel it
    console.log(count += 1)
  }, 1000);

}

let counter = startCounting();

// Extend the code from the previous problem with a
// stopCounting function that stops the logger when called.

// const stopCounting = (counter) => {
//   clearInterval(counter);
// }

// stopCounting(counter);