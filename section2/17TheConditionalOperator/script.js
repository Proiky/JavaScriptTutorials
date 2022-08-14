//TERNARY OPERATOR
// operator se pise sa ? i omogucava nam nesto sto bi uradio if-else statement ali u jednom redu!

const age = 23;
age >= 18 ? console.log('I like to drink vine') : console.log('I like to drink water');

//sa lijeve strane ide uslov, nakon upitnika ide ono sto se izvrsava ako je taj uslov tacan, nakon dvotacke ide dio koji se izvrsava ako uslov nije tacan

/* uslov ? do-if-true : do-if-not-true; */
// OVO JE JAKO EFIKASNO ZA DEKLARACIJU VARIJABLI

//vecinom se to ovako koristi!
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
//u drink varijabli nalazi se 'wine'

//sa if-else statementom bi to izgledalo ovako:
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);
//jasno je da je ovako puno komplikovanije i ruznije generalno 
//ternary operator je expression zato smo ga mogli staviti u varijablu a nije statement, pa ga cak mozemo ubaciti i u template literall

console.log(`I like to drink ${age >= 18 ? 'water' : 'wine'}`);
//ovo je sasvim moguce sto je jako korisno i zanimljivo :)
