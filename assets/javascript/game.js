var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z"];


var wins = 0;
var losses = 0;
var guesses = 10;
var guessedLetters = [];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice);

document.onkeypress = function(event) {

    var userGuess = event.key;


    if (userGuess === computerChoice) {
        wins++
        alert("You win!");
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        guesses = 10;
        document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);
        guessedLetters = [];
        document.getElementById("userGuesses").innerHTML = "Your guesses so far: " + guessedLetters;
        

    }
    else {
        guesses --;
        guessedLetters.push(userGuess);
        document.getElementById("userGuesses").innerHTML = "Your guesses so far: " + guessedLetters;
        document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
    }

    if (guesses === 0) {
        losses ++;
        alert("You lose!");
        guesses = 10;
        document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);
        guessedLetters = [];
        document.getElementById("userGuesses").innerHTML = "Your guesses so far: " + guessedLetters;
    }

}
