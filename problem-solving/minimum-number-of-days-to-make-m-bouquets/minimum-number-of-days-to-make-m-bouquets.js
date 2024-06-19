/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {

    if (bloomDay.length < (m * k)) {
        return -1;
    }

    const isPossible = (bloomDay, requiredBouquets, requiredFlower, day) => {
        let bouquetCount = 0;
        let adjacentFlowerCount = 0;

        for (const bloom of bloomDay) {
            if (bloom > day) { // Flower not bloomed
                adjacentFlowerCount = 0;
                continue;
            }

            adjacentFlowerCount++;

            if (adjacentFlowerCount % requiredFlower == 0) { // a bouquets is ready
                adjacentFlowerCount = 0;
                bouquetCount++;
            }

            if (bouquetCount == requiredBouquets) {
                return true;
            }
        }

        return false;
    }

    let start = Math.min(...bloomDay);
    let end = Math.max(...bloomDay);

    while (start < end) {
        const mid = start + Math.floor((end - start) / 2);

        if (isPossible(bloomDay, m, k, mid)) {
            end = mid;
        }
        else {
            start = mid + 1;
        }
    }

    return start;
};

// const bloomDay = [7, 7, 7, 7, 12, 7, 7], m = 2, k = 3;
// const bloomDay = [1, 10, 3, 10, 2], m = 3, k = 2;
const bloomDay = [1, 10, 3, 10, 2], m = 3, k = 1;
const result = minDays(bloomDay, m, k);
console.log("🚀 ~ result:", result)


// bloomDay = [1,10,3,10,2], m = 3, k = 2
// Init:
// start: 1
// end: 10

// Day: start:1 + floor( (end:10 - start:1) / 2 ) = 5
// Possible: true
// end: 9
// start: 7

// Day: start:7 + floor( (end:9 - start:7) / 2 ) = 8
// Possible: true
// end: 8
// start: 7

// Day: start:7 + floor( (end:8 - start:7) / 2 ) = 7
// Possible: true
// end: 7
// start: 7