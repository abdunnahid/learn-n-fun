class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constrctor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if (!this.root) {
            this.root = node;
            return this.root;
        }

        return this._insertNode(this.root, node);
    }

    _insertNode(node, newNode) {

        if (newNode.value < node.value) {
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

        if (value < node.value) {
            return this._searchvalue(node.left, value);
        }
        else if (value > node.value) {
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

        if (value < node.value) {
            node.left = this._removeValue(node.left, value);
            return node;
        }
        else if (value > node.value) {
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
            node.value = this._minValue(node.right);
            node.right = this._removeValue(node.right, node.value);

            return node;
        }

    }

    // Helper function to find the minimum value node
    _minValue(node) {
        let min = node.value;
        while (node.left !== null) {
            node = node.left;
            min = node.value;
        }
        return min;
    }

}

// const data = [5, 4, 3, 2, 1];
// const data = [1, 2, 3, 4, 5];
const data = [6, 3, 2, 4, 5];

const bst = new BinarySearchTree();
for (const value of data) {
    bst.insert(value);
}

// bst.remove(3);
// console.log('bst.search: ', bst.search(3));
// console.log('BST: ', JSON.stringify(bst.root, null, 2));

export { bst };