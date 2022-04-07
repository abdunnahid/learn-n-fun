var lastStoneWeight = function (stones) {

    stones = stones.sort((a, b) => a - b);

    stones.insert = (stn) => {
        let index = 0;
        for (const stone of stones) {
            if (stn <= stone) {
                break;
            }
            index++;
        }
        if (index === 0) {
            return stones.unshift(stn);
        }
        if (index === stones.length - 1) {
            return stones.push(stn);
        }
        stones.splice(index, 0, stn);
    }

    while (stones.length > 1) {
        const newStone = Math.abs(stones.pop() - stones.pop());
        stones.insert(newStone)
    }

    return stones[0];

};

const stones = [1,0];
const result = lastStoneWeight(stones);
console.log(result);