"use strict";

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
  let selection = prompt("Please enter your selection").toLowerCase();
  while (true) {
    if (["rock", "paper", "scissors"].includes(selection)) {
      console.log(`Player chose: ${selection}`);
      return selection;
    } else {
      selection = prompt(
        "Invalid input, please enter a string between rock, paper or scissors."
      );
    }
  }
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
  for (let i = 0; i < 5; i++) {
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
    }
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

playGame();
