const choices = ["Rock", "Paper", "Scissors"]

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
    console.log(playRound(playerSelection,computerSelection))
}
 
  