"use strict";

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

document.addEventListener("DOMContentLoaded", function () {
  document.body.append(rockBtn, paperBtn, scissorsBtn);
});

rockBtn.setAttribute("style", "width: 80px; height: 30px; margin-right: 10px;");
rockBtn.textContent = "Rock";
paperBtn.setAttribute(
  "style",
  "width: 80px; height: 30px; margin-right: 10px;"
);
paperBtn.textContent = "Paper";
scissorsBtn.setAttribute("style", "width: 80px; height: 30px;");
scissorsBtn.textContent = "Scissors";

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

function getPlayerChoice() {
  let selection = "";
}

function playRound(computer, player) {
  if (
    (computer === "rock" && player === "scissors") ||
    (computer === "paper" && player === "rock") ||
    (computer === "scissors" && player === "paper")
  ) {
    console.log("Computer wins");
    return "NPC";
  } else if (computer === player) {
    console.log("Draw");
    return "DRAW";
  } else {
    console.log("Player wins!");
    return "PLAYER";
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
