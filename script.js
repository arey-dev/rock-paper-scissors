/**
 * Randomly generates a choice for computer to play
 * 
 * @return {string} either "Rock", "Paper", or "Scissors"
 */
function getComputerChoice() {
  let num = randomNumber();

  if(num == 1) return "Rock";
  if (num == 2) return "Paper";
  if (num == 3) return "Scissor"
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