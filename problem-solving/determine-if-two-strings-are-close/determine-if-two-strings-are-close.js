/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {

    if (word1.length != word2.length) {
        return false;
    }

    const word1CharCountMap = {};
    const word2CharCountMap = {};

    for (const char of word1) {
        word1CharCountMap[char] = (word1CharCountMap[char] || 0) + 1;
    }

    for (const char of word2) {
        word2CharCountMap[char] = (word2CharCountMap[char] || 0) + 1;
        if (!(char in word1CharCountMap)) {
            return false;
        }
    }

    for (const char of word1) {
        if (!(char in word2CharCountMap)) {
            return false;
        }
    }

    const word1CharCountList = Object.values(word1CharCountMap).sort((a,b) => a - b);
    const word2CharCountList = Object.values(word2CharCountMap).sort((a,b) => a - b);

    for (let i = 0; i < word1CharCountList.length; i++) {
        if (word1CharCountList[i] != word2CharCountList[i]) {
            return false;
        }
    }

    return true;

};

const word1 = "abbzzca", word2 = "babzzcz";
const result = closeStrings(word1, word2);
console.log("🚀 ~ result:", result);
