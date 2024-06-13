/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

    let result = 0;

    const walls = new Map();

    let highestLeftWall = 0;
    let highestRightWall = 0;

    for (let i = 0; i < height.length; i++) {
        walls.set(i, { highestLeftWall })
        if (height[i] > highestLeftWall) {
            highestLeftWall = height[i];
        }
    }

    for (let i = height.length - 1; i >= 0; i--) {
        const item = walls.get(i);
        item.highestRightWall = highestRightWall;
        walls.set(i, item);
        if (height[i] > highestRightWall) {
            highestRightWall = height[i];
        }
    }

    for (let i = 0; i < height.length; i++) {
        const x = walls.get(i);
        const unitOfWaterCanTrap = Math.min(x.highestLeftWall, x.highestRightWall) - height[i];
        result = result + Math.max(unitOfWaterCanTrap, 0);
    }
    
    return result;
};

// const result = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
const result = trap([4,2,0,3,2,5]);
console.log("Result: ", result);