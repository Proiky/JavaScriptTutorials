"use strict";

/*
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 10;
console.log(document.querySelector(".guess").value);

//Ovdje smo stali na zadnjem videu, sad gledamo kako manipulisati ove buttone, da nam uvijek daju adekvatan odziv
//This is going to be the first time our code reacts to something that happens in the DOM

*/

//Moramo koristit event listener!

//MOramo prvo izabrati element gdje event treba da se desi: to je na button-u check. I obicno je na buttonima i slicnim stvarima koje user koristi
//class-a ovog buttona je btn check al i drugi button ima istu klasu.

document.querySelector(".check").addEventListener("click", function () {
  //what should happen? ->ovaj function expression je nista drugo nego event handler
  console.log(document.querySelector(".guess").value);
  //document.querySelector(".message").textContent = "Correct Number!";
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //type off smo napravili da vidimo da sta god se unese bude string, pa moramo ovo konvertat u broj

  //provjeravamo da li je user ista unio zapravo? to uvijek treba da ide prvo
  if (!guess) {
    //guess bude 0 ako se nista ne unese, medjutim ako je 0 moramo koristit !guess da to bude true ako je guess 0 pa da se ovaj blok izvrsi
    document.querySelector(".message").textContent = "No number!";
  }
});
//dodali smo addEventListener koji treba da osluskuje kada ce se desiti neka promjena. POsto je to metod ide u ()
//Dalje smo u te zagrade proslijedili 'click' jer to je ono sta mi uradimo kad KLIKNEMO na button, pa on treba da ceka upravo to
//Dalje moramo mu reci sta da uradi kad se desi ovaj event, a tu cemo definistai funkciju koja ce imat kod koji ce opisat sta ce se desiti kad neko klikne na button
//Kad kliknemo check, ova 9-ka se pojavi u konzoli

//Vidimo da je addEventListener specijalan tip funkcije koji osluskuje da li ce se neki event desiti, a drugi argument je uvijek funkcija koja definise sta se desi kad doddje do tog elementa!

//Mozemo cak u ovu funkciju ubaciti i dio DOM-manipulacije, pa kad se izvrsi klik, promijeni se recimo i ova poruka desno

//----------------------igra------------------//

//Gore smo u funkciji rekli kad aneko klikne na button, da se u varijablu guess smjesti ono sto se nalazi u polju tj ono sto unesemo
