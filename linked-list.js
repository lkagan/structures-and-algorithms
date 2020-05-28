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
        if (index === 0) {
            return this.prepend(value);
        }

        const existingNode = this.nodeAtIndex(index - 1);
        existingNode.next = new Node(value, existingNode.next);
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
        } else {
            const node = this.nodeAtIndex(index - 1);
            node.next = node.next.next;
        }

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
list.delete(1);
console.log(JSON.stringify(list.head));