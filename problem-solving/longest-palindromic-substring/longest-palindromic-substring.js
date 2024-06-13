/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    let longestPalindrome = '';

    for (let i = 0; i < s.length; i++) {

        let left = i - 1;
        let right = i + 1;
        const palindrome = [s[i]];

        while (s[left] && s[right] && s[left] === s[right]) {
            palindrome.unshift(s[left]);
            palindrome.push(s[right]);
            left--;
            right++;
        }

        if (palindrome.length > longestPalindrome.length) {
            longestPalindrome = palindrome.join('');
        }

    }

    for (let i = 0, j = 1; j < s.length; i++, j++) {

        if (s[i] !== s[j]) { continue; }

        const palindrome = [s[i], s[j]];
        let left = i - 1;
        let right = j + 1;

        while (s[left] && s[right] && s[left] === s[right]) {
            palindrome.unshift(s[left]);
            palindrome.push(s[right]);
            left--;
            right++;
        }

        if (palindrome.length > longestPalindrome.length) {
            longestPalindrome = palindrome.join('');
        }

    }

    return longestPalindrome;

};

const result = longestPalindrome('babad');
// const result = longestPalindrome("aa");
// const result = longestPalindrome("cbbd");
console.log("Result: ", result);