/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {

    const stack = [];

    for (const char of s) {
        if (char !== '*') {
            stack.push(char);
            continue;
        }

        stack.pop();
    }

    return stack.join('');

};

// const s = "leet**cod*e";
const s = "erase*****";
const result = removeStars(s);
console.log("🚀 ~ result:", result)
