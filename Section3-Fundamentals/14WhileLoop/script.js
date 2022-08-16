//-----------THE WHILE LOOP-------------//

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}
//ista je kao i for petlja samo se neke stvari moraju rucno unijeti, manje vise nije bitno sta se koristi
//nekad nam treba neka petlja koja nece koristi brojac, odnosno broja kojeg se povecava ili smanjuje. Za to je perfektna while petlja

//Lets keep rolling a dice till we roll a 6

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
//ovo je nacin kako dobiti random broj od 1 do 6 u JS-u. Trunc je vjerovatno floor u matlabu.

//ako bude odma 6, petlja nikad nece krenuti!
if (dice === 6) {
    console.log(`Oh! A 6 right away`);
}

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`Finally a 6! Loop is about to end`);
    }
}

//vidimo da je while petlja savrsena za neke petlje koje nemaju brojac
//dok je for petlja savrsena za array i objekte jer znam uvijek koliko imaju polja unutar sebe, i znamo koliko nam iteracija treba!

