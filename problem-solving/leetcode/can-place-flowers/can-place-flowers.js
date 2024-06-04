/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {

    let possiblePlots = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
            possiblePlots++;
            flowerbed[i] = 1;
        }
        if (possiblePlots >= n) return true;
    }

    return false;
};

const flowerbed = [0,0,1,0,1];
const n = 1;

const result = canPlaceFlowers(flowerbed, n);
console.log("result:", result);
