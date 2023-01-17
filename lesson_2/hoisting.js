// 1. Without running this code, what will it display? Explain your reasoning.
// var foo = function() {
//   console.log('bye');
// }

// function foo() {
//   console.log('hello')
// }

// foo();

// This code will print 'bye'
// Remember, if a function declaration and a var declaration share the same name, the var declaratin is discarded
// function foo() {
//   console.log('hello')
// }

// foo = function() {
//   console.log('bye');
// }

// foo()

// 2. Without running this code, what does it print?
// for (var index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     var foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo); // undefined, hello, Bye
// console.log(index); // 2

// The wacky thing here is that foo is accessible in the else block, since it has function scope (in a global scope of node file, gets hoisted to top of wrapper function of main program)

// 3. Without changing the order of the invocation and function definition, update this code so that it works.
// bar();

// function bar() {
//   console.log("foo!");
// };

// 4. Without running the following code, determine what it logs to the console:
// var bar = 82; // hoisted to top of main program
// function foo() { // entire definition hoisted to top of main program (above bar)
//   var bar = bar - 42; // Since the 'bar' in the expression is now below the foo definition, it is still undefined
//   console.log(bar); // logs NaN as we are trying to do undfined - 42
// }

// foo();

// Hoisted version below
// function foo() {
//   var bar;
//   bar = bar - 42;
//   console.log(bar);
// }

// var bar;
// bar = 82;

// foo();

// 5. Rewrite the code below using let instead of var. Your goal here is to change the way the variables are declared without altering the output of the program.
// function foo(condition) {
//   console.log(bar);

//   qux = 0.5772;

//   if (condition) {
//     var qux = 3.1415;
//     console.log(qux);
//   } else {
//     var bar = 24;

//     var xyzzy = function() {
//       var qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// foo(false);


// Rewritten
// function foo(condition) {
//   let bar;

//   console.log(bar);

//   let qux = 0.5772;

//   if (condition) {
//     qux = 3.1415;
//     console.log(qux);
//   } else {
//     bar = 24;
//     let xyzzy = function() {
//       qux = 2.7183;
//       console.log(qux);
//     }

//     console.log(qux);
//     console.log(xyzzy());
//   }
//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// foo(false);

// 6. Rewrite the below code hoisted
// Pet.prototype.walk = function() {
//   console.log(`${this.name} is walking.`);
// };

// function Pet(name, image) {
//   this.name = name;
//   this.image =  image;
// }

// class Image {
//   constructor(file) {
//     this.file = file;
//   }
// }

// var catImage = new Image("cat.png");
// var pudding = new Pet("Pudding", catImage);


function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

var catImage;
var pudding;
let image;

Pet.prototype.walk = function() { // This is not a declaration, and does not get hoisted as a result
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
}