class LinkedList:

    def __init__(self, value):
        """ Setup the head and tail nodes of the list """
        self.head = self.tail = Node(value)
        self.length = 1;

    def append(self, value):
        """ Append a node to the end of the list """
        newNode = Node(value, self.tail)
        self.tail.next = newNode
        self.tail = newNode;
        self.length += 1
        return self.length

    def prepend(self, value):
        """ Prepend a node to the beginning of the list """
        newNode = Node(value, None, self.head)
        self.head.previous = newNode
        self.head = newNode
        self.length += 1
        return self.length

    def insert(self, index, value):
        """ Insert a node anywhere in the list """
        if index == 0:
            return self.prepend(value)

        existingNode = self.node_at_index(index)
        previousNode = existingNode.previous;
        newNode = Node(value, previousNode, existingNode)

        existingNode.previous = newNode;
        previousNode.next = newNode;

        self.length += 1
        return self.length

    def delete(self, index):
        """ Delete a node from the list """
        if index == 0:
            self.head = self.head.next
            self.head.previous = None
        else:
            existing_node = self.node_at_index(index)
            previous_node = existing_node.previous;
            next_node = existing_node.next;

            previous_node.next = next_node;
            next_node.previous = previous_node

        self.length = - 1
        return self.length

    def node_at_index(self, index):
        """ Get the node at the given index. """
        if not isinstance(index, int) or index < 0 or index > self.length:
            raise ValueError

        current = self.head

        for i in range(index + 1):
            if i == index:
                return current

            current = current.next


class Node:

    def __init__(self, value, prev=None, next=None):
        self.value = value
        self.previous = prev
        self.next = next

    def __str__(self):
        return '{{value: {}, next: {}}}'.format(self.value, self.next)


my_list = LinkedList(10)
my_list.append(5)
my_list.prepend(12)
my_list.insert(1, 4)
my_list.delete(1)
print(my_list.head)
