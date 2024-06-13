/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {

    let maxSubArrayLength = 0;
    let max = 0;
    const maxTable = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= max) {
            max = nums[i];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max) {
            maxTable[i] = null
        }
    }

    while (Object.keys(maxTable).length > 0) {
        const key = parseInt(Object.keys(maxTable)[0]);

        let left = key - 1;
        let right = key + 1;
        let subArrayLength = 1;
        delete maxTable[key];

        while (nums[left] === max || nums[right] === max) {
            if (nums[left] === max) {
                delete maxTable[left];
                left--;
                subArrayLength++
            }
            if (nums[right] === max) {
                delete maxTable[right];
                right++;
                subArrayLength++
            }
        }

        if (subArrayLength > maxSubArrayLength) {
            maxSubArrayLength = subArrayLength;
        }

    }

    return maxSubArrayLength;

};

const result = longestSubarray([5, 5, 5, 5, 5, 5, 5]);
console.log("Result: ", result);