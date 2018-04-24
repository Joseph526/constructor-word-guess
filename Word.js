// Require external resources
var Letter = require("./Letter.js");

// Declare constructor function
var Word = function(wordInput) {
    
    // Empty array to hold letter objects for each letter of wordInput
    this.letterArr = [];

    // Function to build array of letter objects
    this.buildArr = function() {
        for (var i = 0; i < wordInput.length; i++) {
            var letterObj = new Letter(wordInput.split("")[i]);
            this.letterArr.push(letterObj);
        }
    }

    // Function to display string of letters or underscores
    this.displayString = function() {
        console.log(this.letterArr.join(" "));        
    }

    // Function to evaluate character guessed against letter objects
    this.wordCharEval = function(char) {
        for (var i = 0; i < this.letterArr.length; i++) {
            //
        }
    }
}

module.exports = Word;

// Testing
var testWord = new Word("apple");
console.log(testWord);
testWord.buildArr();
console.log(testWord.letterArr);
console.log("========================");
testWord.displayString();