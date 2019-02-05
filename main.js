var Word = require("./Word");
var inquirer = require('inquirer');

var wordArray = ['hello', 'goodbye', 'music', 'destiny', 'jazz'];
var guessedArray = [];
var guessCount = -1;
var wordOb;
var chosenWord;
var stringArray;

var mainLoop = function() {

    if (guessCount === -1) {
        chosenWord = wordArray[
            Math.floor(Math.random() * wordArray.length)];
        wordOb = new Word(chosenWord);
        guessCount = 0;
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
            stringArray = wordOb.returnString();
            
            // FIX CODE HERE TO ADD WIN CONDITIONS
            if (wordOb.guessedLetter(answers.guess) > 0) {

                stringArray = stringArray.join('').toLowerCase();
                console.log("Correct!\n");

                for (var i = 0; i < stringArray.length; i++) {
                    if (stringArray === wordArray[i]) {
                        console.log("You win!");
                        inquirer.prompt(
                            {
                                
                            }
                        )
                    };
                };

                console.log("Correct!\n");
            } else {
                console.log("Incorrect.\n");
                guessCount++;
            };

            console.log(wordOb.returnString().join(' '));

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