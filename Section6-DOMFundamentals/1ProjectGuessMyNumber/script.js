"use strict";

console.log(document.querySelector(".message").textContent);
//imamo 2 fajla dodatna styles.css i index.html u kojima se nalazi pocetni izgled nase aplikacije
//Ovaj document.queryselector je obicni metod koji koristimo kako bi dobili ono sto se nalazi u klasi "message" koju smo oznacili tako u fajlu index.html
//dalje smo dodatnim operatorom . uzeli samo tekst koji se nalazi u tom paragrafu kojeg smo oznacili s message.

//.message ide zato sto se klasama pristupa pomocu tacke unutar HTML fajla, dok se ID-ovima pristupa pomocu #. Da smo message oznacili kao ID bilo bi (#message)
//O ovom document.queryselector cemo pricat kasnije!
//Sad kad udjemo na stranicu idemo desni klik -> inspect -> console i vidimo dole da ima nesto ispisano
//Kad stavimo mis preko njega ono ozncai na stranici gdje se to nalazi! dalje dodamo ovo .textContent dobijemo ovaj tekst koji se nalazi u tom paragrafu i samo njega ispise u nasem slucaju "Start guessing..."
