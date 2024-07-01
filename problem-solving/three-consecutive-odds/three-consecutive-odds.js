/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {

    let count = 0;

    for (const num of arr) {
        if (num % 2 == 0) {
            count = 0;
            continue;
        }

        count++;
        if (count == 3) {
            return true;
        }
    }

    return false;

};

const arr = [1, 2, 34, 3, 4, 5, 7, 23, 12];
const result = threeConsecutiveOdds(arr);
console.log("🚀 ~ result:", result)
