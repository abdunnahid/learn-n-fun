/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {

    if (changed.length % 2 !== 0) return [];

    changed.sort((a, b) => a - b);

    const map = {};
    const result = [];

    for (const num of changed) {
        if (num in map) {
            map[num] = map[num] + 1;
        }
        else {
            map[num] = 1;
        }
    }

    console.log("Map Initially: ", map);
    for (const num of changed) {
        if (num in map && map[num] >= 1) {

            if (map[num] === 1) {
                delete map[num];
            }
            else {
                map[num] = map[num] - 1;
            }

            if ((num * 2) in map) {
                if (map[(num * 2)] === 1) {
                    delete map[(num * 2)];
                }
                else {
                    map[(num * 2)] = map[(num * 2)] - 1;
                }
                result.push(num);
            }
            else if ((num / 2) in map) {
                if (map[(num / 2)] === 1) {
                    delete map[(num / 2)];
                }
                else {
                    map[(num / 2)] = map[(num / 2)] - 1;
                }
                result.push(num / 2);
            }
            else {
                if (num in map) {
                    map[num] = map[num] + 1;
                }
                else {
                    map[num] = 1;
                }
            }

        }

        console.log(`Map at ${num}: `, map);

    }

    console.log("Map Finally: ", map);
    if (Object.keys(map).length > 0) {
        return [];
    }
    return result;

};

const result = findOriginalArray([4, 8, 2, 16]);
console.log("Result: ", result);