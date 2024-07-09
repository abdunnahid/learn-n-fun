/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {

    let totalWaitingTime = 0;

    let lastOrderPreparationFinishedAt = customers[0][0];

    for (const customer of customers) {

        const arrivedAt = customer[0];
        const orderPreparationTime = customer[1];

        let orderPreparationFinishedAt;
        if (lastOrderPreparationFinishedAt >= arrivedAt) {
            orderPreparationFinishedAt = lastOrderPreparationFinishedAt + orderPreparationTime;
        }
        else {
            orderPreparationFinishedAt = arrivedAt + orderPreparationTime;
        }
        const customerWaitingTime = orderPreparationFinishedAt - arrivedAt;

        totalWaitingTime = totalWaitingTime + customerWaitingTime;
        lastOrderPreparationFinishedAt = orderPreparationFinishedAt;

    }

    return totalWaitingTime / customers.length;

};

const customers = [[1, 2], [2, 5], [4, 3]];
// const customers = [[5, 2], [5, 4], [10, 3], [20, 1]];
const result = averageWaitingTime(customers);
console.log("result: ", result)
