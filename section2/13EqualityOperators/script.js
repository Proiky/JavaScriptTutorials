// EQUALITY == i === !

const age = 18;
if (age === 18) console.log('You just turned 18!!');
// ako imamo samo jednu liniju koda ne treba nam {} kao i kod c++-a

// operator vraca TRUE vrijednost ako i samo ako su s obje strane poptuno isti brojevi!
// dok recimo '18' === 18 ce dat false a '18' == 18; ce dat true!

//=== -> strict equal { jer ne vrsi type coercion }
//== -> loose equal { does type coercion }


if (age == 18) console.log('You just turned 18!!');
//i ovo ce dat istu situaciju kao i prosli blok koda!
//iako su striktno isti, takodjer su i loosely isti!

//----------UVIJEK TREBA KORISTITI === ------------------

//pomocu prompt funkcije mozemo dobiti vrijednost s neke web straince!

const favourite = prompt("What's your favourite number");
//ovo je u sustini kao cin unutar c++-a, to nam na stranici izbaci da nesto upisemo!
console.log(favourite);
console.log(typeof favourite);
//Ovo sto smo unijeli je string!!!, kako god unesemo uvijek ce biti string!

if (favourite == 23) {
    console.log('Cool ' + favourite + ' is a great number');
}
//ovo ce raditi jer je ==

if (favourite === 23) {
    console.log('Cool ' + favourite + ' is a great number');
}

//da bi ovo radilo kod prompta moramo stavit ispred njega number na ovaj nacin:
// const favourite = Number(prompt("Whats your fav number"));

const fav = Number(prompt("What is your favourite number"));

if (fav === 23) {
    console.log('Cool ' + fav + ' is a great number');
} else if (fav === 7) {
    console.log('Cool, ' + fav + ' is a great number');
} else if (fav === 9) {
    console.log('Cool, ' + fav + ' is a great number');
} else {
    console.log('Meh, ' + fav + ' is not a great number');
}


// UNEQUAL!
// !== -> strict version
// != -> loose version, i nju treba zanemariti!

if (fav !== 23) {
    console.log("Why not 23?");
}