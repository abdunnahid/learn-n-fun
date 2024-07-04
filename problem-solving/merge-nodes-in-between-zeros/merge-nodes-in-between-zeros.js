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
var mergeNodes = function (head) {

    let lastZeroNode = head;
    let node = head.next;

    let sum = 0;

    while (node) {
        if (node.val == 0) {
            lastZeroNode.val = sum;
            sum = 0;
            if (node.next !== null) {
                lastZeroNode.next = node;
                lastZeroNode = node;
            }
            else {
                lastZeroNode.next = null;
            }
        }
        else {
            sum = sum + node.val;
        }
        node = node.next;
    }

    return head;

};


import { LinkedList } from "../../study/linked-list/linked-list.js";

// const input = [0, 1, 0, 3, 0, 2, 2, 0];
const input = [0, 3, 1, 0, 4, 5, 2, 0];

const linkedList = new LinkedList();

const head = linkedList.addRange(input);

const result = mergeNodes(head);
console.log("result: ", JSON.stringify(result, null, 2));

const resultArr = linkedList.toArray();
console.log("resultArr: ", resultArr)
