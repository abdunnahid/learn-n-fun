import { rootNode } from "./1.tree.js";

const findpaths = (root) => {

    if (root === null) return [];

    const paths = [];

    const dfs = (node, pathTracker = [], index = 0) => {

        pathTracker[index] = node.val;

        console.log("index===> ", index);
        console.log("currentPath===> ", pathTracker);

        if (node.left === null && node.right === null) {
            console.log('FOUND A LEAF NODE!!! Path: ', pathTracker);

            const path = [];
            for (let i = 0; i <= index; i++) {
                path.push(pathTracker[i]);
            }

            paths.push(path);
            return;
        }

        if (node.left !== null) dfs(node.left, pathTracker, index + 1);
        if (node.right !== null) dfs(node.right, pathTracker, index + 1);

    }

    dfs(root);

    return paths;

}

const result = findpaths(rootNode);
console.log('Result: ', result);

// Tree:
//         1
//       /   \
//     2       3
//   /   \    / \
// 4      5  6   7
//              /
//             8