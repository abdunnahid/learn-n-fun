/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {

    const isEven = (num) => {
        return num % 2 === 0;
    }

    const result = [];
    let sumOfEvens = 0;
    
    for (const num of nums) {
        sumOfEvens = sumOfEvens + (isEven(num) ? num : 0);
    }

    for (const query of queries) {

        const val = query[0];
        const index = query[1];

        const tempSum = isEven(nums[index]) ? sumOfEvens - nums[index] : sumOfEvens;

        nums[index] = nums[index] + val;
        sumOfEvens = isEven(nums[index]) ? tempSum + nums[index] : tempSum;

        result.push(sumOfEvens);

    }

    return result;

};

// const result = sumEvenAfterQueries([2], [[0, 0]]);
const result = sumEvenAfterQueries([1, 2, 3, 4], [[1, 0], [-3, 1], [-4, 0], [2, 3]]);
console.log("Result: ", result);