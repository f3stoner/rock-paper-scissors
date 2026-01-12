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

let humanScore = 0;
let computerScore = 0;



function playGame() {
    
}