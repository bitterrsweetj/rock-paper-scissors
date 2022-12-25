function getComputerChoice() {
  const choices = [
    "Rock", 
    "Paper", 
    "Scissors"
  ];
  let randomChoice = choices[Math.floor(Math.random()*choices.length)];
  console.log(randomChoice);
}

getComputerChoice();