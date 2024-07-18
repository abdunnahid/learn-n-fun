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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {

    let result = 0;

    const dfs = (node) => {

        if (!node) return [];

        if (!node.left && !node.right) return [1];

        const leftDistances = dfs(node.left)

        const rightDistances = dfs(node.right)

        leftDistances.forEach(ld => {
            rightDistances.forEach(rd => {
                if (ld + rd <= distance) result++
            })
        })

        return [...leftDistances, ...rightDistances].map(dstnc => dstnc + 1)
    }
    dfs(root)
    return result;
};

const root = [1, 2, 3, 4, 5, 6, 7], distance = 3;

import { BinaryTree } from "../../study/tree/8.binary-tree.tree.js";
const binaryTree = new BinaryTree(root);

const result = countPairs(binaryTree.root, distance);
console.log("result: ", result)
