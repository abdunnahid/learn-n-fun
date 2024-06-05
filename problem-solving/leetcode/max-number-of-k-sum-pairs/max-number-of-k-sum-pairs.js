/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {

    const map = {};
    for (const num of nums) {
        if (!(num in map)) {
            map[num] = 1;
        }
        else {
            map[num]++;
        }
    }

    let operationCount = 0;
    for (const num of nums) {
        const isNumAvailable = map[num] > 0;
        const pairNum = k - num;

        let isPairNumAvailable;
        if (num == pairNum) {
            isPairNumAvailable = map[pairNum] > 1;
        }
        else {
            isPairNumAvailable = map[pairNum] > 0;
        }

        if (isNumAvailable && isPairNumAvailable) {
            operationCount++;
            map[num]--;
            map[pairNum]--;
        }
    }

    return operationCount;
};

const nums = [1,2,3,4], k = 5
const result = maxOperations(nums, k);
console.log("result:", result);
