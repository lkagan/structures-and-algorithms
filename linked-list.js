class LinkedList 
{
    /**
     * Setup the head and tail nodes of the list
     *  
     * @param {*} value 
     */
    constructor(value) 
    {
        this.head = this.tail = new Node(value);
        this.length = 1;
    }

    /**
     * Append a node to the end of the list.
     * 
     * @param {*} value 
     * @returns {number} Number of nodes in the list
     */
    append(value) 
    {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        return ++this.length;
    }

    /**
     * Prepend a node to the beginning of the list.
     * 
     * @param {*} value 
     * @returns {number} Number of nodes in the list
     */
    prepend(value) 
    {
        this.head = new Node(value, this.head);
        return ++this.length;
    }

    /**
     * Insert a node anywhere in the list.
     * 
     * @param {number} index 
     * @param {*} value 
     * @returns {number} Number of nodes in the list
     */
    insert(index, value)
    {
        if ( ! Number.isInteger(index) || index < 0 || index >= this.length) {
            throw 'Index out of bounds';
        }

        if (index === 0) {
            return this.prepend(value);
        }

        let current = this.head;

        for (let i = 0; i < index; ++i) {
            if (i === index - 1) {
                current.next = new Node(value, current.next);
            } else {
                current = current.next;
            }
        }

        return ++this.length;
    }

    /**
     * Get the node at the given index.
     * 
     * @param {number} index 
     * @return {Node}
     */
    nodeAtIndex(index)
    {
        if ( ! Number.isInteger(index) || index < 0 || index >= this.length) {
            throw 'Index out of bounds';
        } 

        current = this.head;

        for (let i = 0; i <= index; ++i) {
            if (i === index) {
                return current;
            } else {
                current = current.next;
            }
        }
    }
}

class Node
{
    constructor(value, next = null)
    {
        this.value = value;
        this.next = next;
    }
}

const list = new LinkedList(10);
list.append(5);
list.prepend(12);
list.insert(1, 4);
console.log(JSON.stringify(list.head));