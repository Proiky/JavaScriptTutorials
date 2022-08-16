const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

//sad hocemo unazad da ispisemo array. odnosno s kraja prema pocetku!

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}

//-----------------LOOP INSIDE OF A LOOP----------------
//lets say we have 3 different exercises that repeat each 5 times

for (let i = 1; i < 4; i++) {
    console.log(`--------starting exercise ${i}`);
    for (let j = 1; j <= 5; j++) {
        console.log(`Exercise ${i} lifting weights repetition ${j}`);
    }
}
