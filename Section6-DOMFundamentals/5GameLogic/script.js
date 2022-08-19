"use strict";
//IMPLEMENTING THE GAME LOGIC!
//U proslom fajlu smo se bavili sta se desi kad neko klikne na button, sad cemo napraviti logiku igre i definisati kako ona funkcionise!

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//ovo sam malo zaboravio, math.trunc zaokruzi broj, odbije decimalu, math.random daje random broj izmedju 0 i 1
document.querySelector(".number").textContent = secretNumber;
//ovim smo stavili ovo sto je u numberu da bude tamo gdje treba bit upitnik na stranici

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
  //ovim smo pokrili sve slucajeve sta se desi ako unese manji broj, veci ili jednak od zamisljenog
});
//ovo sve smo preuzeli iz fajlova prethodnog foldera, samo bez komentara

//WE WANT ALL THE DATA TO BE AVAILABLE SOMEWHERE IN OUR CODE, NOT JUST IN THE DOM!

//OVIM SMO IMPLEMENTIRALI PRAVILA IGRE I NJENU FUNKCIONALNOST!
//Jedino sto fali jeste highscore i button AGAIN, al to ceom uradit za 2 videa jer zelimo prvo da vidimo
//kako manipulisati css style-ove pomocu JS-a
