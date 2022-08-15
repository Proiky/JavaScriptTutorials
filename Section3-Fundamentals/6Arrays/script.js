// -------------ARRAYS----------------//

//Finally a data structure!!

//const friend1 = "edo";
//const friend2 = "amar";
//const friend3 = "dino";

//umjesto ovoga mozemo jednostavno napraviti neki kontejner za prijatelje!
//-------------Create arrays-----------//

const friends = ['Edo', 'Amar', 'Dino'];
console.log(friends);

//postoji jos jedan nacin da se kreira ARRAY

const godine = new Array(1991, 1684, 2008, 2020);
//ovdje smo kreirali pomocu ove funkcije Array zato sto smo pozvali (). Takodjer ne radi bez kljucne rijeci NEW

//Pristupanje elementima arraya:

console.log(friends[0]); // pocinju od indeksa 0 kao i kod c++-a!
//ovo nam vraca "Edo"
console.log(friends[2]);
//ovo vraca Dino.

//---------Koliko elemenata ima u arrayu ? -----------------
console.log(friends.length);
//length nije funkcija nego property objekta, al o tome cemo kasnije

//Ovo se obicno koristi da dobijem ozadnji element unutar Array-a 
console.log(friends.length - 1);
//isto kao kod c++-a 

//Sem pristupanja elemtnima, mozemo [] iskoristiti i da stavimo nove stvari unutar Array-a/

friends[2] = 'Haris';
console.log(friends);
//iako je const koristeno za inicijaliziranje arraya, mozemo mu mijenjati vrijednosti unutar njega!

// ARRAY NIJE PRIMITIVNA VRIJEDNOST, I UVIJEK GA MOZEMO MUTIRATI ODNOSNO PROMIJENITI PA CAK IAKO JE CONST!!

//NE mozemo promijeniti citav Array na nacin :

// friends = ['Bob', 'Alice'] -> dobijemo da se ne moze mijenjati konstantna vrijednost!

const jonas = ['Jonas', 'Schmedtmann', 2039 - 1991];
//ovo je sasvim normalno i moguce!
const firstName = 'Edo';
const edo = [firstName, 'Mujkic', 24];
//i ovo je moguce

//Mozemo ubacivati i array u array!

const sivko = [firstName, 'Sivko', 24, edo];
console.log(sivko);
console.log(sivko.length);

//PRIMJER SA ARRAY-om:

const calcAge = (birthYear) => 2037 - birthYear;

const years = [1990, 1967, 2002, 2010, 2018];
//array nekih godina

//Sad cemo moc koristit calcAge funkciju i sacuvati vrijednosti koje nam vrati za vrijednosti ovog arraya i smjestit ga u novi array

//calcAge(Years); -> ovo naravon ne radi jer je year array
//osnovne operacije ne rade na array-ima 


const age1 = calcAge(years[0]);
//ovo radi naravno
const age2 = calcAge(years[1]);
const age3 = calcAge(years[3]);
const age4 = calcAge(years[years.length - 1]);

//ove sve godine
const ages = [age1, age2, age3, age4];
const ages2 = [calcAge(years[0])];
console.log(ages);
console.log(ages2);