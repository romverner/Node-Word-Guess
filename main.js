var Word = require("./Word");
var inquirer = require('inquirer');

var wordArray = ['hello', 'goodbye', 'music', 'destiny', 'jazz'];
var guessedArray = [];
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
            
            console.log(
                "------------------------------------------------"
                + "\nYou guessed: " + answers.guess.toUpperCase()
            );

            guessedArray.push(answers.guess.toUpperCase());
            wordOb.guessedLetter(answers.guess.toLowerCase());
            
            if (wordOb.guessedLetter(answers.guess) > 0) {
                    console.log("Correct!\n");
                
            } else {
                console.log("Incorrect.\n");
                guessCount++;
            };

            console.log(wordOb.returnString());

            console.log("\nGuessed Letters: " + guessedArray);
            console.log("Number of incorrect guesses: " + guessCount);
            console.log(
                "------------------------------------------------"
            );

            if (guessCount <= 5) {
                mainLoop();
            } else {
                console.log(
                    "Sorry! You've reached your max number of guesses!"
                    + "\nThe word was: " 
                    + wordOb.hiddenWord.toUpperCase()
                );

            };
        });
};

mainLoop();