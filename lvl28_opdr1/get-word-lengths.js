const getWordLengths = function(someWords) {
    const words = someWords.map(word => {
        return word.length;
    })
    return words;
};

module.exports = getWordLengths;