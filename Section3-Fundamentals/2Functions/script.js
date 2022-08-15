// FUNKCIJE!

/*Funkcija je jedan od najvaznijih dijelova koda u citavom programiranju.
To je jednostavno neki dio koda kojeg mozemo koristiti mnogo puta unutar jednog programa!
*/
'use strict';

function logger() {
    console.log(`Nasa prva funkcija`);
}

logger();
//ovako se poziva funkcija!

function fruitProccesor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProccesor(5, 0); //5 i 0 se nazivaju argumenti!
console.log(appleJuice);

const appleOrangeJuice = fruitProccesor(2, 4);
console.log(appleOrangeJuice);

//obicno su funkcije s parametrima, i malo su komplikovanije. Iako nekad koristimo i funkcije kao sto je prvobitna koju smo napisali
//TO radimo kada imamo neki dio koda za koji znamo da cemo ga konstantno koristiti kroz citav program!

//console log, number, string itd su sve funkcije, ali ugradjene koje mi mozemo koristiti!!

const num = Number('23');
//takodjer funkcija

//---------------FUNCTION DECLARATIONS VS EXPRESSIONS --------------------
/*ovo sve do sad sto smo koristili su takozvane deklaracije funkcija! */

function izracunajGodine1(birthYear) {
    return 2037 - birthYear;
}
//genericna funkcija koja radi za bilo koju godinu koju proslijedimo

const age1 = izracunajGodine1(1998);

//ovo je bilo function declaration

//ovako izgleda function expression:

const izracunajGodine2 = function (birthYear) {
    return 2037 - birthYear;
}
//nismo dali ime funkciji, nego smo je smjestili u varijablu, i sad ona predstavlja tu funkciju!

const age2 = izracunajGodine2(1991);
//ovako se ona poziva!

console.log(age1, age2);


//U JAVA SCRIPTU, FUNKCIJE SU VRIJEDNOSTI!, PA IH ZBOG TOGA MOZEMO SMJESTITI U VARIJABLE!!

/*  Jako bitna osobina je sto mozemo pozivati deklarisane funkcije u kodu prije nego ih napisemo!
*/

const godine1 = calcAge1(1991);

function calcAge1(godina) {
    return 2022 - godina;
}

//vidimo da nema errora i da je ovo sasvim moguce
//ona ce se svakako izracunati, jer ce bit potrazena u kodu!


/*OVO NE RADI ZA FUNCTION EXPRESSIONS, NE MOZEMO JE POZVATI PRIJE NEGO JE NAPISEMO */

