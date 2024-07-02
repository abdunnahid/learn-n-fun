/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {

    const map = new Map();
    for (const num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const result = [];
    for (const num of nums2) {
        const intersects = (map.get(num) || 0) > 0;

        if (intersects) {
            result.push(num);
            map.set(num, map.get(num) - 1);
        }
    }

    return result;

};

// const nums1 = [1, 2, 2, 1], nums2 = [2, 2];
const nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];
const result = intersect(nums1, nums2);
console.log("🚀 ~ result:", result)
