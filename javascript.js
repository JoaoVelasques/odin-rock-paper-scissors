// Make a function in which the computer chooses between rock paper and scissors with math.random (1-3) and assigning rock, paper or scissors to each number//
let computerPick = Math.floor(Math.random() * 3)
console.log(computerPick)
function computerChoice() {
    if (computerPick === 0 ) {
        return computerChoice = "rock"
    }   else if (computerPick === 1) {
        return computerChoice = "paper"
    }   else {
        return computerChoice = "scissors"
    }   
}
console.log(computerChoice())

// Make a function in which the player picks between rock paper and scissors //

let playerPick = prompt("Please choose between Rock, Paper or Scissors")

function playerChoice() {
    if (playerPick.toLowerCase() === "rock") {
        return playerChoice = "rock"
    }   else if (playerPick.toLowerCase() === "paper") {
        return playerChoice = "paper"
    }   else if (playerPick.toLowerCase() === "scissors") {
        return playerChoice = "scissors"
    }   else {
        return prompt("You must have made a typo! Please choose between Rock, Paper or Scissors")
    }
}

console.log(playerChoice())


// Compare the two picks //


function compare(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return console.log("You draw, play again!")
    }
    else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper") {
        return console.log("You win the round")
    }
    else {
        return console.log("You loose the round")
    }
}

console.log(compare(computerChoice, playerChoice))