const buttons = document.querySelectorAll('[data-choice]');
const spanP = document.querySelector('[data-score="player"]');
const spanC = document.querySelector('[data-score="computer"]');
const score = document.querySelector('.score');

let playerScore = 0;
let computerScore = 0;

// add event listener to all buttons that
// display results of playRound()
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.getAttribute('data-choice');
    const div = document.querySelector('.round');

    // get result of playRound()
    const rndResult = playRound(playerChoice, getComputerChoice());
    div.innerHTML = '<h4>' + rndResult + '</h4>';

    if(rndResult.includes('Win')) {
      playerScore++;
      spanP.textContent = playerScore;
    }

    if(rndResult.includes('Lose')) {
      computerScore++;
      spanC.textContent = computerScore;
    }
  });

  button.addEventListener('click', game);
});

/**
 * Performs mulitple rounds of Rock Paper Scissors base on user input
 * Keeps a score of player and computer in all rounds.
 * 
 * @return {string} returns the score and winner of the game
 * @todo create helper functions that handles multiple rounds
 */
function game() {
  if(playerScore == 5 || computerScore == 5) {
    const winner = (playerScore == 5) ? 'Player Wins' : 'Computer Wins';

    const divWin = document.querySelector('.result');
    const elem = document.createElement('h2');
    elem.textContent = `Game ends! ${winner}`;
    divWin.prepend(elem);

    spanC.textContent = spanP.textContent = computerScore = playerScore = 0;
    setTimeout(() => divWin.firstElementChild.remove(), 2000);
  }
}

/**
 * Plays a single round of Rock Paper Scissors
 * 
 * @param {string} playerSelection a choice of hand to play, not case sensitive
 * @param {string} computerSelection computer generated choice of hand to play
 * @return {string} returns a string that says wether or not the player wins
 * 
 * @todo change the return value for each case
 * @todo alert or log to console the result of round
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