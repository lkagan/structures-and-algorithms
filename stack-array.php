<?php

class Stack
{
    protected array $values = [];

    /**
     * Get the value at the top of the stack without removing it.
     *
     * @return mixed
     * @throws OutOfBoundsException
     */
    public function peek()
    {
        if (count($this->values) === 0) {
            throw new OutOfBoundsException('No values in stack');
        }

        return $this->values[count($this->values) - 1];
    }

    /**
     * Push a value on to the stack
     *
     * @param $value
     * @return int stack size
     */
    public function push($value): int
    {
        return array_push($this->values, $value);
    }

    /**
     * Pop a value off the top of the stack.
     *
     * @return mixed
     * @throws OutOfBoundsException
     */
    public function pop()
    {
        if (count($this->values) === 0) {
            throw new OutOfBoundsException('No values in stack');
        }

        return array_pop($this->values);
    }

    public function isEmpty(): bool
    {
        return !count($this->values);
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
