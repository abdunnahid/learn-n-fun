/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {



    // Bruteforce: 
    // 1. Find all the subarrays, 
    // 2. Calculate the subarray sum using prefixSum
    // 3. Check if that divisible by k
    // 4. Store count and return result
    // Corner Cases: For 1st element, take care of PreFixSum[i-1]
    // Thoughts: Finding all the subarrays time complexity is O(n^2)
    // Not so efficient, could be better
    const bruteforce = (nums, k) => {
        
        // Find the prefix sum of the array
        // Subarray Sum Formula: Sum(i,j) = PrefixSum[j] - PreFixSum[i-1],
        const prefixSum = [];
        for (const num of nums) {
            const lastCalculatedSum = prefixSum[prefixSum.length - 1] || 0;
            prefixSum.push(lastCalculatedSum + num);
        }
        console.log("subarraysDivByK ~ prefixSum:", prefixSum);

        const subarraySums = [];
        for (let start = 0; start < nums.length; start++) {
            for (let end = start; end < nums.length; end++) {
                const subarraySum = prefixSum[end] - (prefixSum[start - 1] || 0);
                if (subarraySum == 0) continue;
                if (subarraySum % k == 0) {
                    subarraySums.push(subarraySum);
                }
            }
        }
        return subarraySums.length;
    }

    // Efficient:
    // Thoughts:
    // 1. Can we avoid finding all the subarrays?
    // Go through each element, 
    // On an element, 
    // Find the subarray sum from the starting to that element: prefixSum[i]
    // Now, check if the subarray sum is divisible by k
    // If divisible, we found one of the result
    // If there is a non-zero remainder, it's not our result
    // We did not find a result of the subarray from starting
    // But it can be that, there might be a subarray between i to j that is divisible by k
    // How to find that?
    // Can we substract a subarray from the starting that sums to the remainder?
    // If so, then we have a result
    const efficient = (nums, k) => {
        let prefixSum = 0;
        let count = 0;
        let remainderMap = { 0: 1 }; // To handle the case where prefixSum itself is divisible by k

        for (let num of nums) {
            prefixSum += num;
            let remainder = prefixSum % k;

            // Handle negative remainders
            if (remainder < 0) {
                remainder += k;
            }

            if (remainderMap[remainder] !== undefined) {
                count += remainderMap[remainder];
            }

            // Update the frequency of the current remainder
            remainderMap[remainder] = (remainderMap[remainder] || 0) + 1;
        }

        return count;
    }

    return efficient(nums, k);

};


const nums = [4, 5, 0, -2, -3, 1], k = 5;
const result = subarraysDivByK(nums, k);
console.log("result:", result);
