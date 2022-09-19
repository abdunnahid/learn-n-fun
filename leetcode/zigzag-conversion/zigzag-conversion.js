/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    const rows = [];
    for (let i = 0; i <= numRows; i++) {
        rows.push(new Array(s.length).fill(null));
    }

    let row = 1;
    let column = 1;
    let drawCross = false;

    for (let i = 0; i < s.length; i++) {

        console.log("row=> ", row);
        console.log("column===> ", column);
        
        rows[row][column] = s[i];
        console.log("rows[row][column]===> ", rows[row][column]);

        if (row < numRows) {
            row++;
        }
        // else {
        //     if (row % numRows === 0) {
        //         drawCross = !drawCross;
        //     }

        //     if (drawCross) {
        //         row = row - 1;
        //         column++;
        //     }
        //     else {
        //         row++;
        //     }
        // }
    }

    console.log("$$$$$$$$$$$$$=============> ", rows);


};

const result = convert('PAYPALISHIRING', 4);
console.log("Result: ", result);