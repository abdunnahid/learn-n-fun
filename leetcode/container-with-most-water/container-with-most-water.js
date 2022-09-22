/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    let left = 0;
    let right = height.length - 1;

    let maxContainerSize = 0;

    while (left < right) {

        const maxHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const containerSize = maxHeight * width;
        maxContainerSize = Math.max(maxContainerSize, containerSize);
        
        if (height[left] >= height[right]) {
            right--;
        }
        else {
            left++;
        }
    }

    return maxContainerSize;

};

// const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
const result = maxArea([1, 0, 1]);
console.log('Result: ', result);