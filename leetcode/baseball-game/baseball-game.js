/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {

    const result = [];

    for (const operation of ops) {

        console.log(typeof operation);

        switch (operation) {
            case "+":

                const sumOfPreviousTwoScores = result[result.length - 1] + result[result.length - 2];
                result.push(sumOfPreviousTwoScores);

                break;

            case "D":
                const doubleOfPreviousScore = result[result.length - 1] * 2;
                result.push(doubleOfPreviousScore);
                break;

            case "C":
                result.pop();
                break;

            default:
                result.push(parseInt(operation));
                break;
        }

    }

    return result.reduce((a, b) => a + b);

};

const result = calPoints(["5", "2", "C", "D", "+"]);
console.log("Result: ", result);