/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {

    if (hand.length % groupSize > 0) return false;

    hand = hand.sort((a, b) => a - b);

    const map = {};
    for (const card of hand) {
        map[card] = (map[card] || 0) + 1;
    }

    for (const card of hand) {
        
        const cardCount = map[card] || 0;

        if (cardCount == 0) continue;

        for (let i = 1; i < groupSize; i++) {
            const nextCardCount = map[card + i] || 0;
            if (nextCardCount == 0) return false;
            map[card + i]--;
        }

        map[card]--;

    }

    return true;

};

const hand = [1,2,3,4,5], groupSize = 4
const result = isNStraightHand(hand, groupSize);
console.log("result:", result);
