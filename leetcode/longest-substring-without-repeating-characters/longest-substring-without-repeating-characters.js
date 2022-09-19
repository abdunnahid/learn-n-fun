/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let highestSubStrLen = 0;

    for (let i = 0; i < s.length; i++) {

        const map = new Map();
        let subStr = '';

        for (let j = i; j < s.length; j++) {

            if (map.has(s[j])) {
                break;
            }

            subStr = subStr + s[j];
            map.set(s[j], '');
        }

        if (subStr.length > highestSubStrLen) {
            highestSubStrLen = subStr.length;
        }

    }

    return highestSubStrLen;

};

const result = lengthOfLongestSubstring('');
// const result = lengthOfLongestSubstring('au');
// const result = lengthOfLongestSubstring('abcabcbb');
console.log("Result: ", result);