/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {

    if (!names || names.length === 0) {
        return [];
    }

    const nameWithHeightObjects = [];

    for (let i = 0; i < names.length; i++) {
        nameWithHeightObjects.push({
            name: names[i],
            height: heights[i]
        });
    }

    nameWithHeightObjects.sort((a, b) => b.height - a.height);

    const result = [];

    for (const obj of nameWithHeightObjects) {
        result.push(obj.name);
    }

    return result;
};

const result = sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]);
console.log("Result: ", result);