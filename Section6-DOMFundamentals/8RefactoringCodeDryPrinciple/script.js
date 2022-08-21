"use strict";

//DRY PRINCIPLE -> DONT REPEAT YORSELF
//U ovom primjreu cemo nauciti kako refakturirati nas kod, odnosno kako da izbjegnemo situacije u kojima se ponavlja
//nas kod, odnosno napisati takav kod da u njemu nema previse ponavljanja!
//U nasem primjeru to se odnosi kada je guess previse visok ili prenizak, kod je gotovo potpuno isti!

let highscore = 0;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

function displayMsg(msg) {
  document.querySelector(".message").textContent = msg;
}

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = score;
    displayMsg("Start guessing...");
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = " ";
  });

  //When there is no input
  if (!guess) {
    displayMsg("No number!");
  }

  //when player wins
  else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "Correct Number";
    displayMsg("Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //if guess is wrong!
  else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent =
      //guess < secretNumber ? "Too low!" : "Too high!";
      displayMsg(guess < secretNumber ? "Too low!" : "Too high!");
      //radi i ovo jer ce se proslijediti ili jedan ili drugi string u f-ju
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //      document.querySelector(".message").textContent = "You lost the game!";
      displayMsg("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }

  //when guess is too low
  //else if (guess < secretNumber) {
  //  if (score > 1) {
  //    document.querySelector(".message").textContent = "Too low!";
  //    score--;
  //    document.querySelector(".score").textContent = score;
  //  } else {
  //    document.querySelector(".message").textContent = "You lost the game!";
  //    document.querySelector(".score").textContent = 0;
  //  }
  //}

  ////when guess is too high
  //else if (guess > secretNumber) {
  //  if (score > 1) {
  //    document.querySelector(".message").textContent = "Too high!";
  //    score--;
  //    document.querySelector(".score").textContent = score;
  //  } else {
  //    document.querySelector(".message").textContent = "You lost the game!";
  //    document.querySelector(".score").textContent = 0;
  //  }
  //}
  //ovim smo pokrili sve slucajeve sta se desi ako unese manji broj, veci ili jednak od zamisljenog
});

//jedina stvar koja se mijenja kada je guess > secretNumber i guess > secretNumber je ovaj string!
//Zasto je lose imati kod koji se ponavlja? Recimo ako se mora romijeniti nesto u kodu, moramo to promijeniti onoliko puta koliko se kod ponavlja
//Obicno lkada prvi put pismeo kod nije nikakav problem da e kod ponavlja, nego kad se zavrsi sa aplikaicjom, onda treba sageldati nas citav kod i uraditi
//rekonstrukciju naseg koda da se eliminise kod koji se ponavlja na vise mjesta :

//1. Identify the duplicate code!
// -Mi smo ga identifikovali u guess >< secretNumber
// - to mozemo na ovakav nacin uraditi (pogledati gore iznad, ono sto je zakomentarisano to je bilo u proslom fajlu )

// Vidimo nacin na koji smo to postigli, iskoristili smo ternarni operator ?
//2. Ponekad, najbolji nacin da se uradi refactoring ondonsno rekonstrukcija jeste da se napravi adekvatna funkcija koja ce raditi vise stvari od jednom i pozvati je na vise mjesta !
//napravicemo funkcije za bilo koju od ovih DOM manipulacija koje pocinju sa document.querySelector...
//Mozemo jednostavno napravit funkciju, i onda samo funkcije pozivati!
//napravili smo funkcije samo za ".message" i proslijedjujemo funkciju dje god ima ovakva linija koda
//document.querySelector(".message").textContent = "Too low!";
//U ovom slucaju kod funkcije, recimo funkcija se zove displayMessage, uvijek cemo znati sta radi ova funkcija, bez da moramo razumijevat bespotreban kod!
