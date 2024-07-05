/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * @param {ListNode} head
 * @return {number[]}
*/
var nodesBetweenCriticalPoints = function (head) {

    const arr = [];
    const criticalPoints = [];
    const result = []

    let node = head;
    while (node) { // O(n)
        arr.push(node.val);
        node = node.next;
    }

    const isLocalMaxima = (previous, value, next) => {
        if (value > previous && value > next) {
            return true;
        }
        return false;
    }
    const isLocalMinima = (previous, value, next) => {
        if (value < previous && value < next) {
            return true;
        }
        return false;
    }
    const isCriticalPoint = (previous, value, next) => {
        return isLocalMinima(previous, value, next) || isLocalMaxima(previous, value, next);
    }

    for (let i = 1; i < arr.length - 1; i++) { // O(n)

        const isCritical = isCriticalPoint(arr[i - 1], arr[i], arr[i + 1]);

        if (isCritical) {
            criticalPoints.push(i);
        }

    }

    if (criticalPoints.length < 2) { return [-1, -1]; }

    console.log('criticalPoints: ', criticalPoints);

    // Find Min Distance
    let minDistance = Infinity;
    for (let i = 0; i < criticalPoints.length - 1; i++) { // O(n)
        const distanceBetweenImmediateTwo = criticalPoints[i + 1] - criticalPoints[i];
        console.log("🚀 ~ nodesBetweenCriticalPoints ~ distanceBetweenImmediateTwo:", distanceBetweenImmediateTwo)
        if (distanceBetweenImmediateTwo < minDistance) {
            minDistance = distanceBetweenImmediateTwo;
        }
    }

    // Max Distance
    const maxDistance = criticalPoints[criticalPoints.length - 1] - criticalPoints[0];

    result.push(minDistance);
    result.push(maxDistance);

    return result;

};

import { LinkedList } from "../../study/linked-list/linked-list.js";
const linkedList = new LinkedList();

// const input = [5, 3, 1, 2, 5, 1, 2];
// const input = [3, 1];
const input = [1, 3, 2, 2, 3, 2, 2, 2, 7];

const head = linkedList.addRange(input);
const result = nodesBetweenCriticalPoints(head);
console.log("result: ", result);
