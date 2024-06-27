/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {

    const map = {};

    for (const node of edges[0]) {
        map[node] = '';
    }

    for (const node of edges[1]) {
        if (node in map) {
            return node;
        }
    }

};

const edges = [[1,2],[5,1],[1,3],[1,4]]
const result = findCenter(edges);
console.log("🚀 ~ result:", result)
