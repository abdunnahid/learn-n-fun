const decimalToBinary = (number, result = '') => {

    if (number === 0) {
        return result;
    }

    result = (number % 2).toString() + result;
    return decimalToBinary(Math.floor(number / 2), result);

}

const result = decimalToBinary(133);
console.log("🚀 ~ file: decimal-to-binary.js ~ line 13 ~ answer", result)