/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {

    const maxPositiveInt = Math.pow(2, 31) - 1;
    const maxNegativeInt = -Math.pow(2, 31);

    let isNegative = false;

    s = s.trim();
    if (s[0] === '+' || s[0] === '-') {
        isNegative = s[0] === '-';
        s = s.slice(1);
    }

    const charToIntMap = {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '0': 0
    }
    let result = 0;

    for (const char of s) {
        if (!(char in charToIntMap)) break;
        const int = charToIntMap[char];

        // Range Check
        if (isNegative) {
            if (result > Math.floor(Math.abs(maxNegativeInt) / 10)) {
                return result = maxNegativeInt;
            }
            else if (result === Math.floor(Math.abs(maxNegativeInt) / 10) && int > Math.abs(maxNegativeInt) % 10) {
                return result = maxNegativeInt;
            }
        }
        else {
            if (result > Math.floor(maxPositiveInt / 10)) {
                return result = maxPositiveInt;
            }
            else if (result === Math.floor(maxPositiveInt / 10) && int > maxPositiveInt % 10) {
                return result = maxPositiveInt;
            }
        }

        result = result * 10 + int;
    }

    return isNegative ? -result : result;

};

const result = myAtoi('-0');
// const result = myAtoi(' -123 sdsads');
console.log("Result: ", result);