/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    const str = x.toString();

    let left = 0;
    let right = str.length - 1;

    while (str[left] === str[right]) {
        if (left >= right) {
            return true;
        }
        left++;
        right--;
    }

    return false;

};

const result = isPalindrome(11);
console.log("Result: ", result);