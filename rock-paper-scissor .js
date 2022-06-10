let computerSelect = null;
function computerPlay(computerSelect) {
  let gamechoices = ["rock", "paper", "Scissor"];
  return (computerSelect =
    gamechoices[Math.floor(Math.random() * gamechoices.length)]);
}

let player = confirm("You want play the game?");
if (player === true) {
  alert("Come!! lets try");
} else if (player === false) {
  confirm("Try Again");
} else {
  alert("Thanks lets play");
}

const scoreBoard = () => {
  let playerScore = 0;
  let computerScore = 0;
  let ties = 0;

  for (let round = 0; round < 5; round++) {
    let rounds = round + 1;
    let computerChoice = computerPlay(computerSelect);
    let playerChoice = null;

    playerChoice = prompt("pick one of the options: Rock,Paper,Scissor");
    if (playerChoice === null) {
      alert("Hmm you don't like the game?");
      return;
    }
    playerChoice = playerChoice.toLocaleLowerCase();
    if (
      playerChoice !== "rock" &&
      playerChoice !== "paper" &&
      playerChoice !== "scissor"
    ) {
      rounds = round - 1;
      alert("Went Wrong! Choose between Rock Paper & Scissor");
      continue;
    }
    if (playerChoice === computerChoice) {
      console.log("It was a tie!");
      ties = ties + 1;
    }
    if (playerChoice == "rock" && computerChoice == "paper") {
      console.log("You lost!, Paper beats Rock!") + computerScore + 1;
      computerScore = computerScore + 1;
    }
    if (playerChoice == "paper" && computerChoice == "scissor") {
      console.log("You lost!, Scissor beats Paper!");
      computerScore = computerScore + 1;
    }
    if (playerChoice == "scissor" && computerChoice == "rock") {
      console.log("You lost!, Rock beats Scissor!");
      computerScore = computerScore + 1;
    }
    if (playerChoice == "paper" && computerChoice == "rock") {
      console.log("You won!, Paper beats Rock!") + (playerScore + 1);
      playerScore = playerScore + 1;
    }
    if (playerChoice == "scissor" && computerChoice == "paper") {
      console.log("You won!, Scissor beats paper!");
      playerScore = playerScore + 1;
    }
    if (playerChoice == "rock" && computerChoice == "scissor") {
      console.log("You won!, Rock beats Scissor!");
      playerScore = playerScore + 1;
    }
    console.log(
      "Round " +
        rounds +
        "\ncomputer's choice = " +
        computerChoice +
        "\nYour choice = " +
        playerChoice +
        "\nPlayer's Score:" +
        playerScore +
        "\nComputers Score:" +
        computerScore
    );
  }
  if (playerScore >= 3) {
    console.log("Best of 5: Hurray You win!");
  } else if (computerScore >= 3) {
    console.log("Best of 5: Computer win!! \nYou loose the game");
  } else {
    console.log("Its a tie!");
  }
};
scoreBoard();
