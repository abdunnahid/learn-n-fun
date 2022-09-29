/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {

    const result = [];

    if (x < arr[0]) {
        for (let i = 0; i < k; i++) {
            result.push(arr[i]);
        }
        return result;
    }

    if (x > arr[arr.length - 1]) {
        for (let i = arr.length - k; i < arr.length; i++) {
            result.push(arr[i]);
        }
        return result;
    }

    const findSmallestCloseIndexBinary = (array, val) => {

        let left = 0;
        let right = array.length - 1;
        let closestIndex = -1;

        while (left <= right) {

            const mid = Math.floor((left + right) / 2);

            if (Math.abs(arr[closestIndex] - val) <= Math.abs(arr[mid] - val)) {
                closestIndex = Math.min(mid, closestIndex);
            }
            else {
                closestIndex = mid;
            }

            if (array[mid] === val) {
                break;
            }
            else if (array[mid] > val) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        return closestIndex;
    }

    const closestIndex = findSmallestCloseIndexBinary(arr, x);

    let start = closestIndex - k + 1;
    let end = closestIndex;

    while (start <= closestIndex) {
        if (arr[start] === undefined) {
            start++;
            end++;
        }
        else if (Math.abs(arr[start] - x) > Math.abs(arr[end + 1] - x)) {
            start++;
            end++;
        }
        else {
            break;
        }
    }

    for (let i = start; i <= end; i++) {
        result.push(arr[i]);
    }

    return result;
};

// const result = findClosestElements([1, 1, 1, 10, 10, 10], 1, 9);
// const result = findClosestElements([1, 3], 1, 2);
const result = findClosestElements([1, 2, 4, 4, 5], 2, 4);
console.log("Result: ", result);