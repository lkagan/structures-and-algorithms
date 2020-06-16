class Stack {
    constructor() {
        this.values = [];
    }

    /**
     * Get the value from the top of the stack without removing it.
     *
     * @returns {*}
     */
    peek() {
        if (this.values.length === 0) {
            throw new Error('No values in stack');
        }

        return this.values[this.values.length - 1];
    }

    /**
     * Push a value on to the stack.
     *
     * @param {*} value
     * @returns {number}
     */
    push(value) {
        this.values[this.values.length] = value;
        return this.values.length;
    }

    /**
     * Pop a value off the stack.
     *
     * @returns {*}
     */
    pop() {
        if (this.values.length === 0) {
            throw new Error('No values in stack');
        }

        return this.values.splice(this.values.length - 1, 1)[0];
    }

    isEmpty() {
        return !this.values.length;
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
