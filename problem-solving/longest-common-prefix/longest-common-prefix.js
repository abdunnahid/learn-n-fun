/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let prefix = '';

    let index = 0;

    while (true) {
        if (strs[0][index] === null || strs[0][index] === undefined) return prefix;

        const char = strs[0][index];
        for (const word of strs) {
            if (word[index] !== char) return prefix;
        }

        prefix = prefix + char;
        index++;
    }
};

const result = longestCommonPrefix(["flower", "flow", "flight"]);
console.log('Result: ', result);