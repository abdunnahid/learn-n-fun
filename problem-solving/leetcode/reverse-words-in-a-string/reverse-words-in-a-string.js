/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

    const arr = s.split(' ');

    let result = '';

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] != '') {
            if (result == '') {
                result = arr[i];
            }
            else {
                result = result + ' ' + arr[i];
            }
        }
    }

    return result;
};

const s = "a good   example";
const result = reverseWords(s);
console.log("result:", result);
