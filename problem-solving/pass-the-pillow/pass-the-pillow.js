/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {

    let div = Math.floor(time / (n - 1));
    let rem = time % (n - 1);

    const direction = div % 2 == 0 ? -1 : 1;
    
    if (direction === 1) {
        return n - rem;
    }
    else {
        return rem + 1;
    }
};

// [1, 2, 3, 4]
const n = 4, time = 5;
// const n = 3, time = 2;
// const n = 2, time = 1;
// const n = 4, time = 4;
// const n = 18, time = 38;
const result = passThePillow(n, time);
console.log("result: ", result);
