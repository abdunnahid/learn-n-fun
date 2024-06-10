/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function (n, k) {

    let index = 0;
    let passCount = 0;
    let passForward = true;
    while (passCount < k) {
        if (passForward) {
            index++;
            if (index == n - 1) {
                passForward = false;
            }
        }
        else {
            index--;
            if (index == 0) {
                passForward = true;
            }
        }

        passCount++;

        if (passCount == k) {
            return index;
        }
    }

};

const n = 5, k = 6
const result = numberOfChild(n, k);
console.log("result:", result);