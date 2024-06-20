/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {

    const isFeasibleToPlaceAllTheBalls = (arr, m, distance) => {
        let count = 1;
        let lastPlacedIndex = 0;
        for (let i = 1; i < arr.length; i++) {

            if (arr[i] >= arr[lastPlacedIndex] + distance) {
                count++;
                lastPlacedIndex = i;
            }

            if (count >= m) {
                return true;
            }
        }

        return false;
    }

    position.sort((a, b) => a - b);

    let start = 1;
    // let end = position[position.length - 1] - 1;
    let end = Math.floor(position[position.length - 1] - position[0]) / (m - 1); // Optimizing initial search space

    let result = 1;
    while (start <= end) {

        const mid = start + Math.floor((end - start) / 2);

        if (isFeasibleToPlaceAllTheBalls(position, m, mid)) {
            start = mid + 1;
            result = mid;
        }
        else {
            end = mid - 1;
        }
    }

    return result;

};

const position = [1, 2, 3, 7, 4], m = 3;
const result = maxDistance(position, m);
console.log("🚀 ~ result:", result);
