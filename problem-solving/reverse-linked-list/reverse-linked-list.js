/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

    let reversedHead = null;

    while (head) {
        const newHead = head;
        head = head.next;
        newHead.next = reversedHead;
        reversedHead = newHead;
    }

    return reversedHead;

};

// const input = [2, 1, 3, 5, 6, 4, 7];
const input = [1, 2, 3, 4, 5, 6, 7];

import { LinkedList, ListNode } from "../../study/linked-list/linked-list.js";
const linkedList = new LinkedList();
const head = linkedList.addRange(input);
const result = reverseList(head);
console.log("result: ", linkedList.toArray(result));
