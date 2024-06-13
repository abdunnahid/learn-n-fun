/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const result = [];

    const left = [];
    const right = [];

    for (let i = 0; i < nums.length; i++) {

        if (i == 0) left.push(1); // There is no element to the left, so product is 1

        // There is an element to the left,
        // So find the product of the left element and the element's left elements
        else left.push(nums[i - 1] * left[i - 1]);

    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i == nums.length - 1) right[i] = 1; // There is no element to the right, so product is 1

        // There is an element to the right,
        // So find the product of the right element and the element's right elements
        else right[i] = right[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        const leftElemensProduct = left[i];
        const rightElemensProduct = right[i];

        result[i] = leftElemensProduct * rightElemensProduct;

    }

    return result;

};

const nums = [-1, 1, 0, -3, 3];
// const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log("result:", result);
