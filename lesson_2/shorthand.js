// 1. Rewrite the code below  using classic JS syntax
// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux,
//   };
// }

// 2. Rewrite the following code using classic JS syntax
// function foo() {
//   return {
//     bar: function() {
//       console.log("bar");
//     },
//     qux: function(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// Rewrite the following using classic JS syntax
// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let obj = foo(1, 2, 3);
// let bar = obj.bar;
// let baz = obj.baz;
// let qux = obj.qux

// 4. Rewrite the following code using classic JavaScript syntax:
// function foo(arr) {
//   return [
//     arr[2],
//     5,
//     arr[0],
//   ];
// }

// let result = foo([1, 2, 3]);
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// 5. Rewrite the following code using classic JavaScript syntax:
// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);

// 6. Rewrite the following code using classic JavaScript syntax:
// function product() {
//   let arr = Array.from(arguments)
//   return arr.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);
// console.log(result)

// 7. Replace the word HERE in the following code so the program prints the results shown:
// const HERE = { foo: 42, bar: 3.1415, qux: "abc" };
// let { foo, ...rest } = HERE;
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }


// 8. Rewrite the final line of code in the following snippet using classic JavaScript syntax:
// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: 'a', b: 'b' },
// };

// NOTE that doing ...rest for the above object will not spread the rest object, this is SPECIAL syntax in JS that will always collect the rest of the object properties, even if there is a rest property
// const first = obj.first;
// const second = obj.second;
// const rest = {
//   third: obj.third,
//   rest: obj.rest,
// }

//9. OPTIONAL Assume that you have some code that looks like this:
// Using shorthand notation, what is the missing code?
// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
  
//   return {
//     type: animalType,
//     age,
//     colors
//   };
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

// 10. Write a function that takes 5 string arguments, and returns an object with 3 properties:

const func = (first, middle1, middle2, middle3 ,last) => {
  let middle = [middle1, middle2, middle3].sort();
  return {
    first,
    middle,
    last
  }
}

let arr = [9, 4, 6, 3, 8];
let { first, middle, last } = func(...arr);

console.log(first, middle, last);