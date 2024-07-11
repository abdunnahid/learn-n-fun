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
var oddEvenList = function (head) {

    if (!head || !head.next) {
        return head;
    }

    let odd = new ListNode();
    let oddHead = odd;

    let even = new ListNode();
    let evenHead = even;

    let isEven = false;

    while (head) {

        if (isEven) {
            even.val = head.val;
            if (head?.next?.next != null) {
                even.next = new ListNode();
                even = even.next;
            }
        }
        else {
            odd.val = head.val;
            if (head?.next?.next != null) {
                odd.next = new ListNode();
                odd = odd.next;
            }
        }

        head = head.next;
        isEven = !isEven;
    }

    odd.next = evenHead;

    return oddHead;

};

// const input = [1, 3, 4, 7, 1, 2, 6];
// const input = [1, 2, 3, 4];
// const input = [2, 1];
// const input = [1, 2, 3, 4, 5, 6, 7];
// const input = [1, 2, 3, 4, 5];
const input = [2, 1, 3, 5, 6, 4, 7];

import { LinkedList, ListNode } from "../../study/linked-list/linked-list.js";
const linkedList = new LinkedList();
const head = linkedList.addRange(input);
const result = oddEvenList(head);
console.log("result: ", linkedList.toArray(result));
