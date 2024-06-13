/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {

    let result = 0;
    let index = 0;
    while (index < colors.length) {

        let repeatedIndex = index;

        let max = 0;
        let sum = 0;

        do {

            if (neededTime[repeatedIndex] > max) {
                max = neededTime[repeatedIndex];
            }
            sum = sum + neededTime[repeatedIndex];
            repeatedIndex++;

        } while (colors[repeatedIndex] === colors[repeatedIndex - 1]);

        const repeatCount = repeatedIndex - index;
        index = repeatedIndex;

        if (repeatCount > 1) {
            result = result + (sum - max);
        }
    }

    return result;

};

const result = minCost("aabaaa", [1, 2, 3, 4, 1, 2]);
console.log("Result: ", result);