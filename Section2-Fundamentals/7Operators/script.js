// OPERATORI!

//Arithmatic operators:

const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 1998;
console.log(ageJonas, ageSarah);
//this is how we console multiple things

const currentYear = 2037;
const ageEdo = currentYear - 1998;
const ageSivko = currentYear - 2018;
//mnogo bolji nacin koristenja jer sl godine samo mijenjamo jednu varijablu a ne na vise mjesta

console.log(ageEdo);
console.log(ageSivko);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 -> dva na trecu ili 8. jako je bitno da to zapamtim!

// + se moze koristiti i za stringove, tj da se saberu ili to concatenate multiple strings!

const firstName = 'Edo';
const lastName = 'Mujkic';
console.log(firstName + " " + lastName);

typeof firstName; //vraca tip

let x = 10 + 5; // i ovaj = je operator to ne smijemo zaboravit!
console.log(x);

//postoji jos assignment operatora kao npr += -+ *= /=
x += 10; // x = x+10;
x -= 5; // x = x - 5;
x *= 3; // x = x * 3; 

//INCREMENT OPERATORS

x++;
++x;
//postoji razlika izmedju ova 2, prvi nakon neke operacije poveca x, drugi prvo poveca x pa odradi odg operaciju

x--;
--x; //isto vazi i za ove

//COMPARISON OPERATORSS

console.log(ageJonas > ageSarah);
// ovo naravno vraca boolean kao i svi operatori poredjenja
// postoje jos >, <, >=, <=, ==, === operatore

console.log(ageSarah >= 18); //vraca true

//jos jedna sitnica je to sto kad napravimo index.html i damo mu src ovaj nas fajl, on ima pristup svim varijablama unutar ovog koda script.js, i mozemo im svima pristupiti unutar desni klik -> inspect -> console
//OPERATORI ne funkcionisu s desna nalijevo naravno, nego imaju odredjena pravila po kojima se kod izvrsava. Za svaki operator je definisano kako radi i sta radi i sa kojih strana operatora se prvo izvodi kod!
