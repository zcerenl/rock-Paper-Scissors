// DOM VARIABLES
const userScoreSpan = document.querySelector("#user-score"),
  computerScoreSpan = document.querySelector("#comp-score"),
  resultDisplay = document.querySelector("#result-display"),
  rockDiv = document.querySelector("#rock"),
  paperDiv = document.querySelector("#paper"),
  scissorsDiv = document.querySelector("#scissors"),
  resetButton = document.querySelector(".reset");

let userScore = 0,
  computerScore = 0;

function reset() {
  resultDisplay.innerHTML = "Game Starts Now.";
  userScore = 0;
  computerScore = 0;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
}

// rockpaper
function getComputedChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  userScore++;
  resultDisplay.innerHTML = `${userChoice} beats ${computerChoice}, you win!.`;
  userScoreSpan.innerHTML = userScore;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  resultDisplay.innerHTML = `${computerChoice} beats ${userChoice}, you lose!.`;
  computerScoreSpan.innerHTML = computerScore;
}

function draw() {
  resultDisplay.innerHTML = "Draw.";
}
/* 
Kazanma Durumlarım 
rs sp pr
Kaybetme Durumlarım
sr ps rp
Berabere Durumlarım
pp ss rr
*/

function game(userChoice) {
  const computerChoice = getComputedChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      draw();
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      lose(userChoice, computerChoice);
      break;
  }
}

function main() {
  rockDiv.addEventListener("click", function () {
    game("rock");
  });
  paperDiv.addEventListener("click", function () {
    game("paper");
  });
  scissorsDiv.addEventListener("click", function () {
    game("scissors");
  });
}

main();
