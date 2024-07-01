/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {

    let result = 0;

    const map = {};
    for (const arr of grid) {
        const key = arr.join('-');
        map[key] = (map[key] || 0) + 1;
    }

    for (let i = 0; i < grid[0].length; i++) {

        let column = [];
        for (const arr of grid) {
            column.push(arr[i]);
        }
        const key = column.join('-');

        if (key in map) {
            result = result + map[key];
        }

    }

    return result;

};

const grid = [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]];
// const grid = [[2, 1, 2, 2], [4, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]];
const result = equalPairs(grid);
console.log("result: ", result);
