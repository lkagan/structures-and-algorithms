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
        const newNode = new Node(value, this.tail);
        this.tail.next = newNode;
        this.tail = newNode;
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
        const newNode = new Node(value, null, this.head);
        this.head.previous = newNode;
        this.head = newNode;
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
        if (index === 0) {
            return this.prepend(value);
        }

        const existingNode = this.nodeAtIndex(index);
        const previousNode = existingNode.previous;
        const newNode      = new Node(value, previousNode, existingNode);

        existingNode.previous = previousNode.next = newNode;

        return ++this.length;
    }

    /**
     * Delete a node from the list.
     * 
     * @param {number} index 
     * @returns {number} Number of nodes in the list
     */
    delete(index)
    {
        if (index === 0) {
            this.head = this.head.next;
            this.head.previous = null;
            return --this.length;
        } 

        const existingNode = this.nodeAtIndex(index);
        const previousNode = existingNode.previous;
        const nextNode     = existingNode.next;

        previousNode.next = nextNode;
        nextNode.previous = previousNode;

        return --this.length;
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

        let current = this.head;

        for (let i = 0; i <= index; ++i) {
            if (i === index) {
                return current;
            } 

            current = current.next;
        }
    }

    print()
    {
        let node   = this.head;
        let values = [];

        do {
            values.push(node.value);
            node = node.next;
        } while(node);

        console.log('[' + values.join(', ') + ']');
    }
}

class Node
{
    constructor(value, prev = null, next = null)
    {
        this.value    = value;
        this.next     = next;
        this.previous = prev;
    }
}

const list = new LinkedList(10);
list.append(5);
list.prepend(12);
list.insert(1, 4);
list.delete(1);
list.print();