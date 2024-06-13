/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {

    if (!s && !p) {
        return false;
    }

    let sIndex = 0;
    let pIndex = 0;

    while (sIndex < s.length) {

        switch (p[pIndex]) {
            case '.':
                if (!s[sIndex]) {
                    return false;
                }
                sIndex++;
                pIndex++;
                break;

            case '*':
                if (p[pIndex - 1] !== '.' && s[sIndex] && s[sIndex] !== s[sIndex - 1]) {
                    return false;
                }
                sIndex++;
                break;

            default:
                if (s[sIndex] !== p[pIndex]) {
                    return false;
                }
                sIndex++;
                pIndex++;
                break;
        }
    }

    return true;

};


// const result = isMatch('abc', 'ab.*');
// const result = isMatch('ab', '.*');
const result = isMatch('aaa', '.aaa');
console.log("Result: ", result);