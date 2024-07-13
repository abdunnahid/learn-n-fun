/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (positions, healths, directions) {

    const map = {};
    for (let i = 0; i < positions.length; i++) {
        map[positions[i]] = {
            position: positions[i],
            health: healths[i],
            direction: directions[i]
        }
    }

    const sortedPositions = Object.values(map).sort((a, b) => a - b);

    const stack = [];
    let index = 0;
    while (index < sortedPositions.length) {
        const currentRobot = sortedPositions[index];
        
        // at the very first
        if (stack.length == 0) {
            stack.push(currentRobot);
            index++;
            continue;
        }

        // robots are in the same direction, no collision
        const lastRobot = stack[stack.length - 1];
        if (!(lastRobot.direction == 'R' & currentRobot.direction == 'L')) {
            stack.push(currentRobot);
            index++;
            continue;
        }

        // collision
        if (lastRobot.health == currentRobot.health) {
            stack.pop();
            delete map[lastRobot.position];
            delete map[currentRobot.position];
            index++;
        }
        else if (lastRobot.health > currentRobot.health) {
            lastRobot.health--;
            delete map[currentRobot.position];
            index++;
        }
        else {
            stack.pop();
            delete map[lastRobot.position];
            currentRobot.health--;
        }
    }

    const result = [];
    for (const position of positions) {
        if (position in map) {
            result.push(map[position].health);
        }
    }

    return result;

};

// const positions = [11, 44, 16], healths = [1, 20, 17], directions = "RLR";
// const positions = [3, 47], healths = [46, 26], directions = "LR";
// const positions = [1, 2, 5, 6], healths = [10, 10, 11, 11], directions = "RLRL";
// const positions = [3, 5, 2, 6], healths = [10, 10, 15, 12], directions = "RLRL";
const positions = [3, 5, 2, 6, 7, 8], healths = [10, 10, 15, 12, 10, 15], directions = "RLRLRL";
const result = survivedRobotsHealths(positions, healths, directions);
console.log("result: ", result)
