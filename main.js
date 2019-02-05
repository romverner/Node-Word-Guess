var Word = require("./Word");
var inquirer = require('inquirer');

var wordArray = ['hello', 'goodbye', 'music', 'destiny', 'jazz'];
var guessedArray = [];
var guessCount = -1;
var wordOb;
var chosenWord;
var stringArray;

var setConditions = function() {
    chosenWord = wordArray[
        Math.floor(Math.random() * wordArray.length)];
    wordOb = new Word(chosenWord);
    guessedArray = [];
    stringArray = '';
    guessCount = 0;
};

var guessPrompt = function() {
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
            
            if (wordOb.guessedLetter(answers.guess) > 0) {

                stringArray = stringArray.join('').toLowerCase();
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
            mainLoop();
        });
};

var gameOver = function() {
    console.log(
        "Sorry! You've reached your max number of guesses!"
        + "\nThe word was: " 
        + wordOb.hiddenWord.toUpperCase()
    );
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'replay',
            message: "You've reached your max guess limit! Would you like to play again?"
        }
    ]).then(answers => {
        if (answers.replay) {
            guessCount = -1;
            mainLoop();
        };
    });
};

var mainLoop = function() {

    if (guessCount === -1) {
        setConditions();
    };

    if (guessCount < 7 && stringArray !== chosenWord) {
        guessPrompt();
    };
    
    if (guessCount === 7) {
        gameOver();
    };

    if (stringArray === chosenWord) {
        console.log("You win!");
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'replay',
                message: 'Would you like to continue playing?'
            }
        ]).then(answers => {
            if (answers.replay === true) {
                guessCount = -1;
                mainLoop();
            };
        });
    };
};

mainLoop();