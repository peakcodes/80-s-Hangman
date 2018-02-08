 window.onload = function(){

    var wins ; // totals wins
    var word ; // Selected Word
    var guessAll = []; // Guess
    var wrongguesses = []; // Stored Guesses
    var lives = 10;

    // // // Elements
    // // var showWins = document.getElementById("myWins");
    // var showLives = document.getElementById("showLives");

var lettersGuessedElement = document.getElementById('guessAll')
 
 // Create an array of words

 var words = ['bitcoin', 'litecoin', 'ethereum', 'ripple', 'stellar', 'factom', 'doge', 'dash', 'monero'];

 // Pick a random word

 var word = words[Math.floor(Math.random() * words.length)];
 
 // Set up the answer array

 // function called join - taked array and add items in array together and puts it in a string

 var answerArray = [];
 for (var i = 0; i < word.length; i++) {
 answerArray[i] = " _ ";
 }
 var id = answerArray.join ("  ")
 var remainingLetters = word.length;

 document.getElementById("word").innerHTML = id;


// Show lives
    comment = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guessAll.length; i++) {
      if (id === guessAll.length) {
        showLives.innerHTML = "You Win!";
      }}
    }
    comment();
}

//  Apply Guess/keystroke

document.onkeyup = function (event) {
var guessAll = event.key;
console.log(guessAll);
}

function userGuess (guessAll) {

if(word.indexOf(guessAll) > -1) {

  for (var j = 0; j < word.length; j++) {
    if (word[j] === guessAll) {
      answerArray[j] = word;
    }
  }
  

}


}