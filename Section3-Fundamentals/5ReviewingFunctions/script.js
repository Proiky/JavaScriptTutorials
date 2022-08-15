const calcAge = function (godinaRodjenja) {
    return 2037 - godinaRodjenja;
}
//godinaRodjenja je lokalna varijabla u obje funkcije i ne znaju jedna za drugu!


const godineDoPenzije = function (godinaRodjenja, ime) {
    const godine = calcAge(godinaRodjenja);
    const penzija = 65 - godine;
    if (penzija > 0) {
        console.log(`${ime} ide u penziju za ${penzija} godina`);
        return penzija;
    } else if (penzija === 0) {
        return `${ime} ide u penziju ove godine!`;
    } else {
        console.log(`${ime} se vec penzionisao!`);
        return -1; //-1 je specijalan znak kod returna i oznaka je da je nesto pogresno
    }
    //return penzija;
    //return `${ime} ide u penziju za ${penzija} godina`;
}

console.log(godineDoPenzije(1991, 'Edin'));
console.log(godineDoPenzije(1960, 'Zijad'));

//ovo da negativan broj, odnosno on se penzionisao prije 12 godine!


//3 tipa funkcija:

//obicna funkcija:
function edo1(ime) {
    return ime;
}
//poziv ovakve funkcije
edo1('edo');
console.log(edo1('edo'));

//arrow function
const edo2 = ime => ime;
//poziv ovakve funkcije:
edo2('edo');
console.log(edo2('edo'));

//function expression
const edo3 = function (ime) {
    return ime;
}
//poziv ovakve funkcije:
edo3('edo');
console.log(edo3('edo'));

