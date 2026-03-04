function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
      return "rock";
    } else if (randomNumber < 0.66) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");
    return choice;
  }

  function playRound(humanChoice, computerChoice) {
    e;
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
  }

  console.log("--- Round 1 ---");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("--- Round 2 ---");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("--- Round 3 ---");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("--- Round 4 ---");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("--- Round 5 ---");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("--------------------");
  console.log(`FINAL SCORE: Human ${humanScore} - Computer ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Game over! The computer won.");
  } else {
    console.log("The game ended in a draw!");
  }
}

playGame();
