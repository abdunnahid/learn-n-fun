class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Chars
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');

// ========================
//         a
//       /   \
//     b       c
//   /   \    /  \
// d      e  f     g
// ========================


// Numbers
const a = new Node(10);
const b = new Node(2);
const c = new Node(1);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
const g = new Node(7);

// ========================
//           1
//       /       \
//     2           3
//   /   \       /   \
//  4     5     6     7
// ========================


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;


export { a as rootNode };
