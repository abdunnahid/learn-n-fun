/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {

    const isUppercase = (char) => {
        if (char >= 'A' && char <= 'Z') {
            return true;
        }
        return false;
    }

    const isDigit = (char) => {
        if (char >= '0' && char <= '9') {
            return true;
        }
        return false;
    }

    const getAtomsWithCount = (string) => {

        if (string.length == 1) {
            return [{
                name: string,
                count: 1
            }];
        }

        const getAtomsWithCountSeperated = (s) => {
            const atom = {
                name: '',
                count: 1
            }
            for (let i = 0; i < s.length; i++) {

                const char = s[i];

                if (!isDigit(char)) {
                    atom.name = atom.name + char;
                    continue;
                }

                // digit found, check if there are multiple digits
                let digit = char;
                while (isDigit(s[i + 1])) {
                    digit = digit + s[i + 1];
                    i++;
                }

                atom.count = parseInt(digit);
            }
            return atom;
        }

        let atomsWithCount = [];

        let atomStart = 0;

        for (let i = 1; i < string.length; i++) {

            const char = string[i];

            if (isUppercase(char)) {
                const atomWithCount = string.substring(atomStart, i);
                const atomsWithCountSeperated = getAtomsWithCountSeperated(atomWithCount);
                atomsWithCount.push(atomsWithCountSeperated);
                atomStart = i;
            }

            if (i == string.length - 1) {
                const atomWithCount = string.substring(atomStart, i + 1);
                const atomsWithCountSeperated = getAtomsWithCountSeperated(atomWithCount);
                atomsWithCount.push(atomsWithCountSeperated);
            }

        }

        return atomsWithCount;
    }

    // 1. resolve parentheses
    const stack = [];

    for (let i = 0; i < formula.length; i++) {
        const char = formula[i];

        if (char != ')') {
            stack.push(char);
            continue;
        }

        // here formula[i] = ')'
        // 1. Calculate the digits after parentheses to multiply
        let digitsAfterParentheses = '';
        while (isDigit(formula[i + 1])) {
            digitsAfterParentheses = digitsAfterParentheses + formula[i + 1];
            i++;
        }
        // 2. resolve string
        let stringInsideParentheses = '';
        let lastChar = stack.pop();
        while (lastChar != '(') {
            stringInsideParentheses = lastChar + stringInsideParentheses;
            lastChar = stack.pop();
        }

        // 3. multiply the digits
        const atomsWithCount = getAtomsWithCount(stringInsideParentheses);
        for (const atom of atomsWithCount) {
            let x = atom.name;
            let y = atom.count * (parseInt(digitsAfterParentheses) || 1);
            if (y > 1) {
                x = x + y;
            }
            stack.push(x);
        }
    }

    // 2. resolve calculation from stack
    const atomsWithCountPlain = getAtomsWithCount(stack.join(''));

    const map = {};
    for (const atom of atomsWithCountPlain) {
        map[atom.name] = (map[atom.name] || 0) + atom.count;
    }
    let result = '';

    for (const atomName of Object.keys(map).sort()) {
        result = result + atomName;
        if (map[atomName] > 1) {
            result = result + map[atomName];
        }
    }
    return result;
};

// const formula = "K4(ON(SO3)2)2";
// const formula = "H2O";
// const formula = "Mg(OH)2";
// const formula = "N";
const formula = "Mg(H2O)N";
const result = countOfAtoms(formula);
console.log("result: ", result)
