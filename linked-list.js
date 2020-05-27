class LinkedList 
{
    constructor(value) 
    {
        this.head = this.tail = new Node(value);
        this.length = 1;
    }

    append(value) 
    {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        this.length++;
    }

    prepend(value) 
    {
        this.head = new Node(value, this.head);
        this.length++;
    }

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

        ++this.length;
    }

    nodeAtIndex(index)
    {
        if ( ! Number.isInteger(index) || index < 0 || index >= this.length) {
            throw 'Index out of bounds';
        } 

        current = this.head;

        for (let i = 0; i < index; ++i) {
            if (i === index - 1) {
                current.next = new Node(value, current.next);
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