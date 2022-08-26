var win = 0;
var ties = 0;
var losses = 0;

var options = ["R", "P", "S"];

var playGame = function() {
    var userChoice = window.prompt("R , P or S?")
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}
var computerChoice = options[getRandom(options.length)];

if (playGame.userChoice === computerChoice) {
    window.alert("It's a tie!");

}
console.log(computerChoice);


// window.alert("R, P, S");

// window.prompt();

// window.confirm("yes");

function playGame() {
    var options = ["R", "P", "S"];
    var playerMove = prompt("R , P or S?");
    
    if (!playerMove){
        return;
    }

    playerMove = playerMove.toUpperCase;
    var computerMove = options[Math.floor(Math.random() * options.length)];

    alert("The computer chose: " + computerMove);

    

}