/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.queue = [];
    this.maxSize = k;
    this.count = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {

    if (this.isFull()) {
        return false;
    }

    this.queue.unshift(value);
    this.count++;
    return true;

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) {
        return false;
    }
    this.queue.pop();
    this.count--;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[this.queue.length - 1];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[0];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.count === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.count === this.maxSize;
};

const myCircularQueue = new MyCircularQueue(3);
const r1 = myCircularQueue.enQueue(1); // return True
console.log("r1", r1);
const r2 = myCircularQueue.enQueue(2); // return True
console.log("r2", r2);
const r3 = myCircularQueue.enQueue(3); // return True
console.log("r3", r3);
const r4 = myCircularQueue.enQueue(4); // return False
console.log("r4", r4);
const r5 = myCircularQueue.Rear();     // return 3
console.log("r5", r5);
const r6 = myCircularQueue.isFull();   // return True
console.log("r6", r6);
const r7 = myCircularQueue.deQueue();  // return True
console.log("r7", r7);
const r8 = myCircularQueue.enQueue(4); // return True
console.log("r8", r8);
const r9 = myCircularQueue.Rear();     // return 4
console.log("r9", r9);
