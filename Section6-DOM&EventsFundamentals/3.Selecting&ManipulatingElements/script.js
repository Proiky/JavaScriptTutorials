"use strict";

console.log(document.querySelector(".message").textContent);
//Dobili smo textContent u prvom videu.
//Pored toga sto mozeom dobiti text content, takodjer ga mozemo i postaviti !

document.querySelector(".message").textContent = "Correct Number!";
//na ovaj nacin smo set-ali sta god se nalazilo u dijelu koji ima class = message, tj. njegov textContent na 'correct number'. Kao sto vidimo to se odmah promijenilo i u browseru!
console.log(document.querySelector(".message").textContent);
//sad je correct number, tako smo ga promijeinli pomocu JS-a

//sad cemo uraditi isto sa "Secret number" i "score"
//Sad gledamo u index.html da vidimo njihov class (id)
//Kod secret number-a klasa vidimo da je "number" a kod score-a je class "score"

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

//obavezno staviti .textContent jer moramo naglasiti sta zelimo promijeniti, jer ima puno vise u tom paragrafu od samo teksta. Moramo rec da hocemo text da zamijenimo sa 13 i 10

//Sad manipuliemo input element, i vidimo da on ima class = guess

//console.log(document.querySelector(".guess").value);
//Value property koristimo da dobijemo vrijednost koja se nalazi u tom polju koje ima klasu guess
//takodjer se moze napisati za promjenu te vrijednosti na isti nacin:
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
//sad ce ovo ispisat 23

//STA AKO HOCEMO KAD KLIKNEMO NA BUTTON DA NAM ONO UVIJEK ISPISE OVU VRIJEDNOST KOJA SE STALNO MIJENJA ?
//->to cemo u novom videu!
//->pogledati naredni folder!
