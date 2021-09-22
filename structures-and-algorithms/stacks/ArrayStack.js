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
        if (this.length() === 0) {
            throw new Error('No values in stack');
        }

        return this.values[this.length() - 1];
    }

    /**
     * Push a value on to the stack.
     *
     * @param {*} value
     * @returns {number}
     */
    push(value) {
        this.values[this.length()] = value;
        return this.length();
    }

    /**
     * Pop a value off the stack.
     *
     * @returns {*}
     */
    pop() {
        if (this.length() === 0) {
            throw new Error('No values in stack');
        }

        return this.values.splice(this.length() - 1, 1)[0];
    }

    isEmpty() {
        return !this.length();
    }

    length() {
        return this.values.length;
    }
}
