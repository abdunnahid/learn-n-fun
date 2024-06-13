/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {

    let i = 0;
    let j = 0;

    for (let indexT = i; indexT < t.length; indexT++) {

        let matchFound = false;

        for (let indexS = j; indexS < s.length; indexS++) {
            if (t[indexT] == s[indexS]) {
                i = indexT + 1;
                j = indexS + 1;
                matchFound = true;
                break;
            }
        }

        if (!matchFound) {
            return t.length - i;
        }

    }

    return 0;

};

// const s = 'coaching';
// const t = 'coding';

const s = 'asg';
const t = 'sdfg';
const result = appendCharacters(s, t);
console.log("result:", result);
