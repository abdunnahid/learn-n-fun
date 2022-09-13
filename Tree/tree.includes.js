import { rootNode } from "./tree.js";

const treeIncludes = (root, target) => {


    if (!root) {
        return false;
    }

    console.log("Node val: ", root.val);

    if (root.val === target) {
        return true;
    }

    return treeIncludes(root.left, target) || treeIncludes(root.right, target);

}

const result = treeIncludes(rootNode, 'j');
console.log("Result: ", result);


//           a
//       /       \
//     b           c
//   /   \       /   \
//  d    (e)    f     g