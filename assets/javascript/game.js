window.onload = function () {

  var wins; // totals wins
  var word; // Selected Word
  var guessAll; // Guesses
  var wGuesses; // Stored Guesses
  var lives = 10;
  var userLetter;
  var remainingLetters;
  var guessArray = [];
  // // // Elements
  // // var showWins = document.getElementById("myWins");
  // var showLives = document.getElementById("showLives");

  var lettersGuessedElement = document.getElementById('userLetter')

  // Create an array of words

  var words = ['bitcoin', 'litecoin', 'ethereum', 'ripple', 'stellar', 'factom', 'doge', 'dash', 'monero'];
  var images = [];

  // Pick a random word
  var word = words[Math.floor(Math.random() * words.length)];

  //HERE split the word to guess into an array. this is what you will check the user guess against
  var wordArray = word.split("");
  console.log(wordArray);

  // Set up the answer array
  // function called join - taked array and add items in array together and puts it in a string
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray.push("_");
    console.log(answerArray)

    //this will render the array onload
    document.getElementById("word").innerHTML = answerArray;
    var id = answerArray.join("  ");
    // var remainingLetters = word.length;
  }

  document.onkeyup = function (event) {
    userLetter = event.key;
    userGuess(userLetter);
    console.log(userLetter)

    function userGuess(userLetter) {
      if (word.indexOf(userLetter) > -1) {

        //Check the guess against the word array
        for (var j = 0; j < wordArray.length; j++) {
          if (userLetter === wordArray[j]) {
            answerArray[j] = userLetter;
            console.log(answerArray);
            //update the html in the function
            document.getElementById("word").innerHTML = answerArray;
          }

        }
      }
      guessArray.push(userLetter);
      document.getElementById("wguess").innerHTML = guessArray.join(" ");

    }
  }

  // // Show guesses
  // comment = function () {
  //   wguess
  // }

  //Show lives
  comment = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guessAll.length; i++) {
      if (id === guessAll.length) {
        showLives.innerHTML = "You Win!";
    document.getElementById("showLives").innerHTML = lives;
      }
    }
  }
  comment();
}

// if word is complete then do this, is user guess too many times then resert gamer


// dont let user lose life for same incorrect letter
