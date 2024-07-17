class BinaryTree {
    constructor() {
        this.tree = [];
    }

    // Insert value at the first available position
    insert(value) {
        this.tree.push(value);
    }

    // Pre-order Traversal (Root, Left, Right)
    preOrderTraversal(index = 0, result = []) {
        if (index < this.tree.length && this.tree[index] !== null) {
            result.push(this.tree[index]);
            this.preOrderTraversal(2 * index + 1, result);
            this.preOrderTraversal(2 * index + 2, result);
        }
        return result;
    }

    // In-order Traversal (Left, Root, Right)
    inOrderTraversal(index = 0, result = []) {
        if (index < this.tree.length && this.tree[index] !== null) {
            this.inOrderTraversal(2 * index + 1, result);
            result.push(this.tree[index]);
            this.inOrderTraversal(2 * index + 2, result);
        }
        return result;
    }

    // Post-order Traversal (Left, Right, Root)
    postOrderTraversal(index = 0, result = []) {
        if (index < this.tree.length && this.tree[index] !== null) {
            this.postOrderTraversal(2 * index + 1, result);
            this.postOrderTraversal(2 * index + 2, result);
            result.push(this.tree[index]);
        }
        return result;
    }

    // Level-order Traversal (Breadth-First Search)
    levelOrderTraversal() {
        let result = [];
        for (let i = 0; i < this.tree.length; i++) {
            if (this.tree[i] !== null) {
                result.push(this.tree[i]);
            }
        }
        return result;
    }

    pathToTarget(tree = this.tree, target, index = 0, path = [], dir = null) {
        if (index >= tree.length || tree[index] === null) {
            return false;
        }

        // Add the current node to the path
        path.push({ val: tree[index], dir });

        // Check if the current node is the target node
        if (tree[index] === target) {
            return true;
        }

        // Calculate the indices of the left and right children
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;

        // Check if the target is in the left or right subtree
        if (pathToTarget(tree, target, leftChildIndex, path, 'L') || pathToTarget(tree, target, rightChildIndex, path, 'R')) {
            return true;
        }

        // If the target is not in either subtree, remove the current node from the path
        path.pop();
        return false;
    }
}

// Example usage
const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(null);
binaryTree.insert(6);
binaryTree.insert(4);

console.log("Tree:", binaryTree.tree); // [5, 1, 2, 3, null, 6, 4]

console.log("Pre-order Traversal: ", binaryTree.preOrderTraversal()); // [5, 1, 3, 2, 6, 4]
console.log("In-order Traversal: ", binaryTree.inOrderTraversal());   // [3, 1, 5, 6, 2, 4]
console.log("Post-order Traversal: ", binaryTree.postOrderTraversal()); // [3, 1, 6, 4, 2, 5]
console.log("Level-order Traversal: ", binaryTree.levelOrderTraversal()); // [5, 1, 2, 3, 6, 4]
