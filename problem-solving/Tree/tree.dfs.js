import { rootNode } from "./tree.js";

const treeDfsRecursive = (root) => {

    if (!root) {
        return;
    }

    console.log("Reading Node: ", root.val);

    treeDfsRecursive(root.left);
    treeDfsRecursive(root.right);
}

treeDfsRecursive(rootNode);

//         a
//       /   \
//     b       c
//   /   \    /  \
// d      e  f     g