var Letter = require("./Letter");

var Word = function(hiddenWord) {

    // Used to store current word in array of letters
    this.hiddenWord = hiddenWord;
    hiddenWord = hiddenWord.split("");

    // Used to make an object array using Letter() of hiddenWord
    var wordArray = [];
    for (var i = 0; i < hiddenWord.length; i++) {
        var letter = new Letter(hiddenWord[i], false);
        wordArray.push(letter);
    };

    this.returnString = function() {
        var localArray = [];
        for (var i = 0; i < wordArray.length; i++) {
            localArray.push(wordArray[i].revealLetter());
        };
        localArray = localArray.join(" ");
        return localArray;
    };

    // Compares user-entered letter 'l' against hidden word array
    this.guessedLetter = function(l) {
        var local = 0;
        for (var i = 0; i < wordArray.length; i++) {
            wordArray[i].compare(l);
            if (wordArray[i].compare(l) === true) {
                local++;
            };
        };
        return local;
    };
};

module.exports = Word;