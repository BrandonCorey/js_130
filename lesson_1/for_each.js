function forEach(array, callback, thisArg) {
  for (let idx = 0; idx < array.length; idx++) {
    callback.call(thisArg, array[idx], idx, array);
  }
}

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
forEach([1, 2, 3], foo.showItem, foo);
forEach([4, 5, 6], foo.showItem);

// forEach takes array arg, callback, and thisArg
// forEach passees context to callback, array element, index, and array reference
// real forEach doesnt have to pass array as argument, but does all the rest the same