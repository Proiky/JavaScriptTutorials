//HOW TO MANIPULATE CLASSES WITH JAVASCRIPT

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//moramo dodati event handlerena buttone i to mozemo petljom ovom iznad
//na ovaj nacin svaki od ovih buttona ima svoj event listener, ali svi rade isto :)

function openModal() {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  //  btnsOpenModal[i].addEventListener("click", function () {
  //    //console.log("Button clicked");
  //    //nama treba da se ovaj hidden modal prikaze
  //    //u index.html smo stavili class="modal hidden" -> ovo hiden ga cini sakrivenim, to kad maknemo modal se prikaze!
  //    modal.classList.remove("hidden");
  //    //u varijabli modal se nalazi klasa modal, i pomocu classList.remove brisemo HIDDEN dio
  //    //ovo je vec dovoljno dobro
  //    overlay.classList.remove("hidden");
  //    //sad imamo i overlay kad kliknemo na neki window
  //});
  btnsOpenModal[i].addEventListener("click", openModal);
  //ovo je jako puno jednostavnije nego ovaj sav kod iznad - DRY PRINCIP
}

//btnCloseModal.addEventListener("click", function () {
////implementiramo sta ce se desit kad kliknemo x s modal window-a
//modal.classList.add("hidden");
//overlay.classList.add("hidden");
////kad kliknemo x, nestane modal window i overlay
//});

////takodjer zelimo da se ovo sve isto izvrsi ako kliknemo pored window-a

//overlay.addEventListener('click',function(){
//modal.classList.add("hidden");
//}

//ovo krsi DRY princip pa cemo stavit sve u funkciju

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
//ovo je mnogo ljepse i mnogo vise nalici programiranju, takodjer je lakse razumiti sta se desava

//na pocetak dodajemo i funkciju openModal
//Vidimo koliko je bitno znati koristiti se klasama unutar html fajla.
//Manipulisanjem klasa unutar JS-a nas kod je strasno dinamican i moze biti jako kreativan i kvalitetan.
//Samim tim klase su kljucne za ispravno i intuitivno funkcionisanje internet stranica
//POMOCU classList -> mozemo ukljucivati, iskljucivati, dodavati stvari unutar klase
