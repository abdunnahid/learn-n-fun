/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {

    let highest = 0;
    const result = [];
    for (const candyCount of candies) {
        if (candyCount > highest) highest = candyCount;
    }
    for (const candyCount of candies) {
        if (candyCount + extraCandies >= highest) {
            result.push(true);
        }
        else {
            result.push(false);
        }
    }

    return result;

};

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
const result = kidsWithCandies(candies, extraCandies);
console.log("result:", result);
