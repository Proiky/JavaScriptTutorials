//Boolean logic -> branch of computer science which uses true and false values to solve complex logical values.
//It uses several logical operators to combine true and false values!
//Pricat cemo samo o najjednostavnijim primjerima!


// THE AND, OR & NOT OPERATORS (&& \\ !)
// standardno kao i kod c++-a, ako imamo if(a && b...) znaci da svi moraju bit tacni da bi se uslo u taj blok
// ako imamo if(a\\b) dovoljno je da je samo jedna tacna ulazimo u blok if
// ako imamo if(!a) -> onda ako a  nije true onda cemo uc u petlju

//---------PRIMJERI---------

const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
//true
console.log(hasDriversLicence || hasGoodVision);
//true

hasDriversLicence = true;
hasGoodVision = false;

console.log(hasDriversLicence && hasGoodVision);
//false
console.log(hasDriversLicence || hasGoodVision);
//true

console.log(!hasDriversLicence && hasGoodVision);
//false
console.log(!hasDriversLicence || hasGoodVision);
//false


//if (hasDriversLicence && hasGoodVision) {
//    console.log(`Sarah is able to drive`);
//} else {
//    console.log(`Someone else shold drive`);
//}
// vraca false jer je hasGoodVision = false i ispise -> someone else should drive!

const isTired = true;
console.log(hasDriversLicence || hasGoodVision || isTired);
//true cause 2 are true, dovoljno da jedan bude true

console.log(hasDriversLicence && hasGoodVision && isTired);
//vraca false jer je jedan false!


if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive`);
} else {
    console.log(`Someone else shold drive`);
}
//dat ce opet false jer je jedan uslov true!

//drugi primjer, prvi smo zakomentarisali