/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {

    const alphabetTable = {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
        j: false,
        k: false,
        l: false,
        m: false,
        n: false,
        o: false,
        p: false,
        q: false,
        r: false,
        s: false,
        t: false,
        u: false,
        v: false,
        w: false,
        x: false,
        y: false,
        z: false
    }

    for (const char of sentence) {
        alphabetTable[char] = true;
    }

    for (const char in alphabetTable) {
        if (alphabetTable[char] === false) {
            return false;
        }
    }

    return true;

};

const result = checkIfPangram("asdsaewwe");
console.log('Result: ', result);