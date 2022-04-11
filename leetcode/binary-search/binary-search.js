/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    const binarySearchRecursive = (array, start, end) => {

        if (start < 0 || end > array.length - 1) {
            return -1;
        }

        let searchIndex = Math.floor((start + end) / 2);

        if (array[searchIndex] === target) {
            return searchIndex;
        }
        if (start >= end) {
            return -1;
        }

        if (target > array[searchIndex]) {
            start = searchIndex + 1;
        }
        else {
            end = searchIndex - 1;
        }
        return binarySearchRecursive(array, start, end);

    }

    const binarySearchIterative = (array, target) => {
        let start = 0;
        let end = nums.length - 1;

        while (start <= end) {
            const searchIndex = Math.floor((start + end) / 2);
            if (target > array[searchIndex]) {
                start = searchIndex + 1;
            }
            else if (target < array[searchIndex]) {
                end = searchIndex - 1
            }
            else {
                return searchIndex;
            }
        }

        return -1;
    }

    const javaScriptBuiltInSearch = (array, target) => {
        return array.indexOf(target)
    }

    // return binarySearchRecursive(nums, 0, nums.length - 1);
    // return binarySearchIterative(nums, target);
    return javaScriptBuiltInSearch(nums, target);
};

const result = search([-1, 0, 3, 5, 9, 12], 12);
console.log("Result: ", result);