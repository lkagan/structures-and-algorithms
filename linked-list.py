class LinkedList:

    def __init__(self, value):
        self.head = self.tail = Node(value)
        self.length = 1;

    def append(self, value):
        self.tail.next = Node(value)
        self.tail = self.tail.next
        self.length += 1

    def prepend(self, value):
        self.head = Node(value, self.head)
        self.length += 1

    def insert(self, index, value):
        if not isinstance(index, int) or index < 0 or index > self.length:
            raise ValueError

        if index == 0: 
            return self.prepend(value)

        current = self.head

        for i in range(index):
            if i == index - 1:
                current.next = Node(value, current.next)
            else:
                current = current.next

            self.length += 1

class Node:

    def __init__(self, value, next = None):
        self.value = value
        self.next = next

    def __str__(self):
        return '{{value: {}, next: {}}}'.format(self.value, self.next)


list = LinkedList(10)
list.append(5)
list.prepend(12)
list.insert(1, 4)

print(list.head)

