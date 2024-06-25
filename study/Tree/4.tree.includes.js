import { rootNode } from "./1.tree.js";

const treeIncludes = (root, target) => {


    if (!root) {
        return false;
    }

    console.log("Node val: ", root.val);

    if (root.val === target) {
        return true;
    }
    
    const leftIncludes = treeIncludes(root.left, target);
    const rightIncludes = treeIncludes(root.right, target);
    
    return leftIncludes || rightIncludes;

}

const result = treeIncludes(rootNode, 3);
console.log("Result: ", result);

// Tree:
//         1
//       /   \
//     2       3
//   /   \    / \
// 4      5  6   7  
//              /
//             8