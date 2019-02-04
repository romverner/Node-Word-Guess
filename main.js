var Word = require("./Word");
var inquirer = require('inquirer');

var wordArray = ['hello', 'goodbye', 'music', 'destiny', 'jazz'];
var guessCount = 0;
var wordOb;
var chosenWord;

var mainLoop = function() {

    if (guessCount === 0) {
        chosenWord = wordArray[
            Math.floor(Math.random() * wordArray.length)];
        wordOb = new Word(chosenWord);
    };

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'guess',
                message: "Guess a letter."
            }
        ])
        .then(answers => {
            console.log("You guessed: " + answers.guess);
            wordOb.guessedLetter(answers.guess.toLowerCase());
            guessCount++;

            if (guessCount <= 6) {
                mainLoop();
            } else {
                console.log(
                    "Sorry! You've reached your max number of guesses!")
            };
        });
};

mainLoop();