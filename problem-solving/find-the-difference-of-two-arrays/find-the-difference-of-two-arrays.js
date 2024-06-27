/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {

    const result = [[], []];

    const nums1Map = {};
    const nums2Map = {};

    for (const num of nums1) {
        nums1Map[num] = false;
    }

    for (const num of nums2) {
        nums2Map[num] = false;
    }

    for (const num of nums1) {
        if (num in nums2Map) { continue; }
        if (nums1Map[num]) { continue; } // take distinct
        result[0].push(num);
        nums1Map[num] = true;
    }

    for (const num of nums2) {
        if (num in nums1Map) { continue; }
        if (nums2Map[num]) { continue; } // take distinct
        result[1].push(num);
        nums2Map[num] = true;
    }

    return result;

};

const nums1 = [1, 2, 3, 3]
const nums2 = [1, 1, 2, 2]
// const nums1 = [-80, -15, -81, -28, -61, 63, 14, -45, -35, -10];
// const nums2 = [-1, -40, -44, 41, 10, -43, 69, 10, 2];
const result = findDifference(nums1, nums2);
console.log("🚀 ~ result:", result);
