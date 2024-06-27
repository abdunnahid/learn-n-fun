/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {

    const leftPrefixSum = [];
    const rightPrefixSum = [];

    for (const num of nums) {
        const sum = num + (leftPrefixSum[leftPrefixSum.length - 1] || 0);
        leftPrefixSum.push(sum);
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        const sum = nums[i] + (rightPrefixSum[0] || 0);
        rightPrefixSum.unshift(sum);
    }

    for (let i = 0; i < nums.length; i++) {
        const leftSum = leftPrefixSum[i - 1] || 0;
        const rightSum = rightPrefixSum[i + 1] || 0;

        if (leftSum == rightSum) {
            return i;
        }
    }

    return -1;

};

const nums = [1, 7, 3, 6, 5, 6];
const result = pivotIndex(nums);
console.log("🚀 ~ result:", result);
