const Node = require('./Node');

module.exports = class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    /**
     * Get the value of the first
     *
     * @returns {*}
     */
    peek() {
        if (this.length === 0) {
            throw new Error('No values in the queue');
        }

        return this.first.value;
    }

    /**
     * Place a value on to the end of the queue.
     *
     * @param value
     * @returns {number}
     */
    enqueue(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
        } else {
            this.last.next = newNode;
        }

        this.last = newNode;
        return ++this.length;
    }

    /**
     * Shift a value off the front of the queue.
     *
     * @returns {*}
     */
    dequeue() {
        if (this.length === 0) {
            throw new Error('No values in the queue');
        }

        const node = this.first;
        this.first = node.next;
        --this.length;

        if (this.length === 1) {
            this.last = null;
        }

        return node.value;
    }

    /**
     * Is the queue empty?
     *
     * @returns {boolean}
     */
    isEmpty() {
        return !this.length;
    }
}