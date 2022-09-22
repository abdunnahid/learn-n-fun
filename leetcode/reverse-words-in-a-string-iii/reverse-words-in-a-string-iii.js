/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

    const arr = s.split(" ");

    arr.forEach((word, index) => {

        let reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }

        arr[index] = reversedWord;
    });

    return arr.join(' ');

};

const result = reverseWords("Let's take LeetCode contest");
console.log("Result: ", result);