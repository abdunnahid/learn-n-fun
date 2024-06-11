/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {

    const vowels = {
        a: '',
        e: '',
        i: '',
        o: '',
        u: ''
    }

    // Cache prefixSum of vowels
    const prefixSum = [];
    for (const char of s) {
        const isVowel = char in vowels;
        let prefixSumTillLastChar = (prefixSum[prefixSum.length - 1] || 0);
        if (isVowel) {
            prefixSumTillLastChar++;
        }
        prefixSum.push(prefixSumTillLastChar);
    }

    // Slide a window of size k to s and find the substring with max vowel count
    let result = null;
    let start = 0;
    let end = k - 1;
    while (end < s.length) {

        const substringSum = prefixSum[end] - (prefixSum[start - 1] || 0);

        if (result == null) {
            result = substringSum;
        }
        else {
            result = Math.max(result, substringSum);
        }

        start++;
        end++;
    }

    return result;

};

// const s = "abciiidef", k = 3;
// const s = "aeiou", k = 2;
// const s = "leetcode", k = 3;
// const s = "a", k = 2;
const result = maxVowels(s, k);
console.log("result:", result);
