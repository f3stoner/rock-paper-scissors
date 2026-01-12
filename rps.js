function getComputerChoice() {
    let key = Math.random();
    if (key <= .33) {
        return "rock";
    } else if (key >= .33 && key <= .67) {
        return "paper";
    } else {
        return "scissors";
    }
}
//console.log(getComputerChoice());//


function getHumanChoice(string) {
    let choice = prompt("Enter Choice Here");
    return choice;
}

//console.log(getHumanChoice());//

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();
        
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            return alert("You lose! Paper beats Rock. The score is Player - " + humanScore + " Computer - " + computerScore + "");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return alert("You win! Rock beats Scissors. The score is Player - " + humanScore + " Computer - " + computerScore + "");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return alert("You win! Paper beats Rock. The score is Player - " + humanScore + " Computer - " + computerScore + "");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            return alert("You lose! Scissors beats Paper. The score is Player - " + humanScore + " Computer - " + computerScore + "");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return alert("You win! Scissors beats paper. The score is Player - " + humanScore + " Computer - " + computerScore + "");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            return alert("You lose! Rock beats Scissors. The score is Player - " + humanScore + " Computer - " + computerScore + "");
        } else {
            return alert("You Tied. The score is Player - " + humanScore + " Computer - " + computerScore + "");
    }
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

playGame();