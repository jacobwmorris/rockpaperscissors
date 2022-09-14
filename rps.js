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

let rockCt = 0;
let paperCt = 0;
let scissorsCt = 0;
const iterations = 500;

for (let i = 0; i < iterations; ++i) {
    let choice = getComputerChoice();

    if (choice === "rock") {
        ++rockCt;
    }
    else if (choice === "paper") {
        ++paperCt;
    }
    else {
        ++scissorsCt;
    }
}

let rockPct = rockCt / iterations * 100;
let paperPct = paperCt / iterations * 100;
let scissorsPct = scissorsCt / iterations * 100;
console.log(`Results: ${rockPct}% rock, ${paperPct}% paper, ${scissorsPct}% scissors.`);
