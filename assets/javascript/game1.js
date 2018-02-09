 window.onload = function(){

    var wins ; // totals wins
    var word ; // Selected Word
    var guessAll ; // Guesses
    var wGuesses = []; // Stored Guesses
    var lives = 10;
    var userLetter ;
    var remainingLetters;
    // // // Elements
    // // var showWins = document.getElementById("myWins");
    // var showLives = document.getElementById("showLives");

var lettersGuessedElement = document.getElementById('userLetter')
 
 // Create an array of words

 var words = ['bitcoin', 'litecoin', 'ethereum', 'ripple', 'stellar', 'factom', 'doge', 'dash', 'monero'];
 var images = [];
 // Pick a random word

 var word = words[Math.floor(Math.random() * words.length)];
 
 // Set up the answer array

 // function called join - taked array and add items in array together and puts it in a string

 var answerArray = [];
 for (var i = 0; i < word.length; i++) {
 answerArray.push("_");
 console.log(answerArray)
 }
 var id = answerArray.join(" ");
 var remainingLetters = word.length;


 document.onkeyup = function (event) {
    userLetter = event.key;
    userGuess(userLetter);
    console.log(userLetter)}

function userGuess (userLetter) {

    if(word.indexOf(userLetter) > -1) {

  for (var j = 0; j < answerArray.length; j++) {
    if (userLetter === answerArray[j]) {
      answerArray[j] = userLetter;
      console.log(answerArray);
    }
    }
    }
    }
    document.getElementById("word").innerHTML = answerArray;

//Show lives
    comment = function () {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < guessAll.length; i++) {
            if (id === guessAll.length) {
                showLives.innerHTML = "You Win!";
            }
//  newDiv.setattribute('bitcoin', "../images/bitcoin.png")
//  // newDiv.setattribute('doge', "image.png")
// // newDiv.setattribute('etheruem', "image.png")
// // newDiv.setattribute('litecoin', "image.png")
