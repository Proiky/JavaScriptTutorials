"use strict";

//Pocinjemo sa novim projektom koj ise zove MODAL WINDOW
//Funkcionise na nacin. Imamo 3 buttona i kad kliknemo na neki od njih otvori nam neki modal window sa razlicitim sadrzajem. Modal window se pozicionira preko samog page-a
//Da izadjemo iz tog window-a mozemo kliknuti x ili pored tog window-a
//Jako je popularan koncept, obicno reklame, akodjer iz winddowa moemo izaci ako kliknemo esc

//-------Ovaj projekat ce se malo raditi drugacije-----------//
//Sve potrebne stvari i elemente cemo imati organizovane lijepo, svaku u svojoj varijabli!

//3 buttona, show-modal, close-modal, modal buttoni:

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
// kad ovo ovako napisemo kad ovo logujemo u konzolu
console.log(btnsOpenModal);
//vidimo samo prvi button, i to je limit querySelectora!
//Zato nam treba querySelectorAll
//ovaj node-list koji dobijemo u konzoli je nesto slicno arrayu i mozemo loop-ati kroz njega:

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
  //ovako prikazemo tekst sva 3 ova
  //u konzoli dobijemo: show modal 1, show modal 2, show modal 3
}
