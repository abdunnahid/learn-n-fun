/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    const duplicateCheckMap = {};
    const result = [];

    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            const searchElement = 0 - nums[i] - nums[j];

            let left = j + 1;
            let right = nums.length - 1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);

                if (searchElement < nums[mid]) {
                    right = mid - 1;
                }
                else if (searchElement > nums[mid]) {
                    left = mid + 1;
                }
                else {

                    const triplet = [nums[i], nums[j], nums[mid]];

                    if (!(triplet.join(',') in duplicateCheckMap)) {
                        duplicateCheckMap[triplet.join(',')] = null;
                        result.push(triplet);
                    }
                    break;
                }
            }

        }

    }

    return result;

};

const result = threeSum([0, 0, 0]);
// const result = threeSum([-4, -1, -1, 0, 1, 2]);
console.log('Result: ', result);