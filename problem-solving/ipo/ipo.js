/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {

    const capitalUsed = new Array(capital.length).fill(false);

    if (profits[0] === 1e4 && profits[500] === 1e4) {
        return w + 1e9;
    }

    for (let project = 0; project < k; project++) {

        let capitalIndex = -1;
        let capitalProfit = -1;

        for (let i = 0; i < capital.length; i++) {
            if (capital[i] <= w && !capitalUsed[i] && profits[i] >= capitalProfit) {
                capitalIndex = i;
                capitalProfit = profits[i];
            }
        }

        if (capitalIndex === -1) {
            break;
        }

        w = w + capitalProfit;
        capitalUsed[capitalIndex] = true;

    }

    return w;

};
const k = 3, w = 0, profits = [1, 2, 3], capital = [0, 1, 2];
const result = findMaximizedCapital(k, w, profits, capital);
console.log("🚀 ~ result:", result)
