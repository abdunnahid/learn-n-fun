/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    const numFrequencyMap = {}
    for (const num of nums) {
        if (num in numFrequencyMap) {
            numFrequencyMap[num]++;
        }
        else {
            numFrequencyMap[num] = 1;
        }
    }

    const numFrequencyArr = [];
    for (const key in numFrequencyMap) {
        numFrequencyArr.push({
            num: key,
            frequency: numFrequencyMap[key]
        });
    }

    numFrequencyArr.sort((a, b) => b.frequency - a.frequency);

    return numFrequencyArr.slice(0, k).map(elm => parseInt(elm.num));

};

const nums = [1, 1, 1, 2, 2, 2, 2, 2, 3];
const k = 2;
const result = topKFrequent(nums, k);
console.log(result);