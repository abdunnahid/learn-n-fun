class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Numbers
const a = new TreeNode(2);
const b = new TreeNode(3);
const c = new TreeNode(1);
const d = new TreeNode(3);
const e = new TreeNode(1);
const f = new TreeNode(null);
const g = new TreeNode(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

// ========================
//           2
//       /       \
//     3           1
//   /   \       /   \
//  3     1           1
// ========================

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
 * @return {number}
 */
var pseudoPalindromicPaths = function (root) {

    const paths = [];

    const findPaths = (node, arr, index) => {

        if (node == null) return;

        arr[index] = node.val;

        if (node.left == null && node.right == null) {
            const tempPath = [];
            for (let i = 0; i <= index; i++) {
                tempPath.push(arr[i]);
            }
            paths.push(tempPath);
        }
        findPaths(node.left, arr, index + 1);
        findPaths(node.right, arr, index + 1);
    }

    const arr = [];
    findPaths(root, arr, 0);

    const ispseudoPalindrome = (arr) => {

        const countMap = {};

        for (const val of arr) {
            if (!countMap.hasOwnProperty(val)) {
                countMap[val] = 1;
            }
            else {
                countMap[val] = countMap[val] + 1;
            }
        }

        let oddCount = 0;

        for (const key in countMap) {
            if (countMap[key] % 2 != 0) {
                oddCount++;
            }
        }

        if (oddCount > 1) {
            return false;
        }

        return true;

    }

    let result = 0;
    for (const path of paths) {
        if (ispseudoPalindrome(path)) {
            result++;
        }
    }
    return result;

};

const result = pseudoPalindromicPaths(a);
console.log("Result: ", result);
// TODO: This solution did not pass all the test cases.
