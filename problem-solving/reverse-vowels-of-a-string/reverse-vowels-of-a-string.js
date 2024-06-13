/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {

    const vowelsMap = {
        'a': '',
        'e': '',
        'i': '',
        'o': '',
        'u': ''
    }

    const vowels = [];

    for (const c of s) {
        if (c.toLowerCase() in vowelsMap) vowels.push(c);
    }

    let result = '';
    for (const c of s) {
        if (c.toLowerCase() in vowelsMap) {
            result += vowels.pop();
        }
        else {
            result += c;
        }

    }

    return result;
};

const s = "leetcode";
const result = reverseVowels(s);
console.log("result:", result);
