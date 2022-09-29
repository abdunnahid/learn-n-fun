/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = [];

    for (let i = 0; i < s.length; i++) {

        const lastBracket = stack[stack.length - 1];

        if (s[i] in map && map[s[i]] === lastBracket) {
            stack.pop();
        }
        else {
            stack.push(s[i]);
        }

    }


    return stack.length === 0;

};

const result = isValid("()[]{{}");
console.log("Result: ", result);