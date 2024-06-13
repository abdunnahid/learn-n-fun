/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    let current = head;
    let count = 1;

    let lastNodeBeforeDelete = null;
    let nodeToDelete = head;

    while (current) {

        console.log("Coount: ", count);

        if (count > n) {
            lastNodeBeforeDelete = nodeToDelete;
            nodeToDelete = nodeToDelete.next;
        }

        count++;
        current = current.next;
    }

    if (lastNodeBeforeDelete) {
        lastNodeBeforeDelete.next = nodeToDelete.next;
    }
    else {
        head = head.next;
    }

    return head;
};


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function getArrayFromLinkedList(head) {

    const arr = [];

    if (!head) return arr;

    let current = head;

    while (current) {
        arr.push(current.val);
        current = current.next;
    }

    return arr;

}

function getLinkedListFromArray(arr) {
    const head = new ListNode(arr[0]);

    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

const head = getLinkedListFromArray([1, 2]);

const result = removeNthFromEnd(head, 2);

console.log("Result: ", getArrayFromLinkedList(result));