"use strict";

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3 + 1)) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

function getPlayerChoice(choice) {
  return choice.toLowerCase();
}

function playRound(computer, player) {
  if (
    (computer === "rock" && player === "scissors") ||
    (computer === "paper" && player === "rock") ||
    (computer === "scissors" && player === "paper")
  ) {
    console.log("Computer wins");
  } else if (computer === player) {
    console.log("Draw");
  } else {
    console.log("Player wins!");
  }
}

playRound(getComputerChoice(), "scissors");
