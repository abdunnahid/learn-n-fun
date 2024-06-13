/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {

    const map = {};
    for (let i = 0; i < words.length; i++) {

        for (const c of words[i]) {

            if (c in map) {

                if (!map[c][i]) {
                    map[c][i] = 1;
                }
                else {
                    map[c][i]++
                }
            }
            else {
                map[c] = {};
                map[c][i] = 1;
            }
        }
    }

    const result = [];
    for (const key in map) {
        if (Object.keys(map[key]).length == words.length) {
            let minOccurence = 0;
            for (const i in map[key]) {
                if (!minOccurence) {
                    minOccurence = map[key][i];
                }
                else {
                    if (map[key][i] < minOccurence) {
                        minOccurence = map[key][i];
                    }
                }
            }
            for (let i = 0; i < minOccurence; i++) {
                result.push(key);
            }
        }
    }
    return result;

};

const words = ["bella","label","roller"];
const result = commonChars(words);
console.log("result:", result);
