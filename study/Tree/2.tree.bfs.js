import { rootNode } from "./1.tree.js";

const treeBfs = (root) => {

    const queue = [root];
    
    while(queue.length > 0) {
        const node = queue.pop();
        console.log("Reading Node: ", node.val);

        if(node.left) queue.unshift(node.left);
        if(node.right) queue.unshift(node.right);
    }
    
}

// console.log("Queue: ", JSON.stringify(rootNode, null, 2));
treeBfs(rootNode);

// Tree:
//         1
//       /   \
//     2       3
//   /   \    / \
// 4      5  6   7  
//              /
//             8