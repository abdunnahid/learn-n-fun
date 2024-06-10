/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {

    const heightsOriginal = JSON.parse(JSON.stringify(heights));
    heights = heights.sort((a, b) => a - b);

    let result = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== heightsOriginal[i]) result++;
    }

    return result;
};

const heights = [1, 1, 4, 2, 1, 3];
const result = heightChecker(heights);
console.log("result:", result);
