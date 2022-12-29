let computerSelection;
let playerSelection;
let score = 0;

function getPlayerChoice() {
  return prompt("choose rock, paper, scissors");
}

function getComputerChoice() {
  const choices = [
    "rock",
    "paper",
    "scissors"
  ];
  const randomIndex = [Math.floor(Math.random() * choices.length)];
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = getPlayerChoice();

  console.log("player chose", playerSelection);
  console.log("computer chose", computerSelection);

  if (playerSelection == computerSelection) {
    console.log("draw");
  } else {
    if (playerSelection == "rock") {
      if (computerSelection == "scissors") {
        console.log("win");
        score++;
      } else if (computerSelection == "paper") {
        console.log("lose");
        score--;
      }
    }
    else if (playerSelection == "scissors") {
      if (computerSelection == "paper") {
        console.log("win");
        score++;
      } else if (computerSelection == "rock") {
        console.log("lose");
        score--;
      }
    }
    else if (playerSelection == "paper") {
      if (computerSelection == "rock") {
        console.log("win");
        score++;
      } else if (computerSelection == "scissors") {
        console.log("lose");
        score--;
      }
    }
  }
  console.log("overall score", score);
  return score;
}

  function playGame() {
    for (let i = 0; i < 5; i++) {
      playRound(playerSelection, computerSelection)
    }
  }

  playGame();