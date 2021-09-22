# Big-O

* Big-O Asymptotic Analysis
* The *O* is for Order of Magnitude
* [Big-O Cheatsheet](https://www.bigocheatsheet.com/)
* Good code
  * Readable
  * Scalable
    * Speed: time complexity
    * Memory: space complexity
* Be sure to prioritize based on the needs of the business.  
  * Readability may be a top priority.
  * Over-optimization could lead to problems.

* Used to explain algorithmic complexity
* `O(n)`: Linear Time:  As number of inputs increase, number of ops increases linearly.
* `O(1)`: Constant Time: Number of ops stays constant regardless of input.
* Opinions vary if assignments and return should count toward number of ops in Big-O.

```javascript
function test(args) {
    let a = 1; // O(1)
    a++; // O(1)

    for (let i = 0; i < args.length; ++i) { // O(n)
        someMethod(); // O(n)
    }

    return a; // O(1)
}

// Total = O(3 + 2n)
```

## Rules

1. Only consider the worst case
    * e.g.: If searching an array, assume search term is at end.

1. Remove constants
    * Remove single ops
    * Remove divisors / multipliers

1. Different terms for inputs

    ```javascript
    function test(var1, var2) {
      for (let i = 0, i < var1.length; ++i) {
        someMethod();
      }

      for (let j = 0, j < var1.length; ++j) {
        someOtherMethod();
      }
    }

    // O(a + b)

    ```

1. Drop Non-dominants
    * If there's a for loop of values in an array `O(n)`, and there's also a
      nested for loop of those values `O(n) * O(n) = O(n^2)`, drop the `O(n)` and
      just keep the `O(n^2)`.

* `O(n^2)`: Quadratic time

```javascript
    let values = ['a', 'b', 'c'];

    for (let i = 0, i < var1.length; ++i) {
      for (let j = 0, j < var1.length; ++j) {
        console.log(values[i], values[j]);
      }
    }

    // O(n) * O(n) = O(n^2)
```

* `O(a*b)`

  ```javascript
    function test(var1, var2) {
      for (let i = 0; i < var1.length; ++i) {
        for (let j = 0; j < var2.length; ++j) {
          doSomething();
        }
    }
  ```

  * `O(n!)`: Factorial time.  Pronounced Oh n factorial
    * Creates a nested loop for each input.  Never use it!

## Space Complexity

* Each `n` consists of
  * Variables
  * Data structures
  * Function calls
  * Allocations

```javascript
  function makeArray(size) {
    let arr;

    for (let i = 0; i < size.length; ++i) {
        arr[i] = 'hi';
    }
  }

  // O(n)
```

## Interview Questions

* Given 2 arrays, find if they have any matching elements.

  ```javascript
  const ar1 = ['a', 'b', 'c'];
  const ar2 = ['c', 'd', 'e'];
  ```
  
  * First solution, nested `for` loops = `O(a*b)`.
  * Better solution, loop through first array, assigning each value as a property to an object.  Next, loop through second array. Each iteration checks if the current array value exists as a property on the created object. `O(a+b)`

  ```javascript
  const ar1ValsAsProps = {};

  for (let ar1val of ar1) {
     if (!ar1ValsAsProps[ar1val]) {
        ar1ValsAsProps[ar1val] = true;
     }
  }

  for (let ar2val of ar2) {
    if (ar1ValsAsProps[ar2val]) {
      return true;
    }
  }

  return false;
  ```

# Data Structures

## Arrays

* _Static_ arrays have fixed length content and memory allocated on definition.
* _Dynamic_ arrays can have any length of content.
* Pop: pops off the last element of the array `O(1)`
* Push: push an element on to the end of array `O(1)`
  * This could be `O(n)` if a dynamic array needs to be moved to append more data to it.
* Shift: shifts the first value of the array off and returns it. `O(n)`
* Unshift: Prepend one or more elements to the beginning of an array. `O(n)`
* Pros:
  * Fast lookups (cache locality: close memory)
  * Fast push / pop
  * Ordered
* Cons:
  * Slow inserts
  * Slow deletes
  * Fixed size if using static array
* Big-O time complexity of operations
  * Search: `O(n)`
  * Lookup: `O(1)`
  * Push: `O(1)`, possibly `O(n)` if dynamic and memory move is required.
  * Insert: `O(n)`
  * Delete: `O(n)`

## Hash Tables

* A.K.A.
  * Hash maps
  * Hashes
  * Maps
  * Dictionaries
  * Object (js)

* _Idempotent_:
  * Given the same input, a function will always return the same output.
  * This is how hashes are set.
* Big-O time complexity of operations
  * Search: `O(1)`
  * Lookup: `O(1)`
  * Insert: `O(1)`
  * Delete: `O(1)`
  
* Avoid nested loops by using a hash table during the first iteration.  Then, replace the second iteration with a direct look-up.
  * Time complexity goes from `O(n^2)` to `O(n)`.
  * Space complexity goes form `O(1)` to `O(n)`, which is usually a better option.

## Linked Lists

* Each node has 2 pieces: data and pointer
* _Head_: first node.
* _Tail_: last node.
* Are `null` terminated
* Can be sorted.
* Big-O time complexity
  * prepend: `O(1)`
  * append: `O(1)`
  * lookup: `O(n)`
  * insert: `O(n)`
  * delete: `O(n)`

## Stacks & Queues

### Stacks

* LIFO
* Big-O time complexity
  * lookup: `O(n)`
  * pop: `O(1)`
  * push: `O(1)`
  * peek: `O(1)`

### Queues

* FIFO
* Big-O time complexity
  * lookup: `O(n)`
  * unshift: `O(1)`
  * shift: `O(1)`
  * peek: `O(1)`

## Trees

### Binary Tree

* Each node can have 0-2 descendants.
* Each child node can have only 1 parent.
* A full or *perfect* tree
  * Each node has zero or 2 children.
  * The number of nodes on the bottom level is the same as the number of nodes on all the previous levels + 1.
* Level *0* is the top level.
* Counting nodes
  * Each level has 2 ^ \<level number\> nodes.
  * Level 0: 2^0 = 1;
  * Level 1: 2^1 = 2;
  * Level 2: 2^2 = 4;
  * Total number of nodes in tree = 2^height - 1
    * If on level 2 of perfect tree, nodes = 7.
    * Log nodes = height
    * Log 100 = 2 because 10^2 = 100;
  * Logarithm sidebar
    * ![format](https://www.basic-mathematics.com/images/logarithm.png)
    * Computer science context assumes a log base of 2.
    * General mathematics assumes a log base of 10.
    * Computer science: Log(8) = 3  because 2 * 2 * 2 = 3 or 2^3 = 8;
    * The resulting value above, 3, is the number of times 2 needs to be multiplied by itself to get 8.
    * [Deep dive video](https://www.youtube.com/watch?v=M4ubFru2O80)
* Binary Search Tree
  * Node to the right of the current node must be greater than the value of the current node.
  * Insert , delete & lookup are `O(log N)` 
  * Unbalanced search trees effectively turn into linked lists with a linear time complexity, `O(n)`.
