# odin-rock-paper-scissors

A game of rock paper scissors being played on the console using javascript

pseudocode:

Make the computer pick between rock paper or scissors
Make the player pick between rock paper and scissors
Compare the two picks
Come up with the round winner
Play up to 5 rounds
Declare the winner of the game



Things i've learned/had trouble with while making this assignment:

- The round function didn't work right when it called for the playerChoice and computerChoice functions, I renamed them to getPlayerChoice and getComputerChoice and playerChoice/computerChoice became variables(?) then it started to work
- The console.log(getPlayerChoice()) worked the same as calling the function getPlayerChoice(), when I erased the console.log function I had to call the function to get it to work.
- Had trouble with the two variables keeping scores because they were outside the game() function, sometimes their value wouldn't add up, sometimes it would, couldn't figure out why 