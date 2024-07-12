/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {

    let score = 0;

    const removeBA = (s) => {

        let removedOcurences = 0;
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            const c = s[i];
            if (c == 'a' && stack[stack.length - 1] == 'b') {
                stack.pop();
                removedOcurences++;
            }
            else {
                stack.push(c);
            }
        }

        return { s: stack.join(''), count: removedOcurences }
    };
    
    const removeAB = (s) => {

        let removedOcurences = 0;
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            const c = s[i];
            if (c == 'b' && stack[stack.length - 1] == 'a') {
                stack.pop();
                removedOcurences++;
            }
            else {
                stack.push(c);
            }
        }

        return { s: stack.join(''), count: removedOcurences }
    };

    if (x >= y) {
        const res = removeAB(s);
        score = res.count * x;
        const res2 = removeBA(res.s);
        score = score + (res2.count * y);
    }
    else {
        const res = removeBA(s);
        score = res.count * y;
        const res2 = removeAB(res.s);
        score = score + (res2.count * x);
    }

    return score;
};

const s = "cdbcbbaaabab", x = 4, y = 5;
// const s = "aabbaaxybbaabb", x = 5, y = 4
const result = maximumGain(s, x, y);
console.log("result: ", result)
