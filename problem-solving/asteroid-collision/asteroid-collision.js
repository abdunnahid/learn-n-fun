/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {

    const stack = [];


    const shouldCollide = (num1, num2) => {
        if (num1 > 0 && num2 < 0) {
            return true;
        }

        return false;
    }

    for (let asteroid of asteroids) {

        if (stack.length === 0) {
            stack.push(asteroid);
            continue;
        }

        while (true) {
            if (stack.length === 0) {
                stack.push(asteroid);
                break;
            }
            const lastAsteroid = stack.pop();
            const collides = shouldCollide(lastAsteroid, asteroid);

            if (!collides) {
                stack.push(lastAsteroid);
                stack.push(asteroid);
                break;
            }

            if (Math.abs(lastAsteroid) > Math.abs(asteroid)) {
                asteroid = lastAsteroid;
            }
            else if (Math.abs(lastAsteroid) < Math.abs(asteroid)) {
                asteroid = asteroid;
            }
            else if (Math.abs(lastAsteroid) == Math.abs(asteroid)) {
                break;
            }
        }
    }

    return stack;

};

const asteroids = [5, 10, -5];
// const asteroids = [8, -8];
// const asteroids = [10, 2, -5];
// const asteroids = [-2, -1, 1, 2]
const result = asteroidCollision(asteroids);
console.log("🚀 ~ result:", result);
