var Letter = function(val, guessed) {
    this.val     = val;
    this.guessed = guessed;

    // Reveals letter if guessed is true, else keeps placeholder
    this.revealLetter = function() {
        if (this.guessed === true) {
            return this.val;
        } else {
            return '_';
        }
    };

    // Compares user guess against stored value
    this.compare = function(guess) {
        if (guess === this.val) {
            this.guessed = true;
        };
    };
};

module.exports = Letter;