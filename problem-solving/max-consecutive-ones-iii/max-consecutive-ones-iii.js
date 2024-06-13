/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let start = 0;
    let ans = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) count++;

        if (count > k) {
            if (nums[start] == 0) count--;
            start++;
        }
        ans = Math.max(ans, i - start + 1);
    }
    return ans;
};

var longestOnesTle = function (nums, k) {

    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let end = i;
        let zeros = 0;
        while (end < nums.length) {
            if (nums[end] == 1) {
                end++;
                continue;
            }

            if (nums[end] == 0) {
                if (zeros == k) {
                    break;
                }
                zeros++;
                end++;
            }
        }

        max = Math.max(max, (end - i));
    }
    return max;

};

const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2;
// const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k = 3;
// const nums = [0, 0, 0, 1], k = 2;
const result = longestOnes(nums, k);
console.log("result:", result);
