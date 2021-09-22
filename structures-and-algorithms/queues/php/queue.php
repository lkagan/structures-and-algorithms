<?php

class Node
{
    public $value;
    public ?Node $next = null;

    /**
     * Node constructor.
     *
     * @param $value
     */
    public function __construct($value, ?Node $next = null)
    {
        $this->value = $value;
        $this->next = $next;
    }
}


class Queue
{
    protected int $length = 0;
    protected ?Node $first = null;
    protected ?Node $last = null;

    public function isEmpty(): bool
    {
        return !$this->length;
    }

    /**
     * Add a value on to the end of the queue.
     *
     * @param $value mixed
     * @return int Number of nodes in the queue
     */
    public function enqueue($value): int
    {
        $newNode = new Node($value);

        if ($this->length === 0) {
            $this->first = $newNode;
        } else {
            $this->last->next = $newNode;
        }

        $this->last = $newNode;
        return ++$this->length;
    }

    /**
     * Remove the value from the front of the queue and return it.
     *
     * @return mixed
     */
    public function dequeue()
    {
        if ($this->length === 0) {
            throw new OutOfBoundsException('No values in queue');
        }

        $node = $this->first;
        $this->first = $node->next;
        --$this->length;
        return $node->value;
    }

    /**
     * Get the value at the front of the queue without removing it.
     *
     * @return mixed
     */
    public function peek()
    {
        if ($this->length === 0) {
            throw new OutOfBoundsException('No values in queue');
        }

        return $this->first->value;
    }
}

function println($string)
{
    echo $string . PHP_EOL;
}

$myQueue = new Queue();
println($myQueue->isEmpty() ? 'true' : 'false');

$myQueue->enqueue('Joy');
$myQueue->enqueue('Matt');
$myQueue->enqueue('Pavel');
$myQueue->enqueue('Samir');

println($myQueue->isEmpty() ? 'true' : 'false');

println($myQueue->peek());

println($myQueue->dequeue());
println($myQueue->dequeue());
println($myQueue->dequeue());
println($myQueue->dequeue());

println($myQueue->isEmpty() ? 'true' : 'false');
