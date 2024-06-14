/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
    nums.sort((a, b) => a - b)
    let count = 0;
    
    if (nums.length < 2) return 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            const nextNum = nums[i - 1] + 1
            count += nextNum - nums[i]
            nums[i] = nextNum
        }
    }
    return count
};

var minIncrementForUniqueWrongAnswer = function (nums) {

    nums.sort((a, b) => a - b);

    const map = {};
    for (const num of nums) {
        if (!(num in map)) {
            map[num] = {
                count: 1,
                marked: false
            };
        }
        else {
            map[num].count++;
        }
    }

    let moveCount = 0;

    for (const num of nums) {
        console.log("num: ", num)

        if (!map[num].marked) {
            map[num].marked = true;
            map[num].count--;
            console.log('\n');
            continue;
        }

        let nextNumber = (num + map[num].count) - 1;

        while (true) {
            // console.log("nextNumber: ", nextNumber)

            if (!(nextNumber in map)) {
                map[nextNumber] = {
                    count: 1,
                    marked: true
                };
                moveCount = moveCount + (nextNumber - num);
                // console.log("moveCount: ", moveCount)
                break;
            }

            nextNumber = nextNumber + map[nextNumber].count;

        }
    }

    return moveCount;

};

const nums = [3, 2, 1, 2, 1, 7, 7];
// const nums = [1, 2, 2];
// const nums = [0, 0, 0];
const result = minIncrementForUnique(nums);
console.log("🚀 ~ result:", result);
