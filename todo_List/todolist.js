const Todo = require('./todo');

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  forEach(callback) {
    for (let idx = 0; idx < this.todos.length; idx++) {
      callback(this.todos[idx], idx);
    }
  }

  filter(callback) {
    let filtered = new TodoList(this.title);

    for (let idx = 0; idx < this.todos.length; idx++) {
      let todo = this.todos[idx]
      if (callback(todo, idx)) filtered.add(todo);
    }
    return filtered;
  }

  findByTitle(title) {
    return this.filter(todo => todo.title === title).first();
  }

  allDone() {
    return this.filter(todo => todo.isDone());
  }

  allNotDone() {
    return this.filter(todo => !todo.isDone());
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

  markDoneAt(idx) {
    let todo = this.itemAt(idx);
    todo.markDone(); 
  }

  markUndoneAt(idx) {
    let todo = this.itemAt(idx);
    todo.markUndone();
  }

  markDone(title) {
    this.findByTitle(title).markDone(title);
  }

  markAllDone() {
    this.forEach(todo => todo.markDone());
  }

  markAllUndone() {
    this.forEach(todo => !todo.markDone());
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  toArray() {
    return this.todos.slice();
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  _validateIndex(idx) {
    if (!(this.todos.hasOwnProperty(idx))) {
      throw new ReferenceError(`invalid index: ${idx}`);
    }
  }
}

module.exports = TodoList;