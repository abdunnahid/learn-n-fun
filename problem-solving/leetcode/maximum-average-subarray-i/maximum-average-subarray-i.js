/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {

    // Cache prefixSum
    const prefixSum = [];
    for (const num of nums) {
        const sum = num + (prefixSum[prefixSum.length - 1] || 0); // For the first element prefixSum.length - 1 does not exist
        prefixSum.push(sum);
    }

    // Slide through the nums of windows size k
    // Calculate the average of the window(subarray) using prefixSum
    // Store the highest average
    let result = null;
    let start = 0;
    let end = k - 1;
    while (end < nums.length) {
        // Formula: SubarraySum(i,j) = prefixSum[j] - prefixSum[i-1];
        const subarraySum = prefixSum[end] - (prefixSum[start - 1] || 0); // For the first element start - 1 does not exist
        const subarraySumAverage = subarraySum / k;
        
        if (result == null) {
            result = subarraySumAverage;
        }
        else {
            result = Math.max(result, subarraySumAverage);
        }

        start++;
        end++;
    }

    return result;
};

// const nums = [1, 12, -5, -6, 50, 3], k = 4;
const nums = [-1], k = 1;
const result = findMaxAverage(nums, k);
console.log("result:", result);
