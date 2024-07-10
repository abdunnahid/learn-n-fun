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
var deleteMiddle = function (head) {

    let length = 0;
    let tempHead = head;
    while (tempHead) {
        length++;
        tempHead = tempHead.next;
    }
    if (length == 1) {
        head = head.next;
        return head;
    }
    const middleNode = Math.floor(length / 2);

    tempHead = head;
    let count = 0;

    let nodeBeforeMiddle;

    while (tempHead) {

        if (count == middleNode - 1) {
            nodeBeforeMiddle = tempHead;
        }
        else if(count == middleNode) {
            nodeBeforeMiddle.next = tempHead.next;
            tempHead = nodeBeforeMiddle.next;
        }

        count++;
        tempHead = tempHead?.next;

    }

    return head;
};

// const input = [1, 3, 4, 7, 1, 2, 6];
// const input = [1, 2, 3, 4];
// const input = [2, 1];
const input = [2];

import { LinkedList } from "../../study/linked-list/linked-list.js";
const linkedList = new LinkedList();
const head = linkedList.addRange(input);
const result = deleteMiddle(head);
