/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {

    const players = new Array(n).fill().map((_, index) => index + 1);
    let index = 0;
    while (players.length > 1) {
        let nextPlayerToLeave = index + k - 1;
        if (nextPlayerToLeave >= players.length) {
            nextPlayerToLeave = nextPlayerToLeave % players.length;
        }
        players.splice(nextPlayerToLeave, 1);
        index = nextPlayerToLeave;
    }

    return players[0];

};

// [1, 2, 3, 4, 5]
// index = 1; remove = 2
// [1, 3, 4, 5]
// index = 2; remove = 4
// [1, 3, 5]
// len = 3 | index = 3; remove = 4
// [1, 3, 5]

const n = 5, k = 2;
// const n = 6, k = 5;
const result = findTheWinner(n, k);
console.log("result: ", result)
