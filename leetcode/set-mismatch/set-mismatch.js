/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {

    const result = [null, null];

    const map = {};

    for (const num of nums) {
        if (num in map) {
            result[0] = num;
        }

        map[num] = null;
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!(i in map)) {
            result[1] = i;
        }
    }

    return result;

};

const result = findErrorNums([1, 5, 3, 2, 2, 7, 6, 4, 8, 9]);
console.log("Result: ", result);