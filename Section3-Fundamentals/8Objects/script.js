//----------------OBJEKTI--------------------//

//do sad smo imali array's

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]
//imali smo vec ovakav array, unutar arraya ni jednom od ovih polja ne mozemo dati prikladno ime da ih lakse obradjujemo, nego su nam samo dostupni na osnovu broja indexa!
//To nije slucaj kod objekata, objekti to rjesavaju 

const jonas = {
    firstName: 'Edo',
    lastName: 'Mujkic',
    age: 2022 - 1998,
    job: 'programmer',
    friends: ['Michael', 'Peter', 'Steven']
};

//vidimo da je jako slicno arrayu gore, ali svako polje ima svoje ime, sve ostalo je isto, prvo ide ime varijable tj property-a pa dvotacka pa vrijednost. Na kraju je obavezno ;
//Najvazniji koncept u citavom programskom jeziku!!

//Object literall syntax je ovako kad se zapise pomocu {}
//Poredak ovih vrijednosti unutar objekta uopste nije bitan, nego samo imena polja. Dok je kod arraya skroz suprotno!

//Zakljucujemo da array trebamo koristiti za neke stvari koje imaju fin poredak, dok se objekti koriste za neke malo vise haoticne stvari bez intuitativnog poretka!

