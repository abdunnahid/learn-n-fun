/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function (rewardValues) {

    let total = 0;
    rewardValues = rewardValues.sort((a, b) => a - b);

    for (let i = 0; i < rewardValues.length; i++) {
        let tempTotal;
        if (rewardValues[i] > total) {
            tempTotal = total + rewardValues[i];
        }

        if (rewardValues[i + 1] > tempTotal) {
            total = tempTotal;
        }

        if (i == rewardValues.length - 1) {
            total = tempTotal;
        }
    }
    return total;
};

const rewardValues = [1, 5, 4];
const result = maxTotalReward(rewardValues);
console.log("result:", result);
