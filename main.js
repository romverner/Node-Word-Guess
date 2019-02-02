var Word = require("./Word");
var inquirer = require('inquirer');

var wordArray = ['hello', 'goodbye', 'music', 'destiny', 'jazz'];
var guessCount = 0;

var mainLoop = function() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'guess',
                message: "Guess a letter."
            }
        ])
}
