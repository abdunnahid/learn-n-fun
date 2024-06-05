/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {

    const arrReplace = (arr, values, startIdx, endIdx) => {
        [].splice(startIdx, endIdx - startIdx)

        let replaceIndex = startIdx;
        for (const value of values) {
            arr[replaceIndex] = value;
            replaceIndex++;
        }

        arr.splice(replaceIndex, (endIdx - replaceIndex) + 1);
        return replaceIndex;
    }

    let startIdx = 0;
    let endIdx = 0;

    while (endIdx < chars.length) {
        if (chars[endIdx] === chars[endIdx + 1]) {
            endIdx++;
            continue;
        }

        const char = chars[startIdx];
        const length = (endIdx - startIdx) + 1;
        const compressedGroup = char + (length > 1 ? length : '');

        const nextIndex = arrReplace(chars, compressedGroup.split(''), startIdx, endIdx);

        endIdx = nextIndex;
        startIdx = nextIndex;
    }

    return chars.length;

};

// const chars = ["a", "b", "b", "b", "c", "c", "c"];
// const chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
const chars = ["a","a","b","b","c","c","c"];
const result = compress(chars);
console.log("result:", result);
