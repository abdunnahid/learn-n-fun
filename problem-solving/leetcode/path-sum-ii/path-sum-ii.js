import { rootNode } from "../../Tree/tree.js";

var pathSum = function (root, targetSum) {

    const result = [];
    if (!root) return result;

    const dfs = (node, pathTrackerArr = [], index = 0) => {

        pathTrackerArr[index] = node.val;

        if (node.left === null && node.right === null) {

            const path = [];
            let pathSum = 0;

            for (let i = 0; i <= index; i++) {
                path.push(pathTrackerArr[i]);
                pathSum = pathSum + pathTrackerArr[i];
            }

            if (pathSum === targetSum) {
                result.push(path);
            }

            return;

        }

        if (node.left !== null) dfs(node.left, pathTrackerArr, index + 1);
        if (node.right !== null) dfs(node.right, pathTrackerArr, index + 1);

    }

    dfs(root);

    return result;

};

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
const result = pathSum(rootNode, 26);
console.log('Result: ', result);