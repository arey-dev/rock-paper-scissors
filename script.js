/**
 * Plays a single round of Rock Paper Scissors
 * 
 * @param {string} playerSelection an input from a player, not case sensitive
 * @param {string} computerSelection an input from the opponenet, computer generated
 * @return {string} returns a declaration of wether or not the player wins
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
 * @return {string} returns either "Rock", "Paper", or "Scissors"
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