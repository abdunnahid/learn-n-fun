/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {

    let result = 0;

    let currentAltitude = 0
    for (const altitude of gain) {
        currentAltitude += altitude;
        if (currentAltitude > result) {
            result = currentAltitude
        }
    }

    return result;

};

const gain = [-5, 1, 5, 0, -7];
const result = largestAltitude(gain);
console.log("🚀 ~ result:", result);
