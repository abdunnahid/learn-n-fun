/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
    let missing = 1;
    let patches = 0;
    let index = 0;

    while (missing <= n) {
        if (index < nums.length && nums[index] <= missing) {
            missing += nums[index];
            index++;
        }
        else {
            missing += missing;
            patches++;
        }
    }

    return patches;
};
const nums = [1, 5, 10], n = 20;
const result = minPatches(nums, n);
console.log("🚀 ~ result:", result)
