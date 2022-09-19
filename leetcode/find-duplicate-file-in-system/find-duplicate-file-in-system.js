/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {

    if (!paths || paths.length === 0) return [];

    const result = [];
    const fileMap = {};

    for (const path of paths) {
        const files = path.split(" ");
        const directory = files.shift();

        for (const file of files) {
            const splitted = file.split("(");
            const fileName = splitted[0];
            const fileContent = splitted[1].replace(")", '');

            if (!(fileContent in fileMap)) {
                fileMap[fileContent] = [];
            }

            fileMap[fileContent].push(`${directory}/${fileName}`);
        }
    }

    for (const key in fileMap) {
        if (fileMap[key].length > 1) {
            result.push(fileMap[key]);
        }
    }

    return result;
};

const result = findDuplicate(null);
console.log("Result: ", result);