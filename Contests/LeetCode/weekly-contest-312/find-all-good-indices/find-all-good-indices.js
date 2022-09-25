/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var goodIndices = function (nums, k) {

    const result = [];

    const isNonIncreasingOrder = (arr, start, end) => {
        for (let i = start; i < end; i++) {

            if (arr[i] < arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    const isNonDecreasingOrder = (arr, start, end) => {
        for (let i = start; i < end; i++) {

            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    for (let i = k; i < nums.length - k; i++) {

        const isGoodIndex = isNonIncreasingOrder(nums, i - k, i - 1) && isNonDecreasingOrder(nums, i + 1, i + k);

        if (isGoodIndex) {
            result.push(i);
        }

    }

    return result;

};

const result = goodIndices([5, 4, 3, 2, 1, 2, 3, 4, 5], 2);
// const result = goodIndices([2, 1, 1, 1, 3, 4, 1], 2);
console.log("Result: ", result);