const getArrayFromLinkedList = (head) => {
    let tempHead = head;
    const arr = [];
    while (tempHead) {
        arr.push(tempHead.val);
        tempHead = tempHead.next;
    }
    return arr;
}

const getLinkedListFromArray = (array) => {

    let head = null;
    let tempNode = null;

    array.forEach((value, index) => {

        if (!head) {
            head = {};
            head['val'] = value;
            head['next'] = null;
            tempNode = head;
        }
        else {
            tempNode.next = {
                val: value,
                next: null
            }
            tempNode = tempNode.next;
        }

    });
    return head;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// Solution Function
var swapNodes = function (head, k) {


    // 1. Transform the linked list into an array
    const arrayOfTheLinkedList = getArrayFromLinkedList(head);
    console.log(arrayOfTheLinkedList);


    // 2. Swap the required elements 
    const start = Math.min(k - 1, arrayOfTheLinkedList.length - k);
    const end = Math.max(k - 1, arrayOfTheLinkedList.length - k);
    let tempVal = arrayOfTheLinkedList[start];
    arrayOfTheLinkedList[start] = arrayOfTheLinkedList[end];
    arrayOfTheLinkedList[end] = tempVal;

    // 3. Transform the swapped array into a linked list
    return getLinkedListFromArray(arrayOfTheLinkedList);
};


const head = getLinkedListFromArray([100, 90])
const k = 2;

// const head = getLinkedListFromArray([7, 9, 6, 6, 7, 8, 3, 0, 9, 5])
// const k = 5;

const result = swapNodes(head, k);
console.log("Result: ", result);