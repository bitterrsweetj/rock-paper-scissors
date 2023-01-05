const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

let computerSelection;

function resetGame() {

}

function startGame() {
  const selectionButtons = document.querySelectorAll('button');
  selectionButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const playerSelection = btn.innerText.toLowerCase();
      playRound(playerSelection);
    });
  });
}
console.log(startGame());


function playRound(playerSelection) {


  if (playerScore >= 5 || computerScore >= 5) {
    displayWinner();
  } else {
    computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    if (winner === "player") {
      playerScore++;
      document.getElementById('player-score').textContent = playerScore;
    } else if (winner === "computer") {
      computerScore++;
      document.getElementById('computer-score').textContent = computerScore;
    } else {
      return;
    }
    displayRound(playerSelection, computerSelection);
  }
}

function checkScore (playerScore, computerScore) {
  if (playerScore === 5 || computerScore === 5) {
    return true;
  } else { 
    return false; 
  }
}

function displayWinner() {
  if (playerScore == 5) {
    document.querySelector('.result').textContent = 'Yay you won 5 times!';
  } else {
    document.querySelector('.result').textContent = 'Sorry, computer won 5 times.';
  }
  document.querySelector('.reset').style.display = 'block';
}

function displayRound(playerSelection, computerSelection) {
  document.querySelector('.player-choice').textContent = `You chose ${playerSelection}`;
  document.querySelector('.computer-choice').textContent = `Computer chose ${computerSelection}`;
}
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


  }  // debug prints out the result on the next click 
}


