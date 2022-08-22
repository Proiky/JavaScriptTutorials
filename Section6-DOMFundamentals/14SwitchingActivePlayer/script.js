"use strict";

//-----------GAME FUNCTIONALITY---------//

//pravimo varijablu koja ce imat 0 ako igra prvi igrac, a 1 ako igra drugi igrac
//zato koristimo 0 i 1 za igrace jedan i dva, jer je array zero-based pa nam je to esencijalno jer dole pravimo array za score-ove

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

diceEl.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //mijenjamo score igraca na 0
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //switchamo igraca. Ako je trenutni igrac 0 neka bude 1, ako je 1 neka bude 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
    //it will add the class if its not there, if it is there it will remove it!
  }
});
