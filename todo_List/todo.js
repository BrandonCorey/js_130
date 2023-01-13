// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  forEach(callback) {
    for (let idx = 0; idx < this.todos.length; idx++) {
      callback(this.todos[idx]);
    }
  }

  filter(callback) {
    let filtered = new TodoList(this.title);

    for (let idx = 0; idx < this.todos.length; idx++) {
      let value = this.todos[idx]
      if (callback(value)) filtered.add(value);
    }
    return filtered;
  }

  toString() {
    let title = `---- ${this.title} ----`;
    let todos = this.todos.map(todo => todo.toString()).join('\n');
    return `${title}\n${todos}`
  }

  add(todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError('can only add Todo objects');
    }

    this.todos.push(todo);
  }

  removeAt(idx) {
    this._validateIndex(idx);
    return this.todos.splice(idx, 1);
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.size() < 1 ? undefined : this.todos[0];
  }

  last() {
    return this.size() < 1 ? undefined: this.todos[this.size() - 1];
  }

  itemAt(idx) {
    let value = this.todos[idx]
    this._validateIndex(idx);
    return value;
  }

  _validateIndex(idx) {
    if (!(this.todos.hasOwnProperty(idx))) {
      throw new ReferenceError(`invalid index: ${idx}`);
    }
  }

  markDoneAt(idx) {
    let todo = this.itemAt(idx);
    todo.markDone(); 
  }

  markUndoneAt(idx) {
    let todo = this.itemAt(idx);
    todo.markUndone();
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }
}


let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let list = new TodoList("Today's Todos");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);
todo1.markDone();
todo5.markDone();

let doneTodos = list.filter(todo => todo.isDone());
console.log(doneTodos);

console.log(doneTodos instanceof TodoList)