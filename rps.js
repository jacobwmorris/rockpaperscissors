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

function getPlayerChoice() {
    let choice;
    let finished = false;

    while (!finished) {
        choice = prompt("Rock, paper, scissors! What is your choice?").toLowerCase();

        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            finished = true;
        }
        else {
            console.log("Warning: you must choose rock, paper, or scissors");
        }
    }

    return choice;
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

function game() {
    let playerWins = 0;
    let compWins = 0;

    for (let round = 1; round <= 5; ++round) {

    }
}
