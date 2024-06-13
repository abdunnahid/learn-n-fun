/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {

    let result = 0;

    let start = 0;
    let end = 0;
    let count = 0;

    while (end < nums.length) {
        if (nums[end] == 0) {
            count++;
        }

        if (count > 1) {
            if (nums[start] == 0) {
                count--;
            }
            start++;
        }
        result = Math.max(result, end - start);

        end++;
    }

    return result;
};

// const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
const nums = [1, 1, 1];
const result = longestSubarray(nums);
console.log("result:", result);
