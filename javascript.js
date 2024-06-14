//Gets a computer to choose using math.floor and math.random * 3 to get an integer between 0-2 and assigning each of the numbers to rock, paper, scissors.


function getComputerChoice() {
let computerPick = Math.floor(Math.random() * 3);
    if (computerPick === 0 ) {
        return computerChoice = "rock";
}   else if (computerPick === 1) {
    return computerChoice = "paper";
    }   else {
        return computerChoice = "scissors";
}   
}
//calls the getComputerChoice function.
getComputerChoice()


//Prompts a player for a choice, converts it to lower case and if he makes a typo, prompts the player again.
function getPlayerChoice() {
    let playerPick = prompt("Please choose between Rock, Paper or Scissors");
    if (playerPick.toLowerCase() === "rock") {
        return playerChoice = "rock";
}   else if (playerPick.toLowerCase() === "paper") {
        return playerChoice = "paper";
    }   else if (playerPick.toLowerCase() === "scissors") {
        return playerChoice = "scissors";
    }   else {
        return getPlayerChoice();
    }
}
//calls the getPlayerChoice function.
getPlayerChoice()


//creates the game function.
function game() {

//creates the variables for the player's and computer's score.
let playerScore = 0;
let computerScore = 0;

//calls a round, compares the player and computer's choice and gives a result for each possible outcome.
function round(computerChoice, playerChoice) {

    if (computerChoice === playerChoice) {
        return console.log("You draw, play again!");
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore += 1;
        console.log("You win this round! Rock beats scissors. Your score is " + playerScore + ". The computer score is " + computerScore);
        return;
    }
    else if (playerChoice === "paper" && computerChoice === "rock"){
        playerScore += 1;
        console.log("You win this round! Paper beats rock. Your score is " + playerScore + ". The computer score is " + computerScore);
        return;
    }
    else if (playerChoice === "scissors" && computerChoice === "rock"){
        playerScore += 1;
        console.log("You win this round! Scissors beats rock. Your score is " + playerScore + ". The computer score is " + computerScore);
        return;
    }
    else if (playerChoice === "rock" && computerChoice === "paper"){
    computerScore += 1;
    console.log("You've lost the round... Paper beats rock. Your score is " + playerScore + ". The computer score is " + computerScore);
    return;
    }
    else if (playerChoice === "scissors" && computerChoice === "rock"){
        computerScore += 1;
        console.log("You've lost the round... Rock beats scissors. Your score is " + playerScore + ". The computer score is " + computerScore);
        return;
    }
    else if (playerChoice === "paper" && computerChoice === "scissors"){
        computerScore += 1;
        console.log("You've lost the round... Scissors beats paper. Your score is " + playerScore + ". The computer score is " + computerScore);
        return;
    }
}
//calls the round function.
round(computerChoice, playerChoice);
//plays 4 more rounds of rock-paper-scissors.
getComputerChoice();
getPlayerChoice();
round(computerChoice, playerChoice);
getComputerChoice();
getPlayerChoice();
round(computerChoice, playerChoice);
getComputerChoice();
getPlayerChoice();
round(computerChoice, playerChoice);
getComputerChoice();
getPlayerChoice();
round(computerChoice, playerChoice);


//calls the winner of the game and point results.
if (playerScore > computerScore) {
    console.log("You've won the game! " + playerScore + "-" + computerScore);
    }
    else if (playerScore < computerScore) {
        console.log("You've lost! " + playerScore + "-" + computerScore);
    }
    else {
        console.log("You've drawn " + playerScore + "-" + computerScore);
    }
}

//calls the game function.
game();
