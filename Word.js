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

    this.guessedLetter = function(l) {
        for (var i = 0; i < wordArray.length; i++) {
            wordArray[i].compare(l);
            console.log(wordArray[i].guessed);
        };
    };
};

var word = new Word('hello');
console.log(word.returnString());
word.guessedLetter('l');