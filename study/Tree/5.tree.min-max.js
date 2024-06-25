import { rootNode } from "./1.tree.js";

const treeMin = (root) => {

    if (!root) return Infinity;

    console.log("Node val: ", root.val);

    const leftMin = treeMin(root.left);
    const rightMin = treeMin(root.right);

    return Math.min(root.val, leftMin, rightMin);
}

const treeMax = (root) => {

    if (!root) return -Infinity;

    console.log("Node val: ", root.val);

    const leftMin = treeMax(root.left);
    const rightMin = treeMax(root.right);

    return Math.max(root.val, leftMin, rightMin);
}

const treeMinResult = treeMin(rootNode);
console.log("treeMinResult: ", treeMinResult);

const treeMaxResult = treeMax(rootNode);
console.log("treeMaxResult: ", treeMaxResult);


// Tree:
//         1
//       /   \
//     2       3
//   /   \    / \
// 4      5  6   7
//              /
//             8