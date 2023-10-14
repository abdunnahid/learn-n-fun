/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {

    const wordCount = {};
    for (const word of words) {
        if (word in wordCount) {
            wordCount[word].count++;
        }
        else {
            wordCount[word] = {
                count: 1,
                word: word
            };
        }
    }

    const temp = Object.values(wordCount).sort((a, b) => b.count - a.count);

    const result = [];
    let index = 0;

    while (index < temp.length) {
        let current = index;
        let sameFreqWords = [temp[current].word];

        while (temp[current]?.count === temp[current + 1]?.count) {
            sameFreqWords.push(temp[current + 1].word);
            current = current + 1;
        }

        result.push(...sameFreqWords.sort((a, b) => a.localeCompare(b)));
        index = current + 1;
    }

    return result.slice(0, k);

};

// const result = topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4);
const result = topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3);
console.log("Result: ", result);