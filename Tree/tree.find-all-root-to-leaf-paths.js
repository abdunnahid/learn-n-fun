const paths = [];

const findPaths = (node, arr, index) => {
    
    if (node == null) return;

    arr[index] = node.val;

    if (node.left == null && node.right == null) {
        const tempPath = [];
        for (let i = 0; i <= index; i++) {
            tempPath.push(arr[i]);
        }
        paths.push(tempPath);
    }
    findPaths(node.left, arr, index + 1);
    findPaths(node.right, arr, index + 1);
}

const arr = [];
findPaths(root, arr, 0);
console.log(paths);