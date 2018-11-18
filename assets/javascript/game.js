var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
               "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var userGuess = null;

var guessAction = letters[Math.floor(Math.random() * letters.length)];

var audio = new Audio('audio_file.mp3');

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guessesSoFar.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length]=userGuess;
        guessesLeft--;
    }
    
    if (guessAction == userGuess) {
        wins++;
        guessesLeft = 10;
        guessesSoFar = [];
        guessAction = letters[Math.floor(Math.random() * letters.length)];
    }

    if (guessesLeft == 0) {
        losses++;
        guessesLeft = 10;
        guessesSoFar = [];
        guessAction = letters[Math.floor(Math.random() * letters.length)];

    }

    var html =  "<div id='title'> " +
                "<h1>The Psychic Game</h1>" +
                "</div>" +
                "<div id='others'> " + 
                "<p>Guess what letter I'm thinking of!</p>" +
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses Left: " + guessesLeft + "</p>" +
                "<p>Your Guesses so far: " + guessesSoFar + "</p>" +
                "</div>";
    document.querySelector(".game").innerHTML = html;
}





