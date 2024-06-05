/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    let left = 0;
    let right = height.length - 1;

    let largestContainer = 0;

    while (left < right) {

        const shorterHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const containerSize = shorterHeight * width;
        largestContainer = Math.max(largestContainer, containerSize);

        if (height[left] >= height[right]) {
            right--;
        }
        else {
            left++;
        }
    }

    return largestContainer;

};

var maxAreaTimeLimitExceeds = function (height) {
    let largestContainer = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = height.length - 1; j > i; j--) {

            const shorterHeight = Math.min(height[i], height[j]);
            const width = j - i;
            const currentContainerSize = shorterHeight * width;
            largestContainer = Math.max(largestContainer, currentContainerSize)
        }
    }

    return largestContainer;
};

// const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
const result = maxArea([1, 0, 1]);
console.log('Result: ', result);