/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {

    let secondHalfHead;

    let tempHead = head;

    // 1. Calculate length
    let length = 0
    while (tempHead) {
        length++;
        tempHead = tempHead.next;
    }

    // 2. divide the linkedList into half
    let count = 0;
    tempHead = head;
    while (tempHead) {

        if (count == length / 2) {
            secondHalfHead = tempHead;
            tempHead = null;
            break;
        }

        tempHead = tempHead.next;
        count++;
    }
    // 3. reverse the 2nd half
    let reversedSecondHalfHead = null;
    tempHead = secondHalfHead;
    while (tempHead) {
        const newHead = tempHead;
        tempHead = tempHead.next;
        newHead.next = reversedSecondHalfHead;
        reversedSecondHalfHead = newHead;
    }
    // 4. Calculate the pairs
    let result = 0;
    while (reversedSecondHalfHead) {
        result = Math.max(result, head.val + reversedSecondHalfHead.val);
        head = head.next;
        reversedSecondHalfHead = reversedSecondHalfHead.next;
    }

    return result;

};

// const input = [1, 2, 3, 4, 5, 6];
const input = [4, 2, 2, 3];

import { LinkedList, ListNode } from "../../study/linked-list/linked-list.js";
const linkedList = new LinkedList();
const head = linkedList.addRange(input);
const result = pairSum(head);
console.log("result: ", result)
