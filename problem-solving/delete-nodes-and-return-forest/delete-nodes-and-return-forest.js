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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {

    const forest = [];

    const deleteNode = (node) => {
        if (!node) { return node; }

        node.left = deleteNode(node.left);
        node.right = deleteNode(node.right);

        if (to_delete.includes(node.val)) {
            if (node.left) {
                forest.push(node.left);
            }
            if (node.right) {
                forest.push(node.right);
            }
            node = null;
        }

        return node;
    }

    deleteNode(root);
    if (!to_delete.includes(root.val)) {
        forest.unshift(root);
    }
    return forest;

};


const root = [1, 2, 3, 4, 5, 6, 7], to_delete = [3, 5];

import { BinaryTree } from "../../study/tree/8.binary-tree.tree.js";
const binaryTree = new BinaryTree(root);
// console.log("binaryTree: ", JSON.stringify(binaryTree, null, 4));

const result = delNodes(binaryTree.root, to_delete);
console.log("result: ", result)
console.log("result: ", JSON.stringify(result, null, 4))
