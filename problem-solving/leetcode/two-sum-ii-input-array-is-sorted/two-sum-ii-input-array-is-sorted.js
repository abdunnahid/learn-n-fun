/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {

    for (let i = 0; i < numbers.length; i++) {

        const search = target - numbers[i];

        let left = 0;
        let right = numbers.length - 1;

        while (left <= right) {

            const mid = Math.floor((left + right) / 2);


            if (numbers[mid] > search) {
                right = mid - 1;
            }
            else if (numbers[mid] < search) {
                left = mid + 1;
            }
            else {
                if (mid === i) {
                    left = mid + 1;
                }
                else {
                    return [i + 1, mid + 1];
                }
            }
        }

    }

    return [];

};

const result = twoSum([-1, 0], -1);
// const result = twoSum([2, 3, 4], 6);
// const result = twoSum([2, 7, 11, 15], 9);
console.log('Result: ', result);