/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    let result = [];
    const hashTable = {};

    nums.forEach((num, index) => {
        if (!(num in hashTable)) {
            hashTable[num] = [index];
        }
        else {
            hashTable[num].push(index);
        }
    });

    nums.forEach((num, index) => {
        const search = target - num;

        if (search === num && hashTable[num].length > 1) {
            return result = [hashTable[num][0], hashTable[num][1]];
        }
        if (search in hashTable && search !== num) {
            return result = [index, hashTable[search][0]];
        }
    });

    return result;

};

const result = twoSum([-1, -2, -3, -4, -5], - 8);
// const result = twoSum([3, 0], 3);
// const result = twoSum([2, 7, 11, 15], 9);
console.log("Result: ", result);