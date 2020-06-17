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

    /**
     * Get the value from the top of the stack without removing it.
     *
     * @returns {*}
     */
    peek() {
        if (this.length === 0) {
            throw new Error('No values in stack');
        }

        return this.top.value;
    }

    /**
     * Push a value on to the stack.
     *
     * @param {*} value
     * @returns {number}
     */
    push(value) {
        this.top = new Node(value, this.top);

        if (this.length === 0) {
            this.bottom = this.top;
        }

        return ++this.length;
    }

    /**
     * Pop a value off the stack.
     *
     * @returns {*}
     */
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

console.log(myStack.isEmpty() ? 'empty' : 'not empty');

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

console.log(myStack.isEmpty() ? 'empty' : 'not empty');
