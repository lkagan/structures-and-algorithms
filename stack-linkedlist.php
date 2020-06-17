<?php

class Node
{
    public $value;
    public ?self $next;

    public function __construct($value, ?self $next = null)
    {
        $this->value = $value;
        $this->next  = $next;
    }
}

class Stack
{
    public int $length = 0;
    protected ?Node $top = null;
    protected ?Node $bottom = null;

    /**
     * Get the value at the top of the stack without removing it.
     *
     * @return mixed
     * @throws OutOfBoundsException
     */
    public function peek()
    {
        if ($this->length === 0) {
            throw new OutOfBoundsException('No values in stack');
        }

        return $this->top->value;
    }

    /**
     * Push a value on to the stack
     *
     * @param $value
     * @return int stack size
     */
    public function push($value): int
    {
        $this->top = new Node($value, $this->top);

        if ($this->length === 0) {
            $this->bottom = $this->top;
        }

        return ++$this->length;
    }

    /**
     * Pop a value off the top of the stack.
     *
     * @return mixed
     * @throws OutOfBoundsException
     */
    public function pop()
    {
        if ($this->length === 0) {
            throw new OutOfBoundsException('No values in stack');
        }

        $node      = $this->top;
        $this->top = $this->top->next;
        --$this->length;
        return $node->value;
    }

    public function isEmpty(): bool
    {
        return !$this->length;
    }
}


function println(string $text)
{
    print($text . PHP_EOL);
}

$myStack = new Stack();
$myStack->push('Netflix');
$myStack->push('Amazon');
$myStack->push('Google');

println($myStack->isEmpty() ? 'empty' : 'not empty');

println($myStack->peek());
println($myStack->pop());
println($myStack->pop());
println($myStack->pop());

println($myStack->isEmpty() ? 'empty' : 'not empty');
