function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    switch (choice){
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function cleanInput(input){
    if (!input.length > 0) return "ERROR";
        
    let output = input[0].toUpperCase();
    output += input.slice(1).toLowerCase();

    return output;
}

function getHumanChoice(){
    let input = prompt("Choose: Rock, paper or Scissors.");
    let humanChoice = cleanInput(input)
    console.log(humanChoice);

    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    console.log(` Player: ${humanChoice} Computer: ${computerChoice}`);
    
    if (humanChoice === computerChoice){
        console.log("Tie!");
        return;
    }

    let humanWin = false;

    switch (humanChoice){
        case 'Rock':
            if(computerChoice === "Scissors") humanWin = true;
            break;
        case 'Paper':
            if(computerChoice === "Rock") humanWin = true;
            break;
        case 'Scissors':
            if(computerChoice === "Paper") humanWin = true;
            break;
    }

    if (humanWin){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }

    else{
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }

    return;
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);