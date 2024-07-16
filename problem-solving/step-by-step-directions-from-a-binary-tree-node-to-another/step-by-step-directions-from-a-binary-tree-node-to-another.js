/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
    const findLCA = (node, p, q) => {
        if (!node || node.val === p || node.val === q) {
            return node;
        }

        const left = findLCA(node.left, p, q);
        const right = findLCA(node.right, p, q);

        if (left && right) {
            return node;
        }

        return left ? left : right;
    };

    const findPath = (node, target, path) => {
        if (!node) {
            return false;
        }

        if (node.val === target) {
            return true;
        }

        if (findPath(node.left, target, path)) {
            path.push('L');
            return true;
        }

        if (findPath(node.right, target, path)) {
            path.push('R');
            return true;
        }

        return false;
    };

    const lca = findLCA(root, startValue, destValue);

    const startPath = [];
    const destPath = [];

    findPath(lca, startValue, startPath);
    findPath(lca, destValue, destPath);

    return 'U'.repeat(startPath.length) + destPath.reverse().join('');
};

const root = [5, 1, 2, 3, null, 6, 4], startValue = 3, destValue = 6;
// const root = [2, 1], startValue = 2, destValue = 1;
const result = getDirections(root, startValue, destValue);
console.log("result: ", result)
