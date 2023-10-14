/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    let reversedInteger = 0;
    const isInputNegative = x < 0;

    const maxPositiveInt = Math.pow(2, 31) - 1;
    const maxNegativeInt = Math.pow(2, 31);

    x = Math.abs(x);
    while (x !== 0) {

        // get the last digit of an integer
        const lastDigit = x % 10;

        // get the integer removing last digit
        const integerRemovingLastDigit = Math.floor(x / 10);

        if (isInputNegative) {
            if (reversedInteger > Math.floor(maxNegativeInt / 10)) {
                return 0;
            }
            else if (reversedInteger === Math.floor(maxNegativeInt / 10) && lastDigit > maxNegativeInt % 10) {
                return 0;
            }
        }
        else {
            if (reversedInteger > Math.floor(maxPositiveInt / 10)) {
                return 0;
            }
            else if (reversedInteger === Math.floor(maxPositiveInt / 10) && lastDigit > maxPositiveInt % 10) {
                return 0;
            }
        }

        // add last digit on reversed integer
        reversedInteger = reversedInteger * 10 + lastDigit;

        // update original integer
        x = integerRemovingLastDigit;
    }

    return isInputNegative ? -reversedInteger : reversedInteger;

};

const result = reverse(900000);
console.log("Result=====> ", result);