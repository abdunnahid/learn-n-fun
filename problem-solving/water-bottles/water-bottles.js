/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {

    let drank = numBottles;

    while (numBottles >= numExchange) {
        const notExchangable = numBottles % numExchange;
        const exchanged = Math.floor(numBottles / numExchange);
        numBottles = exchanged + notExchangable;
        drank += exchanged;
    }

    return drank;

};

// const numBottles = 15, numExchange = 4;
// const numBottles = 9, numExchange = 3;
const numBottles = 20, numExchange = 2;
const result = numWaterBottles(numBottles, numExchange);
console.log("result: ", result);

