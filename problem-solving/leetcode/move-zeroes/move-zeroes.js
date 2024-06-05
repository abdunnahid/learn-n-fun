/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

    let zeroCount = 0;

    let index = 0;
    while (index < nums.length) {
        if (nums[index] === 0) {
            nums.splice(index, 1);
            zeroCount++;
        }
        else {
            index++;
        }
    }
    for (let i = 0; i < zeroCount; i++) {
        nums.push(0);
    }

    return nums;

};

const nums = [0, 1, 0, 3, 12];
const result = moveZeroes(nums);
console.log("result:", result);
