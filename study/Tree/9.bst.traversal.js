import { bst } from "./8.bst.js";

// InOrder Traversal
const inOrderTraversalAsc = (node, result = []) => {

    if (!node) { return; }

    inOrderTraversalAsc(node.left, result);
    result.push(node.value);
    inOrderTraversalAsc(node.right, result);

    return result;

}
const inOrderTraversalDesc = (node, result = []) => {

    if (!node) { return; }

    inOrderTraversalDesc(node.right, result);
    result.push(node.value);
    inOrderTraversalDesc(node.left, result);

    return result;
}

// PreOrder Traversal
const preOrderTraversal = (node, result = []) => {

    if (!node) { return; }

    result.push(node.value);
    preOrderTraversal(node.left, result);
    preOrderTraversal(node.right, result);

    return result;

}

// PostOrder Traversal
const postOrderTraversal = (node, result = []) => {

    if (!node) { return; }

    postOrderTraversal(node.right, result);
    postOrderTraversal(node.left, result);
    result.push(node.value);

    return result;

}

// LevelOrder Traversal(bfs)
const levelOrderTraversal = (rootNode) => {

    const result = [];
    const queue = [rootNode];

    while (queue.length > 0) {
        const node = queue.pop();
        result.push(node.value);

        if (node.left) {
            queue.unshift(node.left);
        }
        if (node.right) {
            queue.unshift(node.right);
        }
    }

    return result;

}

const asc = inOrderTraversalAsc(bst.root);
console.log("🚀 ~ inOrder asc:", asc);

const desc = inOrderTraversalDesc(bst.root);
console.log("🚀 ~ inOrder desc:", desc);

const preOrder = preOrderTraversal(bst.root);
console.log("🚀 ~ preOrder:", preOrder)

const postOrder = postOrderTraversal(bst.root);
console.log("🚀 ~ postOrder:", postOrder)

const levelOrder = levelOrderTraversal(bst.root);
console.log("🚀 ~ levelOrder:", levelOrder)
