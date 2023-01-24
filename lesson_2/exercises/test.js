const Construct = (function()  {
  let counter = 0;
  return function() {
    this.increment = function() {
      counter += 1;
      return counter;
    }
  };
})();

let item = new Construct();
console.log(item.increment()); // 1
console.log(item.increment()); // 2

let item1 = new Construct();
console.log(item1.increment()); // 3
console.log(item1.increment()); // 4

function factory(){
  let counter = 0;
  return {
    increment: function() {
      counter += 1;
      return counter;
    }
  };
}

let newItem = factory();
console.log(newItem.increment()); // 1
console.log(newItem.increment()); // 2

let newItem1 = factory();
console.log(newItem1.increment()); // 1
console.log(newItem1.increment()); // 2