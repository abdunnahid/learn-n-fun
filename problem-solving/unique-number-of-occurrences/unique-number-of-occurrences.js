/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {

    const occurencesMap = {};

    for (const num of arr) {
        occurencesMap[num] = (occurencesMap[num] || 0) + 1;
    }

    const checkMap = {};
    for (const occurences of Object.values(occurencesMap)) {
        if (occurences in checkMap) {
            return false;
        }

        checkMap[occurences] = null;
    }

    return true;
};

const arr = [1, 2, 2, 1, 1, 3];
const result = uniqueOccurrences(arr);
console.log("🚀 ~ result:", result)
