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
        console.log(`It's a tie! you both chose ${playerSelection}.`);
        return "tie";
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
        console.log(`You win! ${playerSelection} beats ${compSelection}.`);
        return "player";
    }
    else {
        console.log(`You lose! ${compSelection} beats ${playerSelection}.`);
        return "computer";
    }
}

function game() {
    let playerWins = 0;
    let compWins = 0;
    const maxRounds = 5;

    for (let round = 1; round <= maxRounds; ++round) {
        console.log(`Round ${round} of ${maxRounds}`);
        let victor = playRound(getPlayerChoice(), getComputerChoice());

        if (victor === "player") {
            ++playerWins;
        }
        if (victor === "computer") {
            ++compWins;
        }

        console.log(`Score: Player - ${playerWins}, Computer - ${compWins}`)
    }

    let finalResult;
    if (playerWins > compWins) {
        finalResult = "Victory!";
    }
    else if (playerWins < compWins) {
        finalResult = "Defeat.";
    }
    else {
        finalResult = "Tie.";
    }

    console.log("Final Result: " + finalResult);
}

game();
