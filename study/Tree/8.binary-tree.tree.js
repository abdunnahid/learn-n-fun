export class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

export class BinaryTree {

    constructor(array) {
        this.root = this._buildTree(array, 0);
    }

    _buildTree(array, index) {
        if (index >= array.length || array[index] === null) {
            return null;
        }
        let node = new TreeNode(array[index]);
        node.left = this._buildTree(array, 2 * index + 1);
        node.right = this._buildTree(array, 2 * index + 2);
        return node;
    }

    preOrderTraversal(node = this.root, result = []) {

        if (!node) { return; }

        result.push(node.val);
        this.preOrderTraversal(node.left, result);
        this.preOrderTraversal(node.right, result);
        return result;
    }

    inOrderTraversal(node = this.root, result = []) {

        if (!node) { return; }

        this.inOrderTraversal(node.left, result);
        result.push(node.val);
        this.inOrderTraversal(node.right, result);
        return result;
    }

    postOrderTraversal(node = this.root, result = []) {

        if (!node) { return; }

        this.postOrderTraversal(node.left, result);
        this.postOrderTraversal(node.right, result);
        result.push(node.val);
        return result;
    }

    _findPath(node, target, path = []) {
        if (node === null) {
            return false;
        }

        // Add the current node to the path
        path.push(node.val);

        // Check if the current node is the target node
        if (node.val === target) {
            return true;
        }

        // Otherwise, check if the target is in the left or right subtree
        if (this._findPath(node.left, target, path) || this._findPath(node.right, target, path)) {
            return true;
        }

        // If the target is not in either subtree, remove the current node from the path
        path.pop();
        return false;
    }

    getPathToTarget(target) {
        const path = [];
        if (this._findPath(this.root, target, path)) {
            return path;
        }
        else {
            return `Target ${target} not found in the tree`;
        }
    }
}

// Example usage
// const inputArray = [5, 1, 9, 3, 6, 4, 7];
// const inputArray = [1, 2, 4, null, 3];

// const binaryTree = new BinaryTree(inputArray);
// console.log('Root: ', JSON.stringify(binaryTree.root, null, 4));

// const preOrder = binaryTree.preOrderTraversal();
// console.log("preOrder: ", preOrder)

// const inOrder = binaryTree.inOrderTraversal();
// console.log("inOrder: ", inOrder)

// const postOrder = binaryTree.postOrderTraversal();
// console.log("postOrder: ", postOrder)

// const target = 4;
// console.log(`Path to target ${target}: `, binaryTree.getPathToTarget(target)); // [5, 9, 4]

// const targetNotFound = 10;
// console.log(`Path to target ${targetNotFound}: `, binaryTree.getPathToTarget(targetNotFound)); // "Target 10 not found in the tree"
