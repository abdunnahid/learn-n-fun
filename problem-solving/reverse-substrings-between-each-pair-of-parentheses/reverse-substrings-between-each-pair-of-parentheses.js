/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {

    const stack = [];

    for (const c of s) {

        if (c != ')') {
            stack.push(c);
            continue;
        }

        let subString = [];
        while (true) {
            const x = stack.pop();
            if (x == '(') { break; }
            subString.push(x);
        }

        stack.push(...subString);

    }

    return stack.join('');

};

// const s = "(ed(et(oc))el)";
// const s = "(u(love)i)";
const s = "()";
const result = reverseParentheses(s);
console.log("result: ", result)
