const Stack = require('../../stacks/ArrayStack');

module.exports = class QueueFromStack {
    constructor() {
        this.first = new Stack();
        this.last = new Stack();
    }

    /**
     * Add a value to the end of the queue.
     * @param {*} value
     * @return {Number} Length of the queue
     */
    enqueue(value) {
        const firstLength = this.first.length();

        for (let i = 0; i < firstLength; ++i) {
            this.last.push(this.first.pop());
        }

        this.last.push(value);
        return this.last.length();
    }

    /**
     * Remove a value from the beginning of the queue and return it.
     * @returns {*}
     */
    dequeue() {
        const lastLength = this.last.length();

        for (let i = 0; i < lastLength; ++i) {
            this.first.push(this.last.pop());
        }

        return this.first.pop();
    }

    /**
     * Return the value at the beginning of the queue.
     * @returns {*}
     */
    peek() {
        const lastLength = this.last.length();

        for (let i = 0; i < lastLength; ++i) {
            this.first.push(this.last.pop());
        }

        return this.first.peek();
    }

    /**
     * Do any values exist in the queue?
     * @returns {*}
     */
    isEmpty() {
        return this.last.isEmpty() && this.first.isEmpty();
    }
}