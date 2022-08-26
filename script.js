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

console.log(computerChoice);


// var index = function() {

// }
// var computerChoice = options[Math.floor(math.random(index))];

// playGame.userChoice

// window.alert("R, P, S");

// window.prompt();

// window.confirm("yes");