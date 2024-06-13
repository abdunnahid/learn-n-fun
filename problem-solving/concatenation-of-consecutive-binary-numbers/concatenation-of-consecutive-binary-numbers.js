var concatenatedBinary = function (n) {

    let result = 0;
    const maxLimit = Math.pow(10, 9) + 7;

    for (let i = 1; i <= n; i++) {
        result = (result * Math.pow(2, i.toString(2).length) + i) % maxLimit;
    }
    return result;

};

const result = concatenatedBinary(42);
console.log('Result: ', result);
