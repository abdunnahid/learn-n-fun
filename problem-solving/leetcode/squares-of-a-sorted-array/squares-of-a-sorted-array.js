/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {

    const squaredArr = [];

    let startPointer = 0;
    let endPointer = nums.length - 1;

    while (startPointer <= endPointer) {
        const startAbs = Math.abs(nums[startPointer]);
        const endAbs = Math.abs(nums[endPointer]);

        if (startAbs >= endAbs) {
            squaredArr.unshift(startAbs ** 2);
            startPointer++;
        }
        else {
            squaredArr.unshift(endAbs ** 2);
            endPointer--;
        }
    }

    return squaredArr;

};

const result = sortedSquares([-7, -3, 2, 3, 11]);
console.log("Result: ", result);