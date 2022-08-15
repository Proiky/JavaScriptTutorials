//DOT AND BRACKET NOTATION!!


const jonas = {
    firstName: 'Jonas',
    lastName: 'Mujkic',
    age: 2022 - 1998,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
//ovo je DOT notation. Ova tacka je zapravo unaprijed ugradjen operator koji je definisan tako da pristupa poljima objekta!
console.log(jonas['lastName']);
//[] notation, vidimo da moraom koristiti navodnike!
//razlika je sto unutar [] mozemo staviti npr neku varijablu koja sadrzi 'lastName' za razliku od DOT notationa, i to je OGROMNA RAZLIKA!

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
//ovo savrseno radi. U prvom slucaju se formira firstName u drugom lastName i pronadje polja unutar objekta!
//ovo uopste ne radi sa DOT notacijom!

//console.log(jonas.'last' + nameKey);
//ovo ne radi i daje gresku!

//KADA KORISTIMO STA?

/* Kada trebamo nesto slicno ovim sabircima stringa da dodjemo do onog sto trebamo koristimo [] notaciju, 
u svim ostalim slucajevima treba koristit . notaciju jer je puno jednostavnija i ljepsa
*/

const interestedIn = prompt(`What do you want to know about Jonas. Choose between firstName, lastName, age, job and friends!`);

console.log(interestedIn);

//console.log(jonas.interestedIn); //-> ovo je greska jer Jonas nema polje koje se zove interestedIn


//console.log(jonas[interestedIn]);
//ovo savrseno radi jer se u [] moze staviti bilo sta!
//ako unesemo nesto sto nije polje unutar objekta Jonas objekta, dobijemo undefined!

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(`Wrong request! Choose between firstName lastName, job, age, friends!`)
}
//ovo spustimo dole tako da ako unese nesto pogresno interestedIn bude undefined a to je falsy value i ovaj blok se nece izvrsiti!


//-------DODAVANJE POLJA UNUTAR OBJEKTA-----------

jonas.location = "Bosnia";
jonas['twitter'] = '@edinmujkiccc';
console.log(jonas);
//znaci samo dodamo nesto iako nema kazemo to novo polje je jednako necemo i ono se doda po automatizmu

//CHALLENGE:
//Jonas has 3 friends and his best friend is called Michael

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}.`)

// . operator ima isti precedence 20, velik je priority i oba su left-to-right!
//pa tako ako imamo jonas.friends prvo se to izvrsi pa onda onaj dio friends[0];
