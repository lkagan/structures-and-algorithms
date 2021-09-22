class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) {
            return this.root = new Node(value);
        }

        let current = this.root;

        while (true) {
            if (! current) {
                return current = new Node(value);
            }

            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    }

    /**
     * Return the node if matched, null otherwise.
     * @param value
     * @return {Node | null}
     */
    lookup(value) {

    }

    // TODO: implement this in later lessons.
    remove(value) {

    }
}


function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}


const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root));

//         9
//     4        20
//   1   6    15   170
