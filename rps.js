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
    let computerScore = 0;
    let humanScore = 0;
    const maxScore = 5;
    const score = document.querySelector(".results");
    const scoreboard = document.querySelector(".scoreboard");

    function endGame (winner){
            score.textContent = "";
            humanScore = 0;
            computerScore = 0;
            return scoreboard.textContent = "Game Over " + winner + " wins!";
        }

    function updateScore(winner){
        if (winner === "human") {
            humanScore++;
            if (humanScore === 5) {
                endGame("human");
            } else {
            return scoreboard.textContent = "Player - " + humanScore + " Computer - " + computerScore + "";
            }
        } else {
            computerScore++;
            if (computerScore === 5) {
                endGame("computer");
            } else {
            return scoreboard.textContent = "Player - " + humanScore + " Computer - " + computerScore + "";
            }
        }
    }
    

    function playRound(humanChoice, computerChoice) {
 
        computerChoice = getComputerChoice();
        
        if (humanChoice === "rock" && computerChoice === "paper") {
            updateScore("computer");
            return score.textContent = "You lose! Paper beats Rock.";
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            updateScore("human");
            return score.textContent = "You win! Rock beats Scissors.";
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            updateScore("human");
            return score.textContent = "You win! Paper beats Rock.";
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            updateScore("computer");
            return score.textContent = "You lose! Scissors beats Paper.";
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            updateScore("human");
            return score.textContent = "You win! Scissors beats paper.";
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            updateScore("computer");
            return score.textContent = "You lose! Rock beats Scissors.";
        } else {
            return score.textContent = "You Tied.";
    }

    }

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {playRound("rock")});
paper.addEventListener("click", () => {playRound("paper")});
scissors.addEventListener("click", () => {playRound("scissors")});