let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let buttons = document.querySelectorAll(".button");

buttons.forEach(button => button.addEventListener("mousedown", showScore));

function showScore(e) {
    playerSelection = this.id;
    
    const container = document.querySelector('.score');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = playerSelection;
    container.appendChild(content);

    console.log(playerSelection);
}






///////////////////
///////////////////

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

function round(num) {
    for (let i = 0; i < num; i++) {
        console.log(game());
        console.log(score());
    }
}

//round(5);