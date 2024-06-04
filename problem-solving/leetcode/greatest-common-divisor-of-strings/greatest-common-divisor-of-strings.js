/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {

    let gcd = str1.length < str2.length ? str1 : str2;

    const isDivisible = (str, divisor) => {
        if (str.length % divisor.length != 0) return false;

        let index = 0;
        while (index < str.length) {
            for (const c of divisor) {
                if (c != str[index]) return false;
                index++;
            }
        }

        return true;
    }

    while (gcd.length > 0) {
        const result = isDivisible(str1, gcd) && isDivisible(str2, gcd);
        if (result) return gcd;
        gcd = gcd.substring(0, gcd.length - 1);
    }

    return '';

};

const str1 = "ABCDEF";
const str2 = "ABC";

const result = gcdOfStrings(str1, str2);
console.log("result:", result);
