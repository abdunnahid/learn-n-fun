/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {

    if (data.length === 0) { return true; }

    const getBits = (num) => {
        return num.toString(2).padStart(8, "0");
    };

    const getByteCountOfTheCharacter = (bits) => {
        if (bits[0] === '0') return 1;
        let bytes = 0;
        for (const bit of bits) {
            if (bit === '0') { break; }
            bytes++;
        }
        return bytes;
    }

    const isValidContinuationByte = (bits) => {
        return bits.startsWith('10');
    }

    for (let index = 0; index < data.length; index++) {

        const bits = getBits(data[index]);

        // Not valid for starting of a character
        if (bits.startsWith('10')) { return false; }

        const byteCount = getByteCountOfTheCharacter(bits);

        // Check if byteCount is valid
        if (byteCount > 4) { return false; }

        // Check if this is a one byte character
        if (byteCount === 1) { continue; }

        // Check if the array has all the continuation bytes
        if (data.length - index < byteCount) { return false; }

        // take all the continuation bytes and validate
        for (let charIndex = index + 1; charIndex < index + byteCount; charIndex++) {
            const bits = getBits(data[charIndex]);
            const isValid = isValidContinuationByte(bits);
            if (!isValid) { return false; }
        }
        index = (index + byteCount) - 1;
    }

    return true;

};

const result = validUtf8([250, 145, 145, 145, 145]);
console.log("Result: ", result);
console.log("------------- THE END -------------");
