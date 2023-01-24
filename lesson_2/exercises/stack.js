function newStack() {
  let stack = []

  return {
    push(...args) {
      stack.push(...args);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(el => console.log(el));
    }
  }
}

let stack = newStack();
stack.push(1, 2, 3);
stack.printStack();