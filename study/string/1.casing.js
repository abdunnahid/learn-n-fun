const isUppercase = (char) => {
    // Opt 1. string methods
    if (char >= 'A' && char <= 'Z') {
        return true;
    }
    // Opt 2. regex
    if (/[A-Z]/.test(char)) {
        return true;
    }
    return false;
}
const isLowercase = (char) => {
    // Opt 1. string methods
    if (char >= 'a' && char <= 'z') {
        return true;
    }
    // Opt 2. regex
    if (/[a-z]/.test(char)) {
        return true;
    }
    return false;
}
const isDigit = (char) => {
    // Opt 1. string methods
    if (char >= '0' && char <= '9') {
        return true;
    }
    // Opt 2. regex
    if (/\d/.test(char)) {
        return true;
    }
    return false;
}

const countUppercaseLetters = function (string) {
    let count = 0;
    for (const char of string) {
        if (isUppercase(char)) count++;
    }
    return count;
};
const countLowercaseLetters = function (string) {
    let count = 0;
    for (const char of string) {
        if (isLowercase(char)) count++;
    }
    return count;
};
const countDigits = function (string) {
    let count = 0;
    for (const char of string) {
        if (isDigit(char)) count++;
    }
    return count;
};

const string = "H2O2He3Mg4";
const uppercaeCount = countUppercaseLetters(string);
console.log("uppercaeCount: ", uppercaeCount)
const lowercaseCount = countLowercaseLetters(string);
console.log("lowercaseCount: ", lowercaseCount)
const digitsCount = countDigits(string);
console.log("digitsCount: ", digitsCount)
