"use strict";

//-----------GAME FUNCTIONALITY---------//

let currentScore = 0;

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add("hidden");

//rolling the dice:
//imamo 3 btn-a btn new, roll, again
btnRoll.addEventListener("click", function () {
  //1.Generating a random numbe(r 1-6:
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2.Display the dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  //.src pristupi SOURCE-u unutar index.html fajla!! a ovim template literallom napisemo ime dice-a tj slike koju treba ocitati

  //3.Check for for rolled 1, if true switch to next player:
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    //switch to next
  }
});
