/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {

    const str = String(num);
    let result = '';

    let modified = false;
    for (let i = 0; i < str.length; i++) {
        const digitStr = str[i];
        if (!modified && digitStr === '6') {
            result = result + '9';
            modified = true;
        }
        else {
            result = result + digitStr;
        }
    }
    
    return Number(result);

};

const result = maximum69Number(99699);
console.log(result);