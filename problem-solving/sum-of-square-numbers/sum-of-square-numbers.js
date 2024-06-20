/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {

    const findB = (value) => {

        let start = 0;
        let end = Math.ceil(Math.sqrt(value));

        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2);
            if (mid * mid < value) {
                start = mid + 1;
            }
            else if (mid * mid > value) {
                end = mid - 1;
            }
            else {
                return mid;
            }
        }

        return -1;

    }

    for (let a = 0; a <= Math.ceil(Math.sqrt(c)); a++) {

        const b = findB(c - (a * a));

        if (b != -1) {
            return true;
        }
    }

    return false;

};

const c = 999999999;
const result = judgeSquareSum(c);
console.log("🚀 ~ result:", result)
