/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function (nums, multipliers) {
    console.log(nums);
    console.log(multipliers);

    const greedy = (nums, multipliers) => {
        let result = 0;

        for (const multiplier of multipliers) {
            if (nums[0] * multiplier > nums[nums.length - 1] * multiplier) {
                result = result + nums.shift() * multiplier;
            }
            else if (nums[0] * multiplier < nums[nums.length - 1] * multiplier) {
                result = result + nums.pop() * multiplier;
            }
            else {
                if (nums[0] === nums[nums.length - 1]) {
                    result = result + nums.pop() * multiplier;
                }
                else if (nums[0] > nums[nums.length - 1]) {
                    result = result + nums.pop() * multiplier;
                }
                else {
                    result = result + nums.shift() * multiplier;
                    console.log('ddddddddddd');
                }
            }
            console.log("Nums: ", nums);
        }


        return result;
    }

    return greedy(nums, multipliers);

};

// const result = maximumScore([5, 10, -1], [0, -3]);
const result = maximumScore([-5, -3, -3, -2, 7, 1], [-10, -5, 3, 4, 6]);
console.log('Result: ', result);

// Note: This solution did not passed all the test cases on leetcode