/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {

    const reverse = (str) => {
        if (!str) return '';

        let reversedString = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversedString = reversedString + str[i];
        }
        return reversedString;
    }

    const isPalindrome = (str) => {
        return str === reverse(str);
    }

    const map = new Map();
    for (let i = 0; i < words.length; i++) {
        map.set(words[i], i);
    }
    const result = [];

    for (let i = 0; i < words.length; i++) {

        const word = words[i];

        for (let j = 0; j <= word.length; j++) {

            const leftSubString = word.substring(0, j);

            const rightSubString = word.substring(j);

            if (isPalindrome(leftSubString)) {
                const rightSubStringReversed = reverse(rightSubString);
                if (map.has(rightSubStringReversed) && map.get(rightSubStringReversed) !== i) {
                    result.push([map.get(rightSubStringReversed), i])
                }
            }

            if (isPalindrome(rightSubString)) {
                const leftSubStringReversed = reverse(leftSubString);
                if (map.has(leftSubStringReversed) && map.get(leftSubStringReversed) !== i && rightSubString.length !== 0) {
                    result.push([i, map.get(leftSubStringReversed)]);
                }
            }

        }
    }

    return result;

};

// const result = palindromePairs([""]);
const result = palindromePairs(["bat", "tab", "cat"]);
// const result = palindromePairs(["a", ""]);
// const result = palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]);
// const result = palindromePairs(["a", ""]);
console.log("Result: ", result);

// Note: Could not pass all the test cases! Lime Limit Exceeded!
