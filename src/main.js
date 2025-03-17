// -- H / A - L5 - 1
//

class BaseStorage {
  storage = [];
  maxSize;

  constructor(maxSize = 10) {
    this.isMaxSizeInvalid(maxSize);
    this.maxSize = maxSize;
  }

  isMaxSizeInvalid(maxSize) {
    if (typeof maxSize !== "number") throw new Error("Error! MaxSize is NaN");

    if (maxSize < 1 || !Number.isInteger(maxSize))
      throw new Error("Error! MaxSize is invalid number");
  }

  isFull() {
    return this.storage.length === this.maxSize;
  }

  isEmpty() {
    return this.storage.length === 0;
  }
  toArray() {
    return [...this.storage];
  }
}

//
// -- H / A - L5 - 2
//

class Stack extends BaseStorage {
  push(elem) {
    if (this.isFull()) {
      throw new Error("Error! Stack is full.");
    }

    this.storage[this.storage.length] = elem;
  }

  pop() {
    if (this.isEmpty()) throw new Error("Error! Stack is empty");

    const popedElem = this.storage[this.storage.length - 1];

    const newArray = [];

    for (let i = 0; i < this.storage.length - 1; i++) {
      newArray[i] = this.storage[i];
    }
    this.storage = [...newArray];

    return popedElem;
  }

  peek() {
    return this.isEmpty() ? null : this.storage[this.storage.length - 1];
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== "function")
      throw new Error("Error! Not iterable.");

    const stack = new Stack(iterable.length);

    for (const elem of iterable) {
      stack.push(elem);
    }

    return stack;
  }
}

//
// -- H / A - L5 - 3
//

class Queue extends BaseStorage {
  push(elem) {
    if (this.isFull()) {
      throw new Error("Error! Queue is full.");
    }

    this.storage[this.storage.length] = elem;
  }

  shift() {
    if (this.isEmpty()) throw new Error("Error! Queue is empty");

    const shiftedElem = this.storage[0];

    const newArray = [];

    for (let i = 1; i < this.storage.length; i++) {
      newArray[i - 1] = this.storage[i];
    }
    this.storage = [...newArray];

    return shiftedElem;
  }

  peek() {
    return this.isEmpty() ? null : this.storage[0];
  }

  // push(elem) {
  //   if (this.isFull()) {
  //     throw new Error("Error! Queue is full.");
  //   }

  //   const newArray = [elem];

  //   for (let i = 1; i <= this.storage.length; i++) {
  //     newArray[i] = this.storage[i - 1];
  //   }
  //   this.storage = [...newArray];
  // }

  // shift() {
  //   if (this.isEmpty()) throw new Error("Error! Queue is empty");

  //   const shiftedElem = this.storage[this.storage.length - 1];

  //   const newArray = [];

  //   for (let i = 0; i < this.storage.length - 1; i++) {
  //     newArray[i] = this.storage[i];
  //   }
  //   this.storage = [...newArray];

  //   return shiftedElem;
  // }

  // peek() {
  //   return this.isEmpty() ? null : this.storage[this.storage.length - 1];
  // }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== "function")
      throw new Error("Error! Not iterable.");

    const queue = new Queue(iterable.length);

    for (const elem of iterable) {
      queue.push(elem);
    }

    return queue;
  }
}

// testing Stack
console.log("Stack");
const stack = new Stack(12);

console.log(`is stack empty? -> ${stack.isEmpty()}`);

stack.push(1);
console.log(stack.toArray());

stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
console.log(stack.toArray());

stack.push([10, 20]);
console.log(stack.toArray());

console.log(stack.pop());
console.log(stack.toArray());

console.log(stack.peek());

console.log("fromIterable");
console.log(Stack.fromIterable([11, 12, 13, 14]));

// testing Queue
console.log("Queue");
const queue = new Queue();

queue.push([0, 1]);
console.log(queue.toArray());

console.log(`is queue empty? -> ${queue.isEmpty()}`);

queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
queue.push(7);
queue.push(8);
queue.push(9);
console.log(queue.toArray());

queue.push(10);
console.log(queue.toArray());

console.log(queue.shift());
console.log(queue.toArray());

console.log(queue.peek());

console.log("fromIterable");
console.log(Queue.fromIterable([11, 12, 13, 14, [15, 16, 17]]));
