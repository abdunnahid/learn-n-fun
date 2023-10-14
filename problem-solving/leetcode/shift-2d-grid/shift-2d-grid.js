/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {

    for (let index = 0; index < k; index++) {
        grid.forEach((gridArr, gridArrIndex) => {
            const currentGridArrLastElem = gridArr.pop();

            let nextGridArr;
            if (gridArrIndex === grid.length - 1) {
                nextGridArr = grid[0];  
            }
            else {
                nextGridArr = grid[gridArrIndex+1];
            }
            nextGridArr.unshift(currentGridArrLastElem);
        });
    }

    return grid;
};

const result = shiftGrid(
    [
        [3, 8, 1, 9],
        [19, 7, 2, 5],
        [4, 6, 11, 10],
        [12, 0, 21, 13]
    ],
    4
);
console.log("Result: ", result);