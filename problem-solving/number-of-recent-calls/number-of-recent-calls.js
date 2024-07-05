var RecentCounter = function () {
    this.lastReqLimit = 3000;
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {

    let count = 0;
    this.queue.push(t);

    const tillTime = t - this.lastReqLimit;

    for (let i = this.queue.length - 1; i >= 0; i--) {
        if (this.queue[i] >= tillTime) {
            count++;
        }
        else {
            break;
        }
    }

    return count;

};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

const input = [1, 100, 3001, 3002];

const counter = new RecentCounter();

for (const t of input) {
    const result = counter.ping(t);
    console.log("t: ", t, "result: ", result);
}