const CHOICES = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection === "Rock" && computerSelection === "Paper" || 
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`
    } else {
        return `You both choose ${computerSelection}. It's a tie!`
    }
}

const div = document.querySelector(".result");
const playRoundResult = document.createElement("h4");
const currentScore = document.createElement("h4");
const finalResult = document.createElement("h2");

function game() {
    // play one round and show this round's result
    const playerSelection = this.innerText;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection,computerSelection);
    playRoundResult.innerText = result;
    div.appendChild(playRoundResult);

    // record scores and show them
    if(result.includes("Win")) {
        playerScore += 1
    }else if(result.includes("Lose")) {
        computerScore += 1
    }
    currentScore.innerText = `You ${playerScore} : Computer ${computerScore}`;
    div.appendChild(currentScore);

    // game ends if one player reaches 5 points
    if (playerScore === 5) {
        finalResult.innerText = "GAME OVER! YOU WIN!";
        div.appendChild(finalResult);
        buttons.forEach(button=>button.removeEventListener("click",game));        
    } else if (computerScore === 5) {
        finalResult.innerText = "GAME OVER! COMPUTER WINS!";
        div.appendChild(finalResult);
        buttons.forEach(button=>button.removeEventListener("click",game));
    }
}

buttons.forEach(button => {button.addEventListener("click",game)});

