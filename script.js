"use strict";

//select all elements
const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissors = document.querySelector(".scissors");
const buttonsAll = document.querySelectorAll(".box img");
let randomSignImg = document.querySelector(".picture");
let whoWinTitle = document.querySelector(".whoWins");
const newGameButton = document.querySelector(".reset");
let checkBox = document.getElementById("customCheckbox");

//function returning rock paper or scissors
function showSign() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      randomSignImg.setAttribute("src", "Images/OneRock.png");
      return "rock";
    case 2:
      randomSignImg.setAttribute("src", "Images/TwoPaper.png");
      return "paper";
    case 3:
      randomSignImg.setAttribute("src", "Images/ThreeScissors.png");
      return "scissors";
  }
}

//AddListener on all three img - buttons
buttonsAll.forEach((btn) => {
  btn.addEventListener("click", () => {
    let mySign = btn.classList[0];
    let comSign = showSign();

    newGameButton.classList.remove("hide");
    newGameButton.addEventListener("click", reset);

    //check box automatic new game start
    if (checkBox.checked) setTimeout(reset, 4000);

    if (whoWins(mySign, comSign) == mySign) whoWinTitle.textContent = "YOU WON";

    if (whoWins(mySign, comSign) == comSign)
      whoWinTitle.textContent = "YOU LOSE";

    if (whoWins(mySign, comSign) == "Draw") whoWinTitle.textContent = "DRAW";

    //highlight selection
    btn.classList.add("highlight");

    //hide unselect sings
    buttonsAll.forEach((b) => {
      if (b != btn) b.classList.add("hide");
    });
  });
});

//logic who will win
function whoWins(singOne, signTwo) {
  //draw if is equal
  if (singOne === signTwo) {
    return "Draw";
  }

  //rock beats scissors
  if (
    (singOne == "rock" && signTwo == "scissors") ||
    (singOne == "scissors" && signTwo == "rock")
  ) {
    return "rock";
  }

  //scissors beats paper
  if (
    (singOne == "scissors" && signTwo == "paper") ||
    (singOne == "paper" && signTwo == "scissors")
  ) {
    return "scissors";
  }

  //paper beats rock
  if (
    (singOne == "paper" && signTwo == "rock") ||
    (singOne == "rock" && signTwo == "paper")
  ) {
    return "paper";
  }
}

//function reset
function reset() {
  whoWinTitle.textContent = "Who will win?";
  randomSignImg.setAttribute("src", "");
  buttonsAll.forEach((btn) => btn.classList.remove("hide", "highlight"));
  newGameButton.classList.add("hide");
}
