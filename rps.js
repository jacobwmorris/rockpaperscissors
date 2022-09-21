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
        return "player";
    }
    else {
        return "computer";
    }
}

let playerScore = 0;
let compScore = 0;
let gameFinished = false;
const scoreToWin = 5;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

function turnRed(element, shade) {
    element.classList.remove("bgGreen" + shade);
    element.classList.remove("bgYellow" + shade);
    element.classList.add("bgRed" + shade);
}

function turnYellow(element, shade) {
    element.classList.remove("bgRed" + shade);
    element.classList.remove("bgGreen" + shade);
    element.classList.add("bgYellow" + shade);
}

function turnGreen(element, shade) {
    element.classList.remove("bgRed" + shade);
    element.classList.remove("bgYellow" + shade);
    element.classList.add("bgGreen" + shade);
}

function checkForWinner() {
    if (gameFinished)
        return;
    
    if (playerScore >= scoreToWin) {
        const resultHolderUl = document.querySelector("#resultHolder");
        const scoreLabelLi = document.querySelector("#scoreLabel");
        turnGreen(resultHolderUl, "2");
        scoreLabelLi.textContent = "VICTORY!";
        gameFinished = true;
    }
    if (compScore >= scoreToWin) {
        const resultHolderUl = document.querySelector("#resultHolder");
        const scoreLabelLi = document.querySelector("#scoreLabel");
        turnRed(resultHolderUl, "2");
        scoreLabelLi.textContent = "DEFEAT.";
        gameFinished = true;
    }
}

function rpsChoice(event) {
    if (gameFinished)
        return;

    const playerChoice = event.target.getAttribute("id");
    const compChoice = getComputerChoice();
    if (playerChoice === null)
        return;

    const winner = playRound(playerChoice, compChoice);
    const roundResultDiv = document.querySelector("#roundResult");

    if (winner === "player") {
        roundResultDiv.textContent = `You win! ${playerChoice} beats ${compChoice}.`;
        turnGreen(roundResultDiv, "1");
        ++playerScore;
        const playerScoreLi = document.querySelector("#playerScore");
        playerScoreLi.textContent = "Player: " + playerScore;
        checkForWinner();
    }
    else if (winner === "computer") {
        roundResultDiv.textContent = `You lose! ${compChoice} beats ${playerChoice}.`;
        turnRed(roundResultDiv, "1");
        ++compScore;
        const compScoreLi = document.querySelector("#compScore");
        compScoreLi.textContent = "Computer: " + compScore;
        checkForWinner();
    }
    else {
        roundResultDiv.textContent = `It's a tie! you both chose ${playerChoice}.`;
        turnYellow(roundResultDiv, "1");
    }
}

rockButton.addEventListener("click", rpsChoice);
paperButton.addEventListener("click", rpsChoice);
scissorsButton.addEventListener("click", rpsChoice);
