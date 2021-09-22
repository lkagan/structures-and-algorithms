class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Queue:
    def __init__(self):
        self.length = 0
        self.first = None
        self.last = None

    def is_empty(self):
        """ Is the queue empty? """
        return self.length == 0

    def enqueue(self, value):
        """ Add a value to the end of the queue. """
        new_node = Node(value)

        if self.length == 0:
            self.first = new_node
        else:
            self.last.next = new_node

        self.last = new_node
        self.length += 1
        return self.length

    def peek(self):
        """ Get the value from the front of the queue without removing it. """
        if self.length == 0:
            raise IndexError

        return self.first.value

    def dequeue(self):
        """ Get the value from the front of the queue and remove it. """
        if self.length == 0:
            raise IndexError

        node = self.first
        self.first = node.next
        self.length -= 1
        return node.value


my_queue = Queue()
print(my_queue.is_empty())

my_queue.enqueue('Joy')
my_queue.enqueue('Matt')
my_queue.enqueue('Pavel')
my_queue.enqueue('Samir')

print(my_queue.is_empty())

print(my_queue.peek())

print(my_queue.dequeue())
print(my_queue.dequeue())
print(my_queue.dequeue())
print(my_queue.dequeue())

print(my_queue.is_empty())
