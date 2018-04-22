// Declare constructor function
var Letter = function(char) {
    this.charLetter = char;
    this.charBool = false;
    this.charReturn = function() {
        if (this.charBool === true) {
            return this.charLetter;
        }
        else {
            return "_";
        }
    }
    this.charEval = function(charGuessed) {
        if (charGuessed === this.charLetter) {
            this.charBool = true;
        }
    }
}

module.exports = Letter;

// Testing
var testLetter = new Letter("a");
console.log(testLetter);
console.log(testLetter.charReturn());
testLetter.charEval("a");
console.log(testLetter);
console.log(testLetter.charReturn());