import { rootNode } from "./tree.js";

const findpathsR = (root) => {

    const result = [];
    if (root === null) return [];

    const dfs = (node, pathTracker = [], index = 0) => {

        pathTracker[index] = node.val;

        console.log("index===> ", index);
        console.log("currentPath===> ", pathTracker);

        if (node.left === null && node.right === null) {
            console.log('FOUND A LEAF NODE!!! ', pathTracker);

            const path = [];
            for (let i = 0; i <= index; i++) {
                path.push(pathTracker[i]);
            }

            result.push(path);
            return;
        }

        if (node.left !== null) dfs(node.left, pathTracker, index + 1);
        if (node.right !== null) dfs(node.right, pathTracker, index + 1);

    }

    dfs(root);

    return result;

}

// ========================
//           1
//       /       \
//     2           3
//   /   \       /   
//  4     5     6     
//             /
//            7
//           /
//          8
// ========================
const result = findpathsR(rootNode);
console.log('Result: ', result);