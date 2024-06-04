/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {

    const hashMap = {};
    let count = 0;
    for (const c of s) {

        if (c in hashMap) {
            count = count + 2;
            delete hashMap[c];
        }
        else {
            hashMap[c] = '';
        }
    }

    if (Object.keys(hashMap).length > 0) {
        return count + 1;
    }

    return count;

};

const s = "aaabb";
const result = longestPalindrome(s);
console.log("result:", result);
