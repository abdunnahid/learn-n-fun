/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {

    const stack = [s[0]];

    for (let i = 1; i < s.length; i++) {
        const lastElem = stack[stack.length - 1];

        if (lastElem === s[i]) {
            stack.pop();
        }
        else {
            stack.push(s[i]);
        }
    }

    return stack.join('');

};