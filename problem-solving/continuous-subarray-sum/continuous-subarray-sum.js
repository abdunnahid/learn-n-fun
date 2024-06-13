/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    let cumulative = 0;

    // for cases like [3, 3]
    const map = { '0': -1 };

    for (let i = 0; i < nums.length; i++) {
        cumulative += nums[i];

        const mod = cumulative % k;

        if (!(mod in map)) {
            map[mod] = i;
        }

        if (map[mod] < i - 1) {
            return true;
        }
    }

    return false;
};

// const nums = [23, 2, 4, 6, 7], k = 6;
const nums = [3, 3], k = 6;
const result = checkSubarraySum(nums, k);
console.log("result:", result);
