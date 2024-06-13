/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {

    const leftLowest = [];
    const rightHighest = [];

    leftLowest[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        leftLowest[i] = Math.min(leftLowest[i - 1], nums[i - 1]);
    }

    rightHighest[nums.length - 1] = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        rightHighest[i] = Math.max(rightHighest[i + 1], nums[i + 1]);
    }

    for (let i = 1; i < nums.length; i++) {
        const leftLowestVal = leftLowest[i];
        const rightHighestVal = rightHighest[i];

        if (nums[i] > leftLowestVal && nums[i] < rightHighestVal) {
            return true;
        }
    }

    return false;
};

const nums = [20, 100, 10, 12, 5, 13];
const result = increasingTriplet(nums);
console.log("result:", result);
