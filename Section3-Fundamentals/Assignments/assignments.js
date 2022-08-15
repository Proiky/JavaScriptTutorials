'use strict';
//-----------------== i === ------------------
/*
const numNeighbours = prompt("How many neighbours does your contry have?");
if (Number(numNeighbours) === 1) {
    console.log('only one neighbor');
} else if (numNeighbours > 1) {
    console.log('More than one border');
} else {
    console.log('No borders');
}*/

//----------------------SWITCH---------------------
/*

const jezik = prompt("Koji je vas nacionalni jezik?");

switch (jezik) {
    case 'Mandarin':
    case 'Chinese':
        console.log("Your language has MOST number of native speakers");
        break;
    case 'Spanish':
        console.log("Your language has second most number of native speakers");
        break;
    case 'English':
        console.log("Your language has third most number of native speakers");
        break;
    case 'Hindi':
        console.log("Your language has fourth most number of native speakers");
        break;
    case 'Arabic':
        console.log("Your language has fifth most number of native speakers");
        break;
    default:
        console.log("Your language is also cool");

}
*/

/*
//--------------------TERNARY OPERATOR------------------
const population = 130000000;
console.log(population >= 33000000 ? "Bosnia's population is greater than 33 000 000" : "Bosnia's population is lower than 33 000 000");
*/

//-------------------FUNCTIONS-------------------

/*
function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} people, and its capital city is ${capitalCity}`);
}

describeCountry('Bosnia', 3000000, 'Sarajevo');
*/

//--------------------Function declaration vs expression--------------

//function declaration:

/*
const worldPopulation = 7900000000;
function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

const china = 1441000000;
const percentageOfChina = percentageOfWorld1(china);
console.log(percentageOfChina);

const bosnia = 3000000;
const percentageOfBosnia = percentageOfWorld1(bosnia);
console.log(percentageOfBosnia);

const portugal = 33000000;
const percentageOfPortugal = percentageOfWorld1(portugal);
console.log(percentageOfPortugal);
*/

//function expression:

/*
const percentageOfWorld2 = function (population) {
    return (population / worldPopulation) * 100;
}

const worldPopulation = 7900000000;
const bosnia = 3000000;
const portugal = 33000000;
const china = 1441000000;

console.log(percentageOfWorld2(china));
console.log(percentageOfWorld2(bosnia));
console.log(percentageOfWorld2(portugal));
*/

//------------------Arrow functions----------------//

/*
const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;

const worldPopulation = 7900000000;
const bosnia = 3000000;
const portugal = 33000000;
const china = 1441000000;

console.log(percentageOfWorld3(china));
console.log(percentageOfWorld3(bosnia));
console.log(percentageOfWorld3(portugal));

//----------------Functions calling other functions---------//

function describePopulation(country, population) {
    return `${country} has ${population} people which is about ${percentageOfWorld3(china)}% of the world`;
}

console.log(describePopulation('China', 1440000000));


//----------------ARRAYS-----------------------//

const populations = [3000000, 33000000, 1440000000, 7000000];

console.log(populations.length === 4);

const percentages = [percentageOfWorld3(populations[0]), percentageOfWorld3(populations[1]), percentageOfWorld3(populations[2]), percentageOfWorld3(populations[3])];
console.log(populations);
console.log(percentages);

*/

//-------------------ARRAY OPERATIONS/METHODS----------------//

const komsije = ['Hrvatska', 'Srbija', 'Crna Gora', 'Albanija', 'Slovenija', 'Kosovo'];
console.log(`Full komsije:`);
console.log(komsije);

console.log(`Add utopia:`);
komsije.push('Utopia');
console.log(komsije);

console.log(`Remove utopia:`);
komsije.pop();
console.log(komsije);

console.log(`Is Germany a neighbour?:`);
if (!komsije.includes('Germany')) {
    console.log(`No! Probably not an eastern european country`);
}

console.log(`Ukloni Hrvatsku:`);
komsije.shift();
console.log(komsije);

console.log(`Dodaj Hrvatsku na pocetak:`);
komsije.unshift('Hrvatska');
console.log(komsije);

console.log(`Pronadji index srbije i zamijeni za Sandzak:`);
console.log(`Indeks Srbije`);
console.log(komsije.indexOf('Srbija'));

const srbija = komsije.indexOf('Srbija');
komsije[srbija] = 'Sandzak';
console.log(komsije);
