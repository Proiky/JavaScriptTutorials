"use strict";

//-----------GAME FUNCTIONALITY---------//
//In this part we will implement holding the score

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
let playing = true;

diceEl.classList.add("hidden");

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    //console.log(dice);

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //document.getElementById(`current--${activePlayer}`).textContent = 0;
      //currentScore = 0;
      //activePlayer = activePlayer === 0 ? 1 : 0;
      //player0El.classList.toggle("player--active");
      //player1El.classList.toggle("player--active");
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
  }

  //2. Check if player's score is >=100
  //If not - switch to the next player

  //if yes - finish the game!
  if (scores[activePlayer] >= 10) {
    //we want ot assign player-winner class koja vec ima u styles.css i sad je moramo iskoristiti
    playing = false;
    diceEl.classList.add("hidden");

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
  } else {
    switchPlayer();
  }
});

//zadnja stvar koju implementiramo jeste da kad se igra zavrsi da se ne moze vise igrati!
//dodali smo playing varijablu koja je boolean i stavili smo je na true. Onda smo rekli u svim buttonima if(playing){uradi ono sto se treba desiti kad se igra igra}
//Ako je neko dosao do 100, onda stavimo playing = false i onda se nista od tog gore nece moci iskoristiti!
//Ovo je jako bitna logika i nacin implementacije, koji se moze u jako mnogo projekata koristiti
