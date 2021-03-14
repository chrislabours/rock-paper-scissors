console.log("Rock paper scissors")
console.log(23 + 97)

const items = { 0 : 'Rock', 1: 'Paper', 2 : 'Scissors'}
let [playerScore, computerScore] = [0,0];

function computerPlay() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    return items[getRandomInt(3)];
}

function playRound(playerSelection, computerSelection) {
    let s1 = playerSelection.toLowerCase();
    let s2 = computerSelection.toLowerCase();
    let res = {p: "rock", s: "paper", r: "scissors"};

    if (s1 === s2) {
        return "TIE";
	} else {
        res[s1[0]] === s2 ? playerScore++ : computerScore++;
        return `Player chose ${s1} and computer chose ${s2}. ` + 
    (res[s1[0]] === s2 ? "Player wins." : "Computer wins.");
    }
}

function score() {
    return `Player: ${playerScore}, Computer: ${computerScore}`;
}

function game() {
    let playerSelection = prompt('Rock, paper, scissors?');
    let computerSelection = computerPlay();
    return playRound(playerSelection, computerSelection);
}

console.log(game());
console.log(score());