const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test("toArray converts todos to an array", () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test("'first' returns the first todo object from list", () => {
    expect(list.first()).toBe(todo1);
  });

  test("'last'returns the last todo object from list", () => {
    expect(list.last()).toBe(todo3);
  });

  test("'shift' removes first todo from list and returns it", () => {
    expect(list.shift()).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test("'pop' removes last todo from list and returns it", () => {
    expect(list.pop()).toBe(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test("'isDone' a boolean indiciating if all todos are done", () => {
    expect(list.isDone()).toBe(false);
  });

  test("'add' throws TypeError when trying to non-todo object to list", () => {
    expect(() => list.add('banana')).toThrow(TypeError);
    expect(() => list.add(1)).toThrow(TypeError);
    expect(() => list.add(new TodoList())).toThrow(TypeError);
  });

  test("'itemAt' todo at specified index of list", () => {
    expect(list.itemAt(0)).toBe(todo1);
    expect(list.itemAt(1)).toBe(todo2);
    expect(() => list.itemAt(5)).toThrow(ReferenceError);
  });

  test("'markDoneAt' uses given index to mark a todo as done", () => {
    expect(() => list.markDoneAt(5)).toThrow(ReferenceError);
    list.markDoneAt(0);
    list.markDoneAt(1);

    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(false);
  })

  test("'markUndoneAt' uses given index to mark a todo as not done", () => {
    expect(() => list.markUndoneAt(5)).toThrow(ReferenceError);
    list.markDoneAt(0);
    list.markDoneAt(1);
    list.markDoneAt(2);
    list.markUndoneAt(0);

    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
  });

  test("'markAllDone' marks all todos in the list as done", () => {
    list.markAllDone();

    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
  });

  test("'removeAt' takes an index and removes/retruns a todo at that index", () => {
    expect(() => list.removeAt(5)).toThrow(ReferenceError);
    expect(list.removeAt(0)).toEqual([todo1]);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;
  
    expect(list.toString()).toBe(string);

    string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    list.markDoneAt(0);
    expect(list.toString()).toBe(string);
  });

  test('toString returns correct string when a todo is marked done', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    list.markDoneAt(0);
    expect(list.toString()).toBe(string);
  });

  test('toString returns different string for all done todos', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;
  
    list.markAllDone();
    expect(list.toString()).toBe(string);
  });

  test("'forEach' correctly iterates over todos in list", () => {
    let output = [];
    list.forEach(todo => output.push(todo));
    expect(output).toEqual([todo1, todo2, todo3]);
  });

  test('filter returns new TodoList object with filtered todos', () => {
    todo1.markDone();
    let newList = new TodoList(list.title);
    newList.add(todo1);
  
    expect(newList.title).toBe(list.title);
  
    let doneItems = list.filter(todo => todo.isDone());
    expect(doneItems.toString()).toBe(newList.toString());
  });
  
});