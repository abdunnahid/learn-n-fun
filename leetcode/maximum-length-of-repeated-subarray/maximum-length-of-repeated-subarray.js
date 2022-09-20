/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLengthBF = function (nums1, nums2) {

    const nums1SubArrMap = new Map();
    let result = 0;

    for (let i = 0; i < nums1.length; i++) {

        const subArr = [];

        for (let j = i; j < nums1.length; j++) {
            subArr.push(nums1[j]);
            const subArrStr = subArr.join(',');
            nums1SubArrMap.set(subArrStr, subArr.length);
        }

    }

    // console.log("nums1SubArrMap=====> ", nums1SubArrMap);

    for (let i = 0; i < nums2.length; i++) {

        const subArr = [];

        for (let j = i; j < nums2.length; j++) {

            subArr.push(nums2[j]);
            const subArrStr = subArr.join(',');

            if (nums1SubArrMap.has(subArrStr) && nums1SubArrMap.get(subArrStr) > result) {
                result = nums1SubArrMap.get(subArrStr);
                // console.log("Matched(subArrStr)======> ", subArrStr);
                // console.log("Matched(subArr)======> ", subArr);
            }
        }
    }

    return result;

};

var findLength = function (nums1, nums2) {

    let max = 0;
    const dp = Array(nums1.length).fill('').map(_ => Array(nums2.length).fill(0));

    for (let i = 0; i < nums1.length; i++) {

        for (let j = 0; j < nums2.length; j++) {

            if (nums1[i] !== nums2[j]) continue;

            const x = i === 0 || j == 0 ? 0 : dp[i - 1][j - 1];
            const currentMax = 1 + x;
            dp[i][j] = currentMax;
            max = Math.max(max, currentMax);

        }

    }

    return max;
};

const result = findLength(
    [27, 26, 13, 98, 73, 14, 35, 45, 11, 72, 6, 31, 55, 80, 87, 24, 81, 75, 53, 22, 46, 9, 22, 85, 60, 87, 56, 35, 12, 49, 80, 33, 30, 56, 29, 77, 28, 99, 52, 37, 82, 20, 43, 62, 32, 2, 3, 54, 58, 10, 92, 70, 5, 68, 82, 86, 95, 6, 73, 92, 97, 7, 34, 5, 78, 57, 10, 70, 78, 92, 81, 94, 72, 62, 3, 94, 57, 29, 26, 48, 88, 74, 76, 75, 20, 94, 38, 87, 22, 12, 3, 12, 13, 58, 62, 43, 43, 74, 66, 99],
    [50, 88, 0, 77, 54, 73, 76, 53, 17, 5, 25, 42, 42, 95, 31, 32, 10, 54, 94, 2, 65, 38, 86, 70, 98, 31, 27, 84, 77, 78, 41, 4, 81, 32, 82, 92, 22, 49, 6, 21, 32, 8, 80, 67, 12, 27, 41, 16, 62, 12, 45, 27, 34, 39, 54, 37, 24, 90, 73, 54, 48, 85, 3, 67, 42, 52, 97, 18, 69, 26, 22, 80, 39, 11, 47, 60, 9, 58, 53, 9, 91, 7, 0, 29, 43, 55, 55, 43, 21, 13, 97, 4, 98, 60, 21, 78, 74, 15, 23, 74]
);
// const result = findLength([5, 14, 53, 80, 48], [50, 47, 3, 80, 83]);
// const result = findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]);

console.log("Result: ", result);