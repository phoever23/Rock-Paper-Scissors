const choices = ["Rock", "Paper", "Scissors"]
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function getPlayerChoice() {
    const choice = prompt("Choose one from Rock, Paper and Scissors:")
    return choice.charAt(0).toUpperCase() + choice.substring(1).toLowerCase()
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

function game() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection,computerSelection)
    console.log(result)

    if(result.includes("Win")) {
        playerScore += 1
    }else if(result.includes("Lose")) {
        computerScore += 1
    }

    console.log(`You ${playerScore} : Computer ${computerScore}`)
}

for (let i = 0; i < 5; i++) {
    game();    
}
  