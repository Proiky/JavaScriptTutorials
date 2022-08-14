// let const and var

let age = 30;
age = 31; // WE SAY THAT WE MUTATE AGE VARIABLE (important term);

//we use const that is not supposed to be changed ever!

const birthYear = 1998;
/* birthYear = 1999; -> this doesnt work and birthYear is IMMUTABLE variable!
We cant declare EMPTY const variables
const job; -> Ovo takodjer ne radi 

best practice is to use const always and let when we know variable that needs to change */

//treci nacin je var i ovo se treba u potpunosti izbjegavati!, jako je slicna let kljucnoj rijeci

var job = 'programmer';
job = 'teacher';

//Iako izgleda da su var i let jako slicne, zapravo u pozadini su jako razlicite sve 3 kljucne rijeci.
//Let -> block scoped
//Var -> function scoped

//Moguce je kreirati i bez ove 3 kljucne rijeci al ot je najgora opcija od svih npr:

lastName = 'Mujkic';
console.log(lastName);

// ovo ne pravi nikako u varijablu u lokalnom scope-u, nego na globalnom i ovo ne treba nikad koristiti!