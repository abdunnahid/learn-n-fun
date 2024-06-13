/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {

    const stack = [];

    for (const c of s) {
        const top = stack.pop();

        if (!top) {
            stack.push(c);
            continue;
        }

        if (c === c.toLowerCase()) {
            if (top === c.toUpperCase()) {
                continue;
            }
        }
        else {
            if (top === c.toLowerCase()) {
                continue;
            }
        }
        stack.push(top);
        stack.push(c);
    }

    return stack.join("");
};

const result = makeGood("abBAcC");
console.log(result);