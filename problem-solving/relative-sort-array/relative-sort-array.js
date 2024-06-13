/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {

    const map = {};
    for (const num of arr1) {
        map[num] = (map[num] || 0) + 1;
    }
    // console.log(JSON.stringify(map, null, 2));

    const result = [];
    for (const num of arr2) {
        if (num in map) {
            for (let i = 0; i < map[num]; i++) {
                result.push(num);
            }
            delete map[num];
        }
    }

    const sortedLeftOverNumbers = Object.keys(map).sort((a, b) => a - b);

    for (const num of sortedLeftOverNumbers) {
        if (num in map) {
            for (let i = 0; i < map[num]; i++) {
                result.push(num);
            }
            delete map[num];
        }
    }

    // console.log("relativeSortArray ~ result:", result);
    // console.log(JSON.stringify(map, null, 2));

    return result;
};

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6];
const result = relativeSortArray(arr1, arr2);
console.log("result:", result);
