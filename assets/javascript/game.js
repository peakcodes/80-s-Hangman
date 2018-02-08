
window.onload = function(){
    var wins ; // totals wins
    var word ; // Selected Word
    var guessAll = []; // Guess
    var wrongguesses = []; // Stored Guesses
    var lives = 10;

    // // Elements
    // var showWins = document.getElementById("myWins");
    var showLives = document.getElementById("showLives");
    // var showClue = document.getElementById("clue")

// function initializeGame() {
//         word = 'banzai';
//         allowedGuesses = 13;
//         wrongGuesses = [];
//         correctGuesses = [];
      
        // initialize correctGuesses array with underscores
        for (var i = 0; i < word.length; i++) {
          guessAll.push('_');
        }
      
        wordElement.innerHTML = correctGuesses.join(' ');
        letterCountElement.innerHTML = allowedGuesses;
      }

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

//  Apply Guess/keystroke
 

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

document.onkeyup = function (event) {
var guessAll = event.key;
  userGuess(guessAll)
}

function userGuess (guessAll) {

if(word.indexOf(guessAll) > -1) {

  for (var j = 0; j < word.length; j++) {
    if (word[j] === guessAll) {
      answerArray[j] = guess;
    }

  }
  

}


}

// console.log(guessAll);

// }
// // this will hold all the letters tried
// var wguess = "guessAll";

// comment()

// The game loop
// while(word >= 0 && guessAll.length < lives) {

    // // show the player their progress
    // comment(answerArray.join(" "));


 // The game loop
//  while (remainingLetters > 0) {


    // Display Wins

    // Show Word


    // Display lives left

    // Show lives
//    comments = function () {
//     myLives.innerHTML = "You have " + lives + " lives";
//     if (lives < 1) {
//       myLives.innerHTML = "Game Over";
//     }
//     for (var i = 0; i < geusses.length; i++) {
//       if (counter + space === geusses.length) {
//         myLives.innerHTML = "You Win!";
//       }


//     // Display user guesses

// // end hiding script from old browsers -->
// var wordlist = []
//     targetWord = '',
//     guesses = []
//     maxLives= 6;



// function loadWordList() {
//     var word = '';


   // // Get a guess from the player
    // var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    // if (guess === null) {
    // // Exit the game loop
    // break;
    // } else if (guess.length !== 1) {
    // alert("Please enter a single letter.");
    // } else {
    // // Update the game state with the guess
    // for (var j = 0; j < word.length; j++) {
    // if (word[j] === guess) {
    // answerArray[j] = guess;
    // remainingLetters--;
    // }
    // }
 // Exit the game loop

// window.onload = function() {

// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z'];

