import { rootNode } from "./tree.js";

const treeBfs = (root) => {

    const queue = [root];
    
    while(queue.length > 0) {
        const node = queue.pop();
        console.log("Reading Node: ", node.val);

        if(node.left) queue.unshift(node.left);
        if(node.right) queue.unshift(node.right);

        console.log("Queue: ", queue);

    }

}

treeBfs(rootNode);

//         a
//       /   \
//     b       c
//   /   \    /  \
// d      e  f     g