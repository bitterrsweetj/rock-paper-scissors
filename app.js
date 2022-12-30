const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const selectionButtons = document.querySelectorAll('button');
let computerSelection;

function resetGame() {

}

function startGame() {
  selectionButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const playerSelection = btn.innerText.toLowerCase();
      computerSelection = getComputerChoice();
      playGame(playerSelection, computerSelection);
    });
  });
}
console.log(startGame());

function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
    return 'player';
  } else {
    return 'computer';
  }
}


function playGame(playerSelection, computerSelection) {
  let resultDisplay = document.getElementById('result');
  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
      resultDisplay.textContent = "Yay you won!";
    } else {
      resultDisplay.textContent = "Oh no you lose :'(";
    } 
  } else {
    if (checkWinner(playerSelection, computerSelection) === "player") {
      playerScore++;
      let playerScoreDisplay = document.getElementById('player-score');
      playerScoreDisplay.textContent = playerScore;
    } else if (checkWinner(playerSelection, computerSelection) === "computer") {
      computerScore++;
      let computerScoreDisplay = document.getElementById('computer-score');
      computerScoreDisplay.textContent = computerScore;
    }  // debug prints out the result on the next click 
  }
}
