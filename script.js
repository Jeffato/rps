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
    // console.log(humanChoice);

    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    // console.log(` Player: ${humanChoice} Computer: ${computerChoice}`);

    // 0 -> Loss, 1 -> Win, 2 -> Tie
    let outcome = 0;
    
    if (humanChoice === computerChoice){
        outcome = 2;
        return outcome;
    }

    switch (humanChoice){
        case 'Rock':
            if(computerChoice === "Scissors") outcome = 1;
            break;
        case 'Paper':
            if(computerChoice === "Rock") outcome = 1;
            break;
        case 'Scissors':
            if(computerChoice === "Paper") outcome = 1;
            break;
    }

    return outcome;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let outcome = playRound(humanSelection, computerSelection);

        if (outcome === 1){
            humanScore++;
            console.log(`You win Round ${i + 1}! ${humanSelection} beats ${computerSelection}.`);
        }

        else if (outcome === 0){
            computerScore++;
            console.log(`You lose Round ${i + 1}! ${computerSelection} beats ${humanSelection}.`);
        }

        else{
            console.log(`Round ${i + 1} is a tie! ${computerSelection} v. ${humanSelection}.`);
        }
    }

    if(humanScore > computerScore){
        console.log("You Win!")
    }

    else{
        console.log("Computer wins...")
    }
}

playGame()