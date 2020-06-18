module.exports = class Stack {
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
