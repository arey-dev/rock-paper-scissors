/**
 * Performs mulitple rounds of Rock Paper Scissors base on user input
 * Keeps a score of player and computer in all rounds.
 * 
 * @return {string} returns the score and winner of the game
 */
function game() {
  let playerScore = 0, computerScore = 0;

  const numOfRounds = +prompt("For how many rounds do you want to play?", 1);

  for(let i = 0; i < numOfRounds; i++) {
    let playerChoice = prompt("Enter the choice of hand you want ot play");
    let roundResult = playRound(playerChoice, getComputerChoice());
    if(roundResult.includes('Win')) playerScore++;
    else if(roundResult.includes('Lose')) computerScore++;

    console.log(roundResult);
  }

  console.log(`Game ends! Final scores are, Player: ${playerScore} Computer: ${computerScore}`);

  if(playerScore > computerScore) console.log("Player Wins");
  else if(playerScore < computerScore) console.log("Computer Wins");
  else console.log("No one wins! It's a draw!");
}

/**
 * Plays a single round of Rock Paper Scissors
 * 
 * @param {string} playerSelection a choice of hand to play, not case sensitive
 * @param {string} computerSelection computer generated choice of hand to play
 * @return {string} returns a string that says wether or not the player wins
 */
function playRound(playerSelection, computerSelection) {
  // capitalize player input
  const playerChoice = playerSelection.charAt(0).toUpperCase()
                      + playerSelection.substring(1).toLowerCase();

  if(playerChoice == computerSelection) {
    return "It's a draw";
  }

  switch(playerChoice) {
    case "Rock":
      if(computerSelection == "Scissors") {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
      } else if(computerSelection == "Paper") {
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
      }
    case "Paper":
      if(computerSelection == "Rock") {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
      } else if(computerSelection == "Scissors") {
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
      }
    case "Scissors":
      if(computerSelection == "Paper") {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
      } else if(computerSelection == "Rock") {
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
      }
  }
}

/**
 * Randomly generates a choice for computer to play
 * 
 * @return {string} returns a string, either "Rock", "Paper", or "Scissors"
 */
function getComputerChoice() {
  const num = randomNumber();

  if(num == 1) return "Rock";
  if (num == 2) return "Paper";
  if (num == 3) return "Scissors"
}

/**
 * Generate random number from 1 to 3
 * 
 * @return {number} must be integer
 */
function randomNumber() {
  let rand = 0.5 + Math.random() * 3;

  return Math.round(rand);
}