/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {

    let distanceFromMain = 0;

    for (const log of logs) {
        switch (log) {
            case '../':

                if (distanceFromMain > 0) {
                    distanceFromMain--;
                }

                break;

            case './':

                break;

            default:
                distanceFromMain++;
                break;
        }
    }

    return distanceFromMain;

};

// const logs = ["d1/", "d2/", "../", "d21/", "./"];
// const logs = ["d1/", "d2/", "./", "d3/", "../", "d31/"];
const logs = ["d1/", "../", "../", "../"];
const result = minOperations(logs);
console.log("result: ", result)
