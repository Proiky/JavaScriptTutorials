"use strict";
//ideja je da se rolla i da se to dodaje na current score, kada kliknemo hold score, dodaje se na final score ovaj skor koji smo dobili
//kada se rolla 1 izgubimo current score i onda ide drugi
//first to 100 wins!
//new game -> resetuje game

//-------POCINJEMO PRAVITI IGRU--------------//

//napravimo igru da izgleda kao pocetna: nema ove kockice i score-ovi su 0:0

//u index.html sad imamo i klase i id-ove
//vidimo da imamo sekcije za player0 i player1
//score-ovi playera imaju isto ime klase "score" al id im je razlicit

const score0El = document.querySelector("#score--0");
//Score 0 element -> DOM element
//koristimo # jer je to za ID
const score1El = document.querySelector("#score--1");
//ako znamo da radimo sa ID-om mozemo ga i ovako dobiti!! ->vazno:
//const score11 = document.getElementById("score--1");
//getElementById je malo brzi cak!
const diceEl = document.querySelector(".dice");

score0El.textContent = 0;
score1El.textContent = 0;
//Ovo je string 0 jer ih takve primi HTML

//Moramo sakriti ovu kockicu, moramo kerirati klasu u style.css hidden i staviti display na none
diceEl.classList.add("hidden");
