/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var valueAfterKSeconds = function (n, k) {

    const resultArr = Array(n).fill(1);
    const mod = 10**9 + 7;

    for (let j = 0; j < k; j++) {
        for (let i = 1; i < resultArr.length; i++) {
            resultArr[i] = (resultArr[i - 1] + resultArr[i]) % mod;
        }
    }

    return resultArr[resultArr.length - 1];
};

const n = 36, k = 39;
const result = valueAfterKSeconds(n, k);
console.log("result:", result);


// Output: 842925682
// Exprected: 842674498