//najvaznija stvar u vezi petlji jeste pustanje petlje kroz array!

const jonasArray = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']
];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
}

//ovo je bilo samo za citanje unutar array-a, sad cemo probat napravit novi array koji sadrzi sve tipove podataka ovog gore array-a

const tipoviVarijabli = [];

for (let i = 0; i < jonasArray.length; i++) {
    tipoviVarijabli[i] = typeof jonasArray[i];
}

console.log(tipoviVarijabli);

//moglo se i ovako cak stavise puno je pametnije:

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    types.push(typeof jonasArray[i]);
}

console.log(types);


//-----------------------jos jedan primjer

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

//--------------CONTINUE & BREAK---------------//

//rijeci su intuitivne,tacno se moze naslutiti sta koja od kojih radi :)

console.log(`----ONLY STRINGS-----`)

for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}
//ako tip nije string onda nastavi dalje u naredni korak petlje
//znaci continue napusti tu iteraciju petlje i odmah predje u sledecu kao je zadovoljen neki uslov!

//BREAK - terminira citavu petlju a ne samo jednu iteraciju :)


console.log(`----BREAK WITH NUMBER-----`);

for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}
//kad naidjemo na prvi broj, napusti citavu petlju