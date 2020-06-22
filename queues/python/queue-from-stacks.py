class Queue:
    def __init__(self):
        self.first = []
        self.last = []

    def is_empty(self):
        return len(self.first) == 0 and len(self.last) == 0

    def enqueue(self, value):
        first_length = len(self.first)

        for i in range(first_length):
            self.last.append(self.first.pop())

        self.last.append(value)

    def peek(self):
        last_length = len(self.last)

        for i in range(last_length):
            self.first.append(self.last.pop())

        return self.first[len(self.first) - 1]

    def dequeue(self):
        last_length = len(self.last)

        for i in range(last_length):
            self.first.append(self.last.pop())

        return self.first.pop()
    

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
