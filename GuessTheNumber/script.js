"use strict";

let secretNumber = Math.trunc(Math.random() * 21);
let count = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

let checkButtonFunction = function() {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage(" 🛑 Enter a number")
  } else if (guess === secretNumber) {
    displayMessage = "🎉 Correct Guess"
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (count > highscore) {
      highscore = count;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (count > 1) {
      displayMessage(guess > secretNumber ? " 📈 Too High" : " 📉Too Low")
      count--;
      document.querySelector(".score").textContent = count;
    } else {
        displayMessage("💥 You lost ")
    }
  }
};

let againFunction = function() {
  count = 20;
  secretNumber = Math.trunc(Math.random() * 21);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing..")
  document.querySelector(".score").textContent = count;
};

document.querySelector(".check").addEventListener("click", checkButtonFunction);
document.querySelector(".again").addEventListener("click", againFunction);
