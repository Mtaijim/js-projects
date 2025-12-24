const choices = ["Rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerscoreDisplay = document.getElementById("playerscoreDisplay");
const computerscoreDisplay = document.getElementById("computerscoreDisplay");
let playerscore = 0;
let computerscore = 0;
function playgame(playerchoices) {
  const computerchoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerchoices === computerchoice) {
    result = "TIE";
  } else {
    switch (playerchoices) {
      case "Rock":
        result = computerchoice === "Rock";
        result = "tie";
      case "Rock":
        result = computerchoice === "scissor" ? "YOU WIN !" : "YOU LOSE";
        break;
      case "scissor":
        result = computerchoice === "paper" ? "YOU WIN !" : "YOU LOSE";
        break;
      case "paper":
        result = computerchoice === "Rock" ? "YOU WIN !" : "YOU LOSE";
        break;
    }
  }
  playerDisplay.textContent = `player: ${playerchoices}`;
  computerDisplay.textContent = `computer: ${computerchoice}`;
  resultDisplay.textContent = `${result}`;
  resultDisplay.classList.remove("greenText", "redText");
  switch (result) {
    case "YOU WIN !":
      resultDisplay.classList.add("greenText");
      playerscore++;
      playerscoreDisplay.textContent = playerscore;
      break;
    case "YOU LOSE":
      resultDisplay.classList.add("redText");
      computerscore++;
      computerscoreDisplay.textContent = computerscore;
      break;
  }
}
