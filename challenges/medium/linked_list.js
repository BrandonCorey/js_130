"use strict"

class Element {
  constructor(data, tail = this) {
    this.data = data;
    this.tail = tail;
  }

  datum() {
    return this.data;
  }

  isTail() {
    return this.tail === this;
  }

  next() {
    return this.isTail() ? null : this.tail;
  }
}

class SimpleLinkedList {
  static fromArray(array) {
    if (!Array.isArray(array)) return new this(null);

    return [...array].reverse().reduce((list, element) => {
      list.push(element);
      return list;
    }, new this());
  }

  constructor() {
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(data) {
    let element;
    if (this.isEmpty()) element = new Element(data);
    else element = new Element(data, this.head());

    this.list.unshift(element);
  }

  head() {
    return this.list[0];
  }

  peek() {
    return !this.isEmpty() ? this.head().datum() : null;
  }

  pop() {
    return this.list.shift().datum();
  }

  toArray() {
    return [...this.list].map(element => element.datum());
  }

  reverse() {
    let reverseData = this.toArray().reverse();
    return SimpleLinkedList.fromArray(reverseData);
  }
}

module.exports = { SimpleLinkedList, Element }