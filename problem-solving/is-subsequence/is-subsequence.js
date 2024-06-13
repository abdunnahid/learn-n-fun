/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

    let sIndex = 0;
    let tIndex = 0;

    let foundSubsequeceCount = 0;
    while (sIndex < s.length) {
        let found = false;
        while (tIndex < t.length) {

            if (s[sIndex] == t[tIndex]) {
                sIndex++;
                tIndex++;
                foundSubsequeceCount++;
                found = true;
                break;
            }
            else {
                tIndex++;
            }
        }
        if (!found) return false;
    }

    if (foundSubsequeceCount == s.length) {
        return true;
    }

    return false;

};

const s = "axc";
const t = "ahbgdc";
const result = isSubsequence(s, t);
console.log("result:", result);
