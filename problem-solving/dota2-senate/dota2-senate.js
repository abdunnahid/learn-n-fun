/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {

    const queue = senate.split('');

    while (true) {

        const senator = queue.shift();

        let nextOppositeSenatorIndex = -1;
        for (let i = 0; i < queue.length; i++) {
            if (queue[i] != senator) {
                nextOppositeSenatorIndex = i;
                break;
            }
        }

        if (nextOppositeSenatorIndex != -1) {
            queue.splice(nextOppositeSenatorIndex, 1);
            queue.push(senator);
        }
        else {
            return senator === 'R' ? "Radiant" : 'Dire';
        }
    }

};

const senate = "RDD";
// const senate = "DRRDRDRDRDDRDRDR";
const result = predictPartyVictory(senate);
console.log("result: ", result)
