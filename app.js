let playerSelection;
let computerSelection;
const selections = ['rock', 'paper', 'scissors'];
const resetButton = document.querySelector('.reset');
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('div.selections button');

function playGame() {
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      playerSelection = btn.innerText.toLowerCase();
      playRound(playerSelection, computerSelection);
    })
  })
}

resetButton.addEventListener('click', () => {
  resetScore();
  buttons.forEach(btn => {
    btn.disabled = false; // enable selection buttons after previous round
  });
})

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerSelection();
  let result = checkWinner(playerSelection, computerSelection);
  switch (result) {
    case 'player':
      playerScore++;
      document.querySelector('.player-score').textContent = playerScore;
      break;
    case 'computer':
      computerScore++;
      document.querySelector('.computer-score').textContent = computerScore;
      break;
    case 'draw': ; //show who chose what and don't change the score
      break;
    default: return;
  }
  displayResult(playerSelection, computerSelection); // display computer and player selections
  displayWinner(playerScore, computerScore); // display a winner if the score == 5
}


function displayResult(playerSelection, computerSelection) {
  document.querySelector('.round-result').textContent = `You chose ${playerSelection}\. Computer chose ${computerSelection}\.`;
}

function getComputerSelection() {
  return selections[Math.floor(Math.random() * 3)]; //choose random selection
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'draw';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'player';
  } else {
    return 'computer';
  }
}

function displayWinner(playerScore, computerScore) { //end round, display a winner and disable selection buttons
  if (playerScore === 5 || computerScore === 5) {
    disableButtons();
    resetButton.style.display = 'block'; //show reset button

    if (playerScore > computerScore) {
      document.querySelector('.game-result').textContent += `You won the game!`;
      document.querySelector('.game-result').style.color = 'green';
    } else {
      document.querySelector('.game-result').textContent = `Computer won the game.`;
      document.querySelector('.game-result').style.color = 'red';
    }
  } else return;
}

function disableButtons() {
  buttons.forEach(btn => {
    btn.disabled = true;
  });
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  document.querySelector('.player-score').textContent = playerScore;
  document.querySelector('.computer-score').textContent = computerScore;
  document.querySelector('.game-result').textContent = '';
  document.querySelector('.round-result').textContent = '';
  resetButton.style.display = 'none';
}

playGame();