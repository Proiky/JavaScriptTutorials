//U ovom video cemo se baviti "ESC" keypress eventima

"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

function openModal() {
  //console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//vec mozemo zatvorit modal na x i da kliknemo pored - sad cemo napravit da to radi i pomocu ESC tipke na tastaturi
//HOW TO RESPOND TO KEYBOARD EVENTS?
//Keyboard eventi su globalni, i obicno kad slusamo o njima, to se primijeni na citav dokument!

//kad to ovako stavimo na document to znaci da na citavom dokumentu osluskujemo za taj event
document.addEventListener("keydown", function (e) {
  //e -> event object koji se stvori kad se izvrsi element
  console.log(e.key); //sad nam u konzoli sve ispise o toj tipki koju smo pritisnuli!
  //dodali smo .key jer smo vidjeli da ima to polje objekat koji napravi event
  //sad znamo i koji je key pritisnut, odnosno koja tipka
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    //kad se ovo desi zelimo da escape zatvori modal!
    //Ali kkao znamo da je modal visible? -> ako modal ima klasu "hidden" onda je nevidljiv!
    //Mozemo provjeriti da li element ima neku klasu na sl nacin:
    closeModal();
  }
});
//postoje jos keyup - nakon sto dignemo prst sa tastature, keydown - odma cim stisnemo tipku, keypress -> dok drzimo tipku ono se nekoliko puta izvrsi
//addEventListener napravi objekat kad se desi taj event. Sad moramo pogledat taj event kako bi definisali samo za jednu tipku

//OVIM SMO ZAVRSILI NAS PROJEKT!
