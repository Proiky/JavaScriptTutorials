// TRUTHY AND FALSY VALUES !

//Falsy values - not really false but will become false when we convert them into boolean type
//Truthy values - not really truth but will conert into truth when we convert them into boolean type

/* There are only 5 falsy values:
1. 0
2. ''
3.undefined
4. null
5. NaN
*/

//Boolean -> funkcija kojom nesto pretvaramo u tip Boolean!

console.log(Boolean(0));
// falsy value - gives false!
console.log(Boolean(undefined));
//falsy value - gives false!
console.log(Boolean('Jonas'));
// its not an empty string -> truthy value and gives truth
console.log(Boolean({}));
//empty object gives truth as well
console.log(Boolean(''));
//empty string falsy value -> gives false!

//OVO SE NAJVISE KORISTI U PETLJAMA I CONTROL BLOKOVIMA

const money = 0;

if (money) {
    console.log(`This person has money`);
} else {
    console.log(`This person has no money`);
}

//sta god se nadje u uslovu petlje ili control block-a JS ce ga automatski pretvoriti u Boolean na osnovu truthy i falsy principa!

//It can also be used to see if someone is declared or not!

let height;
if (height) {
    console.log(`Height is defined`);
} else {
    console.log(`Height is not defined`);
}
//ovdje ce se izvrsiti else block!
//to je zbog truthy and falsy vrijednosti znamo da je undefined -> falsy and gives false!

