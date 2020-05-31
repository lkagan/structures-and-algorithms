class LinkedList:

    def __init__(self, value):
        ''' Setup the head and tail nodes of the list '''
        self.head = self.tail = Node(value)
        self.length = 1;

    def append(self, value):
        ''' Append a node to the end of the list '''
        newNode         = Node(value, self.tail)
        self.tail.next  = newNode
        self.tail       = newNode;
        self.length    += 1
        return self.length

    def prepend(self, value):
        ''' Prepend a node to the beginning of the list '''
        newNode             = Node(value, None, self.head)
        self.head.previous  = newNode
        self.head           = newNode
        self.length        += 1
        return self.length

    def insert(self, index, value):
        ''' Insert a node anywhere in the list '''
        if index == 0: 
            return self.prepend(value)

        existing_node = self.node_at_index(index - 1)
        existing_node.next = Node(value, existing_node.next)
        self.length += 1
        return self.length

    def delete(self, index):
        ''' Delete a node from the list '''
        if index == 0:
            self.head = self.head.next
        else:
            node = self.node_at_index(index - 1)
            node.next = node.next.next

        self.length =- 1
        return self.length

    def node_at_index(self, index):
        ''' Get the node at the given index. '''
        if not isinstance(index, int) or index < 0 or index > self.length:
            raise ValueError

        current = self.head

        for i in range(index + 1):
            if i == index:
                return current

            current = current.next

class Node:

    def __init__(self, value, prev = None, next = None):
        self.value    = value
        self.previous = prev
        self.next     = next

    def __str__(self):
        return '{{value: {}, next: {}}}'.format(self.value, self.next)


list = LinkedList(10)
list.append(5)
list.prepend(12)
# list.insert(1, 4)
# list.delete(1)
print(list.head)

