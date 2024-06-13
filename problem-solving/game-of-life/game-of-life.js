/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {

    // Top
    const getTop = (board, currentArrIndex, currentElemIndex) => {
        if (currentArrIndex === 0) {
            return null;
        }
        return board[currentArrIndex - 1][currentElemIndex];
    }
    const getTopLeft = (board, currentArrIndex, currentElemIndex) => {
        if (currentArrIndex === 0 || currentElemIndex === 0) {
            return null;
        }
        return board[currentArrIndex - 1][currentElemIndex - 1];
    }
    const getTopRight = (board, currentArrIndex, currentElemIndex) => {
        if (currentArrIndex === 0 || currentElemIndex === board[currentArrIndex].length - 1) {
            return null;
        }
        return board[currentArrIndex - 1][currentElemIndex + 1];
    }

    // Middle
    const getLeft = (board, currentArrIndex, currentElemIndex) => {
        if (currentElemIndex === 0) {
            return null;
        }
        return board[currentArrIndex][currentElemIndex - 1];
    }
    const getRight = (board, currentArrIndex, currentElemIndex) => {
        if (currentElemIndex === board[currentArrIndex].length - 1) {
            return null;
        }
        return board[currentArrIndex][currentElemIndex + 1];
    }

    // Bottom
    const getBottom = (board, currentArrIndex, currentElemIndex) => {
        if (currentArrIndex === board.length - 1) {
            return null;
        }
        return board[currentArrIndex + 1][currentElemIndex];
    }
    const getBottomLeft = (board, currentArrIndex, currentElemIndex) => {
        if (currentArrIndex === board.length - 1 || currentElemIndex === 0) {
            return null;
        }
        return board[currentArrIndex + 1][currentElemIndex - 1];
    }
    const getBottomRight = (board, currentArrIndex, currentElemIndex) => {
        if (currentArrIndex === board.length - 1 || currentElemIndex === board[currentArrIndex].length - 1) {
            return null;
        }
        return board[currentArrIndex + 1][currentElemIndex + 1];
    }

    const getNextGenState = (currentState, neighbors) => {
        let liveNeighbors = 0;

        for (const neighbor of neighbors) {
            if (neighbor === 1) {
                liveNeighbors++
            }
        }

        // Rule 1: Any live cell with fewer than two live neighbors dies as if caused by under-population.
        if (liveNeighbors < 2) { return 0; }

        // Rule 2: Any live cell with two or three live neighbors lives on to the next generation.
        if (currentState === 1 && (liveNeighbors === 2 || liveNeighbors === 3)) { return 1; }

        // Rule 3: Any live cell with more than three live neighbors dies, as if by over-population.
        if (liveNeighbors > 3) { return 0; }

        // Rule 4: Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
        if (currentState === 0 && liveNeighbors === 3) { return 1; }

        return currentState;

    }

    const nextBoard = [];
    for (const x of board) {
        nextBoard.push([]);
        for (const iterator of board[0]) {
            nextBoard[nextBoard.length-1].push(null);
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {

            const neighbors = [
                getTopLeft(board, i, j),
                getTop(board, i, j),
                getTopRight(board, i, j),
                getLeft(board, i, j),
                getRight(board, i, j),
                getBottomLeft(board, i, j),
                getBottom(board, i, j),
                getBottomRight(board, i, j),
            ];

            nextBoard[i][j] = getNextGenState(board[i][j], neighbors);

        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] = nextBoard[i][j];
        }
    }

    board = nextBoard;

};

let board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
];
gameOfLife(board);
console.log("Result: ", board);