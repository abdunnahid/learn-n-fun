/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {

    dominoes = dominoes.split('');
    const result = [];

    let index = 0;

    while (index < dominoes.length) {

        console.log(index);

        result[index] = dominoes[index];

        if (dominoes[index] === 'L') {
            let back = index - 1;

            while (dominoes[back] === '.') {
                result[back] = 'L';
                back--;
            }

            index++;
        }
        else if (dominoes[index] === 'R') {

            let forward = index + 1;
            while (dominoes[forward] === '.') forward++;

            if (dominoes[forward] === 'R' || forward === dominoes.length) {
                for (let i = index + 1; i < forward; i++) {
                    result[i] = 'R';
                }
                index = forward;
            }
            else if (dominoes[forward] === 'L') {
                let left = index;
                let right = forward;

                while (left <= right) {
                    if (left === right) {
                        result[left] = dominoes[left];
                    }
                    else {
                        result[left] = 'R';
                        result[right] = 'L';
                    }
                    left++;
                    right--;
                }
                index = forward + 1;
            }

        }
        else {
            index++;
        }
    }

    console.log(result);

    return result.join('');

};

// const result = pushDominoes("R...L");
const result = pushDominoes(".L.R...LR..L..L.");
console.log('Result: ', result);