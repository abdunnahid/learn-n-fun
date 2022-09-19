/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    if ((!nums1 && !nums2) || (nums1.length === 0 && nums2.length === 0)) {
        return 0;
    }

    const mergedArray = [];

    let left = 0;
    let right = 0;

    while (left < nums1.length || right < nums2.length) {
        if (nums1[left] !== undefined && nums2[right] !== undefined) {
            if (nums1[left] <= nums2[right]) {
                mergedArray.push(nums1[left]);
                left++;
            }
            else {
                mergedArray.push(nums2[right]);
                right++;
            }
        }
        else if (nums1[left] !== undefined) {
            mergedArray.push(nums1[left]);
            left++;
        }
        else if (nums2[right] !== undefined) {
            mergedArray.push(nums2[right]);
            right++;
        }
    }

    // console.log("Merged Array====>", mergedArray);

    if (mergedArray.length % 2 === 0) {
        const x = (mergedArray[mergedArray.length / 2]);
        const y = (mergedArray[(mergedArray.length / 2) - 1]);
        return (x + y) / 2;
    }

    return mergedArray[Math.floor(mergedArray.length / 2)];

};

const result = findMedianSortedArrays([0, 0], [0, 0]);
// const result = findMedianSortedArrays([1, 3], [2]);
// const result = findMedianSortedArrays([1, 2], [3, 4]);
console.log("Result===>", result);