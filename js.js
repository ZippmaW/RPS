"use strict";

const display = document.createElement("div");
const pScore = document.createElement("div");
const cScore = document.createElement("div");
const result = document.createElement("div");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;

document.addEventListener("DOMContentLoaded", function () {
  display.append(pScore, cScore, result);
  document.body.appendChild(display);
  document.body.append(rockBtn, paperBtn, scissorsBtn);
});

rockBtn.setAttribute("style", "width: 80px; height: 30px; margin-right: 10px;");
rockBtn.textContent = "Rock";
rockBtn.id = "rock";
paperBtn.setAttribute(
  "style",
  "width: 80px; height: 30px; margin-right: 10px;"
);
paperBtn.id = "paper";
paperBtn.textContent = "Paper";
scissorsBtn.setAttribute("style", "width: 80px; height: 30px;");
scissorsBtn.textContent = "Scissors";
scissorsBtn.id = "scissors";
display.textContent = "Score";
pScore.textContent = "Player: " + playerScore;
cScore.textContent = "Computer: " + computerScore;
result.textContent = "Click a button to begin the game";

rockBtn.addEventListener("click", (event) =>
  playRound(getComputerChoice(), getPlayerChoice(event))
);
paperBtn.addEventListener("click", (event) =>
  playRound(getComputerChoice(), getPlayerChoice(event))
);
scissorsBtn.addEventListener("click", (event) =>
  playRound(getComputerChoice(), getPlayerChoice(event))
);

function getPlayerChoice(event) {
  console.log(event.target.id);
  return event.target.id;
}

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3 + 1)) {
    case 1:
      console.log("Computer chose: rock");
      return "rock";
    case 2:
      console.log("Computer chose: paper");
      return "paper";
    case 3:
      console.log("Computer chose: scissors");
      return "scissors";
  }
}

function playRound(computer, player) {
  if (
    (computer === "rock" && player === "scissors") ||
    (computer === "paper" && player === "rock") ||
    (computer === "scissors" && player === "paper")
  ) {
    console.log("Computer wins");
    computerScore += 1;
    cScore.textContent = "Computer: " + computerScore;
    result.textContent = "Computer wins this round!";
    if (computerScore >= 5) {
      alert("Computer wins");
    }
  } else if (computer === player) {
    result.textContent = "It's a draw!";
  } else {
    console.log("Player wins!");
    playerScore += 1;
    pScore.textContent = "Player: " + playerScore;
    result.textContent = "Player wins this round!";
    if (playerScore >= 5) {
      alert("Player wins!");
    }
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  switch (playRound(getComputerChoice(), getPlayerChoice())) {
    case "NPC":
      computerScore += 1;
      break;
    case "DRAW":
      computerScore += 1;
      playerScore += 1;
      break;
    case "PLAYER":
      playerScore += 1;
      break;

      console.log(`Player score: ${playerScore}`);
      console.log(`Computer score: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log(`Player won the game with ${playerScore} !`);
  }
  if (computerScore > playerScore) {
    console.log(`Computer won the game with ${computerScore} !`);
  } else if (playerScore === computerScore) {
    console.log(`It is a draw!`);
  }
}
