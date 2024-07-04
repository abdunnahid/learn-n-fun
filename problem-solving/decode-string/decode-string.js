/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

    const stack = [];

    for (const char of s) {
        console.log("stack: ", stack)
        if (char != ']') {
            stack.push(char);
            continue;
        }

        let encodedString = '';
        let findChar = stack.pop();
        while (findChar != '[') {
            encodedString = findChar + encodedString;
            findChar = stack.pop();
        }

        let repeatCount = '';
        const isNumber = (char) => {
            if (char >= '0' && char <= '9') {
                return true;
            }
        }

        while (true) {
            if (isNumber(stack[stack.length - 1])) {
                repeatCount = stack.pop() + repeatCount;
            }
            else {
                break;
            }
        }

        let decodedString = '';
        for (let i = 0; i < parseInt(repeatCount); i++) {
            decodedString = decodedString + encodedString;
        }

        stack.push(...decodedString);
    }

    return stack.join('');

};

// const s = "3[a2[c]]";
// const s = "2[abc]3[cd]ef";
const s = "200[a]";
const result = decodeString(s);
console.log("result: ", result);
