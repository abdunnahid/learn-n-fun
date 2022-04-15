/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    if (target > nums[nums.length - 1]) {
        return nums.length;
    }

    if (target < nums[0]) {
        return 0;
    }

    let left = 0;
    let right = nums.length - 1;

    let lastSearchedInde = null;

    while (left <= right) {

        const middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            return middle;
        }

        if (target > nums[middle]) {
            if (target < nums[middle + 1]) {
                return middle + 1;
            }
            left = middle + 1;
        }
        else {
            if (nums[middle - 1] < target) {
                return middle;
            }
            right = middle - 1;
        }
        lastSearchedInde = middle;
    }

};

const result = searchInsert([1], 1);
console.log('Result: ', result);