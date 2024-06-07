/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    dictionary = dictionary.sort((a, b) => a.length - b.length);
    console.log("replaceWords ~ dictionary:", dictionary);

    let result = '';
    for (const word of sentence.split(' ')) {

        let replacedWord;
        for (const dictWord of dictionary) {
            if (word.startsWith(dictWord)) {
                replacedWord = dictWord;
                break;
            }
        }
        replacedWord = replacedWord || word;
        result = result + (result ? ` ${replacedWord}` : replacedWord);
    }
    return result;
}

var replaceWordsTimeLimit = function (dictionary, sentence) {

    const dictionaryMap = {};
    for (const word of dictionary) {

        let temp = dictionaryMap;

        for (let i = 0; i < word.length; i++) {

            const char = word[i];

            if (!(char in temp)) {
                temp[char] = {};
            }
            temp = temp[char];
        }
        temp['isEndOfAWord'] = true;
    }

    // console.log(JSON.stringify(dictionaryMap, null, 2));

    const result = [];

    const words = sentence.split(' ');
    for (const word of words) {

        let temp = JSON.parse(JSON.stringify(dictionaryMap));

        let replacedWord = '';

        for (let i = 0; i < word.length; i++) {

            const char = word[i];
            replacedWord = replacedWord + char;

            if (!(char in temp)) {
                result.push(word);
                break;
            }

            if (temp[char]['isEndOfAWord'] || i == word.length - 1) {
                result.push(replacedWord);
                break;
            }
            temp = temp[char];
        }
    }

    return result.join(' ');

};

// const dictionary = ["cat", "battle", "bat", "rat", "cattle"], sentence = "the cattle was rattled by the battery";
const dictionary = ["a", "b", "c"], sentence = "aadsfasf b bbab cadsfafs s";
// const dictionary = ["e", "k", "c", "harqp", "h", "gsafc", "vn", "lqp", "soy", "mr", "x", "iitgm", "sb", "oo", "spj", "gwmly", "iu", "z", "f", "ha", "vds", "v", "vpx", "fir", "t", "xo", "apifm", "tlznm", "kkv", "nxyud", "j", "qp", "omn", "zoxp", "mutu", "i", "nxth", "dwuer", "sadl", "pv", "w", "mding", "mubem", "xsmwc", "vl", "farov", "twfmq", "ljhmr", "q", "bbzs", "kd", "kwc", "a", "buq", "sm", "yi", "nypa", "xwz", "si", "amqx", "iy", "eb", "qvgt", "twy", "rf", "dc", "utt", "mxjfu", "hm", "trz", "lzh", "lref", "qbx", "fmemr", "gil", "go", "qggh", "uud", "trnhf", "gels", "dfdq", "qzkx", "qxw"];
// const sentence = "ikkbp miszkays wqjferqoxjwvbieyk gvcfldkiavww vhokchxz dvypwyb bxahfzcfanteibiltins ueebf lqhflvwxksi dco kddxmckhvqifbuzkhstp wc ytzzlm gximjuhzfdjuamhsu gdkbmhpnvy ifvifheoxqlbosfww mengfdydekwttkhbzenk wjhmmyltmeufqvcpcxg hthcuovils ldipovluo aiprogn nusquzpmnogtjkklfhta klxvvlvyh nxzgnrveghc mpppfhzjkbucv cqcft uwmahhqradjtf iaaasabqqzmbcig zcpvpyypsmodtoiif qjuiqtfhzcpnmtk yzfragcextvx ivnvgkaqs iplazv jurtsyh gzixfeugj rnukjgtjpim hscyhgoru aledyrmzwhsz xbahcwfwm hzd ygelddphxnbh rvjxtlqfnlmwdoezh zawfkko iwhkcddxgpqtdrjrcv bbfj mhs nenrqfkbf spfpazr wrkjiwyf cw dtd cqibzmuuhukwylrnld dtaxhddidfwqs bgnnoxgyynol hg dijhrrpnwjlju muzzrrsypzgwvblf zbugltrnyzbg hktdviastoireyiqf qvufxgcixvhrjqtna ipfzhuvgo daee r nlipyfszvxlwqw yoq dewpgtcrzausqwhh qzsaobsghgm ichlpsjlsrwzhbyfhm ksenb bqprarpgnyemzwifqzz oai pnqottd nygesjtlpala qmxixtooxtbrzyorn gyvukjpc s mxhlkdaycskj uvwmerplaibeknltuvd ocnn frotscysdyclrc ckcttaceuuxzcghw pxbd oklwhcppuziixpvihihp";
// const dictionary = ["e", "k", "c", "harqp", "h", "gsafc", "vn", "lqp", "soy", "mr", "x", "iitgm", "sb", "oo", "spj", "gwmly", "iu", "z", "f", "ha", "vds", "v", "vpx", "fir", "t", "xo", "apifm", "tlznm", "kkv", "nxyud", "j", "qp", "omn", "zoxp", "mutu", "i", "nxth", "dwuer", "sadl", "pv", "w", "mding", "mubem", "xsmwc", "vl", "farov", "twfmq", "ljhmr", "q", "bbzs", "kd", "kwc", "a", "buq", "sm", "yi", "nypa", "xwz", "si", "amqx", "iy", "eb", "qvgt", "twy", "rf", "dc", "utt", "mxjfu", "hm", "trz", "lzh", "lref", "qbx", "fmemr", "gil", "go", "qggh", "uud", "trnhf", "gels", "dfdq", "qzkx", "qxw"];
// const sentence = "gyvukjpc s";
const result = replaceWords(dictionary, sentence);
console.log("result:", result);
