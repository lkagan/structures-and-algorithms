class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        if (this.length === 0) {
            throw new Error('No values in stack');
        }

        return this.top.value;
    }

    push(value) {
        if (!value) {
            throw new Error('Value is required');
        }

        const temp = this.top;
        this.top = new Node(value);
        this.top.next = temp;

        if (this.length === 0) {
            this.bottom = this.top;
        }

        return ++this.length;
    }

    pop() {
        if (this.length === 0) {
            throw new Error('No values in stack');
        }

        const node = this.top;
        this.top = node.next;
        --this.length;
        return node.value;
    }

    isEmpty() {
        return !this.length;
    }
}


const myStack = new Stack();

myStack.push('Netflix');
myStack.push('Amazon');
myStack.push('Google');

console.log(myStack.isEmpty());

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

console.log(myStack.isEmpty());
