/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {

    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    let totalMovesRequired = 0;

    for (let i = 0; i < students.length; i++) {
        totalMovesRequired = totalMovesRequired + Math.abs(seats[i] - students[i]);
    }

    return totalMovesRequired;
};

const seats = [2,2,6,6], students = [1,3,2,6]
const result = minMovesToSeat(seats, students);
console.log("result:", result);
