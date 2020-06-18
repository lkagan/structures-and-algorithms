const Queue = require('./Queue');

const myQueue = new Queue();
console.log(myQueue.isEmpty());
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');

console.log(myQueue.isEmpty());
console.log(myQueue.peek());

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

console.log(myQueue.isEmpty());
