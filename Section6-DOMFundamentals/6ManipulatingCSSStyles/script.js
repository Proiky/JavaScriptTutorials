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

  //When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  }

  //when player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    //ovdje nema tacke jer zelimo da promijenimo boju citavom body-u a ne samo nekom dijelu oznacenom sa nekim id-om ili klasom!
    //vidimo nacin na koji mijenjamo boju .style.backgroundColor = pa u navodnicima boja

    document.querySelector(".number").style.width = "30rem";
    //vidimo da obavezno kda god mijenjamo STIL na ovaj nacin rez koji damo MORA biti dat kao string!!!
    //s ovim smo postigli da kad pogodimo broj tacan, prosiri se kockica oko broja :)
    //naravno s ovim ne mijenjamo styles.css nego samo definisemo programski sta se desi kad neko pogodi broj.
    //to je takozvani IN-LINE property u index.html
  }

  //when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }

  //when guess is too high
  else if (guess > secretNumber) {
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

//------LEKCIJA 6 NASTAVLJA ODAVDE ------//
//Manipulacijom DOM-a takodjer mozemo mijenjati i CSS stilove.
//Zelimo da promijenimo citav background color u zeleno kad igrac pogodi pravi broj
//to se naravno desi u ovom dijelu gdje igrac pobijedi ondnosno u tom if statementu
