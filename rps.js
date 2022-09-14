function getComputerChoice() {
    //Generate a random number between 0 and 2
    let choice = Math.floor(Math.random() * 3);
    //Return a string based on the number
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, compSelection) {
    let victory = false;
    playerSelection = playerSelection.toLowerCase();

    //Check for a tie first
    if (playerSelection === compSelection) {
        return `It's a tie! you both chose ${playerSelection}.`;
    }

    //Rock beats scissors, paper beats rock, scissors beats paper
    if (playerSelection === "rock") {
        if (compSelection === "paper") {
            victory = false;
        }
        else if (compSelection === "scissors") {
            victory = true;
        }
    }
    else if (playerSelection === "paper") {
        if (compSelection === "rock") {
            victory = true;
        }
        else if (compSelection === "scissors") {
            victory = false;
        }
    }
    else {
        if (compSelection === "rock") {
            victory = false;
        }
        else if (compSelection === "paper") {
            victory = true;
        }
    }

    if (victory) {
        return `You win! ${playerSelection} beats ${compSelection}.`
    }
    else {
        return `You lose! ${compSelection} beats ${playerSelection}.`
    }
}

console.log(playRound("rock", "rock"));
console.log(playRound("rock", "paper"));
console.log(playRound("rock", "scissors"));
console.log(playRound("paper", "rock"));
console.log(playRound("paper", "paper"));
console.log(playRound("paper", "scissors"));
console.log(playRound("scissors", "rock"));
console.log(playRound("scissors", "paper"));
console.log(playRound("scissors", "scissors"));
