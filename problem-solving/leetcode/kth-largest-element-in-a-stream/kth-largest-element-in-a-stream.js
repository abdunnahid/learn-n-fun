/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.nums = nums;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.nums.push(val)
    this.nums = this.nums.sort((a, b) => b - a);
    return this.nums[this.k - 1]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 */
var obj = new KthLargest(3, [4, 5, 8, 2]);

for (const num of [3, 5, 10, 9, 4]) {
    var result = obj.add(num);
    console.log("Result: ", result);
}