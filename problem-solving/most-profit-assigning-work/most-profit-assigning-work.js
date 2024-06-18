/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {

    const difficultyProfitArr = [];

    for (let i = 0; i < difficulty.length; i++) { // O(n)
        difficultyProfitArr.push({
            difficulty: difficulty[i],
            profit: profit[i]
        });
    }

    difficultyProfitArr.sort((a, b) => (a.difficulty - b.difficulty)); // O(nlog(n))

    let totalProfit = 0;
    for (const workerCapacity of worker) {

        let start = 0;
        let end = difficultyProfitArr.length - 1;

        let highestIndexOfDifficulty = -1;
        while (start <= end) { // O(log(n))
            let mid = Math.abs(Math.floor((start + end) / 2));
            if (difficultyProfitArr[mid].difficulty <= workerCapacity) {
                highestIndexOfDifficulty = mid;
                start = mid + 1;
            }
            else if (difficultyProfitArr[mid].difficulty > workerCapacity) {
                end = mid - 1;
            }
        }

        let maxProfit = 0;
        for (let i = 0; i <= highestIndexOfDifficulty; i++) { // O(n)
            maxProfit = Math.max(maxProfit, difficultyProfitArr[i].profit);
        }

        totalProfit += maxProfit;
    }

    return totalProfit;
};

// const difficulty = [2, 4, 6, 8, 10], profit = [10, 20, 30, 40, 50], worker = [4, 5, 6, 7];
// const difficulty = [85, 47, 57], profit = [24, 66, 99], worker = [40, 25, 25];
// const difficulty = [1, 85, 47, 57], profit = [1, 24, 66, 99], worker = [40, 25, 25];
const difficulty = [68, 35, 52, 47, 86], profit = [67, 17, 1, 81, 3], worker = [92, 10, 85, 84, 82];
const result = maxProfitAssignment(difficulty, profit, worker);
console.log("🚀 ~ result:", result);
