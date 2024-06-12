/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

    const colorsCount = new Array(3).fill(0);
    for (const color of nums) {
        colorsCount[color]++;
    }

    let numsCurrentIndex = 0;
    for (let i = 0; i < colorsCount.length; i++) {

        for (let j = 0; j < colorsCount[i]; j++) {
            nums[numsCurrentIndex] = i;
            numsCurrentIndex++;
        }
    }

    return nums;
};

// const nums = [2, 0, 2, 1, 1, 0];
const nums = [];
const result = sortColors(nums);
console.log("result:", result);
