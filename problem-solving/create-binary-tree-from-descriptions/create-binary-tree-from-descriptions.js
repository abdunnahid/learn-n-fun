
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {

    const map = {};
    for (const description of descriptions) {
        if (!(description[0] in map)) {
            map[description[0]] = {
                left: null,
                right: null,
                root: true
            };
        }
        if (!(description[1] in map)) {
            map[description[1]] = {
                left: null,
                right: null,
                root: true
            };
        }

        if (description[2]) {
            map[description[0]].left = description[1];
        }
        else {
            map[description[0]].right = description[1];
        }

        map[description[1]].root = false;
    }

    let root;
    for (const key in map) {
        if (map[key].root) {
            root = new TreeNode(parseInt(key));
            break;
        }
    }

    const queue = [root];

    while (queue.length > 0) {
        const currentNode = queue.pop();
        if (map[currentNode.val].left != null) {
            currentNode.left = new TreeNode(map[currentNode.val].left);
            queue.unshift(currentNode.left);
        }
        if (map[currentNode.val].right != null) {
            currentNode.right = new TreeNode(map[currentNode.val].right);
            queue.unshift(currentNode.right);
        }
    }

    return root;

};

// const descriptions = [[20, 15, 1], [20, 17, 0], [50, 20, 1], [50, 80, 0], [80, 19, 1]];
const descriptions = [[1, 2, 1], [2, 3, 0], [3, 4, 1]];
const result = createBinaryTree(descriptions);
console.log("result: ", JSON.stringify(result, null, 2));
