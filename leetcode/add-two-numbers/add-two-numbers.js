
// Definition for singly - linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {


    const sumOfReversedLinkedList = (node) => {
        if (!node.next) return node.val.toString();
        return sumOfReversedLinkedList(node.next) + node.val.toString();
    }

    const l1Digits = BigInt(sumOfReversedLinkedList(l1));
    const l2Digits = BigInt(sumOfReversedLinkedList(l2));

    const sum = (l1Digits + l2Digits).toString();

    const result = new ListNode(sum[sum.length - 1]);
    let currentNode = result;

    for (let i = sum.length - 2; i >= 0; i--) {
        currentNode.next = new ListNode(sum[i]);
        currentNode = currentNode.next;
    }

    return result;

};

// 2 -> 4 -> 3

// const l1Array = [9, 9, 9, 9, 9, 9, 9];
// const l2Array = [9, 9, 9, 9];
// Output: [8,9,9,9,0,0,0,1]

// const l1Array = [2, 4, 3];
// const l2Array = [5, 6, 4];
// Output: [7,0,8]

const l1Array = [0];
const l2Array = [0];
// Output: [0]

// const l1Array = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
// const l2Array = [5, 6, 4];
// Expected: [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]

let l1 = new ListNode(l1Array.shift());
let currentNode = l1;
for (const value of l1Array) {
    currentNode.next = new ListNode(value);
    currentNode = currentNode.next;
}

let l2 = new ListNode(l2Array.shift());
currentNode = l2;
for (const value of l2Array) {
    currentNode.next = new ListNode(value);
    currentNode = currentNode.next;
}
const result = addTwoNumbers(l1, l2);

const printResult = (result) => {
    const arr = [];
    let currentNode = result;
    while (currentNode) {
        arr.push(currentNode.val);
        currentNode = currentNode.next;
    }
    return arr;
}
console.log("Result: ", printResult(result));
