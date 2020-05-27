<?php

class LinkedList
{
    public Node $head, $tail;
    public int $length;

    /**
     * Setup the head & tail nodes of the list
     *
     * @param mixed $value
     */
    public function __construct($value)
    {
        $this->head = $this->tail = new Node($value);
        $this->length = 1;
    }

    /**
     * Append a node to the end of the list.
     *
     * @param mixed $value
     * @return integer Number of nodes in the list
     */
    public function append($value): int
    {
        $this->tail->next = new Node($value);
        $this->tail = $this->tail->next;
        return ++$this->length;
    }

    /**
     * Prepend a node to the beginning of the list.
     *
     * @param mixed $value
     * @return integer Number of nodes in the list
     */
    public function prepend($value): int
    {
        $this->head = new Node($value, $this->head);
        return ++$this->length;
    }

    /**
     * Insert a node anywhere in the list.
     *
     * @param integer $index
     * @param mixed $value
     * @return integer Number of nodes in the list
     * @throws InvalidArgumentException
     */
    public function insert(int $index, $value): int
    {
        if ($index === 0) {
            return $this->prepend($value);
        }

        $existingNode = $this->nodeAtIndex($index - 1);
        $existingNode->next = new Node($value, $existingNode->next);
        return ++$this->length;
    }

    /**
     * Get the node at the given index.
     *
     * @param integer $index
     * @return Node
     * @throws InvalidArgumentException
     */
    public function nodeAtIndex(int $index): Node
    {
        if ($index < 0 || $index >= $this->length) {
            throw new InvalidArgumentException('Index out of bounds');
        }

        $current = $this->head;

        for ($i = 0; $i <= $index; ++$i) {
            if ($i === $index) {
                return $current;
            } else {
                $current = $current->next;
            }
        }
    }
}


class Node
{
    public $value;
    public ?Node $next;

    public function __construct($value, ?Node $next = null)
    {
        $this->value = $value;
        $this->next = $next;
    }

    public function __toString()
    {
        return sprintf('{value: %s, next: %s}', $this->value, $this->next);
    }
}

$list = new LinkedList(10);
$list->append(5);
$list->prepend(12);
$list->insert(1, 4);
print($list->head);
