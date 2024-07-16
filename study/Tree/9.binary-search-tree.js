export class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}


export class BinarySearchTree {
    constrctor() {
        this.root = null;
    }

    addRange(values) {
        for (const value of values) {
            this.insert(value);
        }
        return this.root;
    }

    insert(value) {
        const node = new TreeNode(value);

        if (!this.root) {
            this.root = node;
            return this.root;
        }

        return this._insertNode(this.root, node);
    }

    _insertNode(node, newNode) {
        if (newNode.val < node.val) {
            if (!node.left) {
                node.left = newNode;
                return this.root;
            }
            this._insertNode(node.left, newNode);
        }
        else {
            if (!node.right) {
                node.right = newNode;
                return this.root;
            }
            this._insertNode(node.right, newNode);
        }
    }

    search(value) {
        return this._searchvalue(this.root, value);
    }

    _searchvalue(node, value) {

        if (!node) { return false; }

        if (value < node.val) {
            return this._searchvalue(node.left, value);
        }
        else if (value > node.val) {
            return this._searchvalue(node.right, value);
        }
        else {
            return node;
        }
    }

    remove(value) {
        this.root = this._removeValue(this.root, value);
        return this.root;
    }

    _removeValue(node, value) {

        if (!node) { return null; }

        if (value < node.val) {
            node.left = this._removeValue(node.left, value);
            return node;
        }
        else if (value > node.val) {
            node.right = this._removeValue(node.right, value);
            return node;
        }
        else {
            // Found the node that needs to be removed
            // Node with only one child or no child
            if (!node.left) {
                return node.right;
            }
            else if (!node.right) {
                return node.left;
            }

            // Node with two children, get the inorder successor
            node.val = this._minValue(node.right);
            node.right = this._removeValue(node.right, node.val);

            return node;
        }

    }

    // Helper function to find the minimum value node
    _minValue(node) {
        let min = node.val;
        while (node.left !== null) {
            node = node.left;
            min = node.val;
        }
        return min;
    }

    // InOrder Traversal
    inOrderTraversalAsc = (node = this.root, result = []) => {

        if (!node) { return; }

        this.inOrderTraversalAsc(node.left, result);
        result.push(node.val);
        this.inOrderTraversalAsc(node.right, result);

        return result;

    }
    inOrderTraversalDesc = (node = this.root, result = []) => {

        if (!node) { return; }

        this.inOrderTraversalDesc(node.right, result);
        result.push(node.val);
        this.inOrderTraversalDesc(node.left, result);

        return result;
    }

    // PreOrder Traversal
    preOrderTraversal = (node = this.root, result = []) => {

        if (!node) { return; }

        result.push(node.val);
        this.preOrderTraversal(node.left, result);
        this.preOrderTraversal(node.right, result);

        return result;

    }

    // PostOrder Traversal
    postOrderTraversal = (node = this.root, result = []) => {

        if (!node) { return; }

        this.postOrderTraversal(node.right, result);
        this.postOrderTraversal(node.left, result);
        result.push(node.val);

        return result;

    }

    // LevelOrder Traversal(bfs)
    levelOrderTraversal = (rootNode = this.root) => {

        const result = [];
        const queue = [rootNode];

        while (queue.length > 0) {
            const node = queue.pop();
            result.push(node.val);

            if (node.left) {
                queue.unshift(node.left);
            }
            if (node.right) {
                queue.unshift(node.right);
            }
        }

        return result;

    }

}

// const data = [5, 4, 3, 2, 1];
// const data = [1, 2, 3, 4, 5];
// const data = [6, 3, 2, 4, 5];
// const bst = new BinarySearchTree();
// bst.addRange(data);

// const asc = bst.inOrderTraversalAsc(bst.root);
// console.log("inOrder asc: ", asc);

// const desc = bst.inOrderTraversalDesc(bst.root);
// console.log("inOrder desc: ", desc);

// const preOrder = bst.preOrderTraversal(bst.root);
// console.log("preOrder: ", preOrder);

// const postOrder = bst.postOrderTraversal(bst.root);
// console.log("postOrder: ", postOrder);

// const levelOrder = bst.levelOrderTraversal(bst.root);
// console.log("levelOrder: ", levelOrder);

// bst.remove(3);
// console.log('bst.search: ', bst.search(3));
// console.log('BST: ', JSON.stringify(bst.root, null, 2));