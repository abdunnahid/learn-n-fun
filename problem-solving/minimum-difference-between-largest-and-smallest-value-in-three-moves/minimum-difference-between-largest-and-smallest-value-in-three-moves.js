/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {

    if (nums.length <= 3) { return 0; }

    nums.sort((a, b) => a - b);

    let low = 3;
    let high = nums.length - 1;

    let result = Infinity;

    while (low >= 0) {

        const diff = nums[high] - nums[low];
        if (diff < result) {
            result = diff;
        }

        low--;
        high--;
    }

    return result;

};

// const nums = [1, 5, 0, 10, 14];
// const nums = [5, 3, 2, 4];
// const nums = [3, 100, 20];
const nums = [1, 2, 3, 20, 100];
const result = minDifference(nums);
console.log("🚀 ~ result:", result);
