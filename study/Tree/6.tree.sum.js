import { rootNode } from "./1.tree.js";

const treeSum = (root) => {

    if (!root) return 0;

    return root.val + treeSum(root.left) + treeSum(root.right)

}

const result = treeSum(rootNode);
console.log("Result: ", result);


// Tree:
//         1
//       /   \
//     2       3
//   /   \    / \
// 4      5  6   7
//              /
//             8