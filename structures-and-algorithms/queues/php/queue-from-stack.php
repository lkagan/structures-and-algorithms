<?php

class Queue
{
    protected array $first = [];
    protected array $last = [];

    public function isEmpty(): bool
    {
        return count($this->first) === 0 && count($this->last) === 0;
    }

    public function enqueue($value): int
    {
        $firstLength = count($this->first);

        for ($i = 0; $i < $firstLength; ++$i) {
            array_push($this->last, array_pop($this->first));
        }

        array_push($this->last, $value);
        return count($this->last);
    }

    public function dequeue()
    {
        $lastLength = count($this->last);

        for ($i = 0; $i < $lastLength; ++$i) {
            array_push($this->first, array_pop($this->last));
        }

        return array_pop($this->first);
    }

    public function peek()
    {
        $lastLength = count($this->last);

        for ($i = 0; $i < $lastLength; ++$i) {
            array_push($this->first, array_pop($this->last));
        }

        return end($this->first);
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
