const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 >= now - 2018);

//PRECEDENCE - PRAVILA PRIORITETA 
//Jako bitna stranica je MDN za koristenje potrebnih stvari unutar JS-a
//Na toj stranici mozemo pronaci i precednce tj prioritete izvrsavanja svih operatora
//Precedence je neki broj u toj tablici koji je dodijeljen svakom operatoru. Ako je veci broj on ima veci prioritet izvrsavanja
//Npr + ima precendece 14 a >= 12, pa se prvo izvrse + i - pa onda poredjenje >=

let x, y;
x = y = 10 + 5 + 6;
//se je ovo moguce na osnovu precdence-a operatora 
let averageAge = ageJonas + ageSarah / 2;
console.log(averageAge);
//primjer koristenja prioriteta opreatora
//ovo nece dat dobar rezultat zato sto prioritet uzme ageSarah / 2; 
//ono sto moramo uraditi jeste iskorititi zagrade kod ageJonas + ageSarah kako bi ono dobilo veci prioritet

let averageCorrectAge = (ageJonas + ageSarah) / 2; //ovo ce nam dati dobar rezultat!!


