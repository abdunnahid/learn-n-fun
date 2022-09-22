/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    }

    let result = 0;

    let pointer = s.length - 1;

    while (pointer >= 0) {
        const couple = s[pointer - 1] + s[pointer];

        let intVal = 0;
        if (couple in map) {
            intVal = map[couple];
            pointer = pointer - 2;
        }
        else {
            intVal = map[s[pointer]];
            pointer--;
        }

        result = result + intVal;
    }

    return result;

};

const result = romanToInt('III');
console.log("Result: ", result);