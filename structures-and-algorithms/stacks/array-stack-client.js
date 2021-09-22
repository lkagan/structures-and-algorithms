const Stack = require('./ArrayStack');

const myStack = new Stack();

myStack.push('Netflix');
myStack.push('Amazon');
myStack.push('Google');

console.log(myStack.isEmpty() ? 'empty' : 'not empty');

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

console.log(myStack.isEmpty() ? 'empty' : 'not empty');
