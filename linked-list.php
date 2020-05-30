<?php

class LinkedList
{
    public Node $head, $tail;
    public int $length;

    /**
     * Setup the head and tail nodes of the list
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
        $newTail = new Node($value, $this->tail);
        $this->tail->next = $newTail;
        $this->tail = $newTail;
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
        $newNode = new Node($value, null, $this->head);
        $this->head->previous = $newNode;
        $this->head = new Node($value, null, $this->head);
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

        $existingNode   = $this->nodeAtIndex($index);
        $previous       = $existingNode->previous;
        $newNode        = new Node($value, $previous, $existingNode);
        $previous->next = $newNode;
        return ++$this->length;
    }

    /**
     * Delete a node from the list.
     *
     * @param integer $index
     * @return integer Number of notes in the list
     */
    public function delete(int $index): int
    {
        if ($index === 0) {
            $this->head           = $this->head->next;
            $this->head->previous = null;
        } else {
            $node               = $this->nodeAtIndex($index);
            $previousNode       = $node->previous;
            $nextNode           = $node->next;
            $nextNode->previous = $previousNode;
            $previousNode->next = $nextNode;
        }

        return --$this->length;
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
            }

            $current = $current->next;
        }
    }
}


class Node
{
    public $value;
    public ?Node $previous, $next;

    public function __construct($value, ?Node $prev = null, ?Node $next = null)
    {
        $this->value    = $value;
        $this->previous = $prev;
        $this->next     = $next;
    }

    public function __toString()
    {
        return sprintf(
            '{value: %s, next: %s}', 
            $this->value, 
            $this->next ?? 'null'
        );
    }
}

$list = new LinkedList(10);
$list->append(5);
$list->prepend(12);
$list->insert(1, 4);
$list->delete(1);
print($list->head);
