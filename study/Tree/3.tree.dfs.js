import { rootNode } from "./1.tree.js";

const treeDfsRecursive = (root) => {

    if (!root) {
        return;
    }

    console.log("Reading Node: ", root.val);

    treeDfsRecursive(root.left);
    treeDfsRecursive(root.right);
}

// console.log(JSON.stringify(rootNode, null, 2));
treeDfsRecursive(rootNode);

// Tree:
//         1
//       /   \
//     2       3
//   /   \    / \
// 4      5  6   7  
//              /
//             8
     