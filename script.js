console.log("Rock paper scissors")
console.log(23 + 97)

const items = { 0 : 'Rock', 1: 'Paper', 2 : 'Scissors'}

function computerPlay() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    return items[getRandomInt(3)];
}

function playRound(playerSelection, computerSelection) {
    let s1 = playerSelection.toLowerCase();
    let s2 = computerSelection.toLowerCase();

    if (s1 === s2) return "TIE";
	let res = {p: "rock", s: "paper", r: "scissors"};
	return `Player chose ${s1} and computer chose ${s2}. ` + 
    (res[s1[0]] === s2 ? "Player wins." : "Computer wins.");
}

// const playerSelection = "ROCK";
// console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerSelection = prompt('Rock, paper, scissors?');
    let computerSelection = computerPlay();
    return playRound(playerSelection, computerSelection);
}

console.log(game());