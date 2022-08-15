//-----------ARRAY'S DIFFERENT METHODS---------------//

//this is very important, as it shows the use of the different methods we can perform on Arrays!

const friends = ['Michael', 'Steven', 'Peter'];

//------------------ADDING ELEMENTS------------------//

//------------------PUSH METHOD---------------------//
//Sluzi za dodavanje stvari na kraj array-a

friends.push('Jay'); //method
console.log(friends);
//s ovim smo promijenili length ovog arraya, on se automatski promijeni!
const newLength = friends.push('Edo');
console.log(newLength);
//kao sto vidimo metod push vrati novu velicinu arraya, ali to slabo kad koristimo obicno koristimo liniju ispod, medjutim bitno je znati sta vraca metod push ako nekad zatreba :)
console.log(friends.length);


//----------------UNSHIFT METHOD-----------------//

//Za raliku od push-a, ovaj dodaje elemente na pocetak array-a! 

friends.unshift('Dino'); // takodjer vraca novu velicinu arraya 
console.log(friends);


//-----------------REMOVING ELEMENTS------------//

//-----------------POP-------------------------//

friends.pop();
//brise zadnji u array-u. 
friends.pop();
console.log(friends);
//pop-ali smo zadnja 2 unutar niza!!
//ZA RAZLIKU OD PUSH I UNSHIFT NE VRACA VELICINU ARRAYA, NEGO VRACA ONAJ KOJEG SMO POP-ALI STO JE VEOMA KORISNO!!

const popped = friends.pop();
console.log(popped);

//-------------------SHIFT-----------------//

friends.shift(); // brise prvi element array-a 
console.log(friends);
//takodjer vraca ono sto obrisemo pa to mozemo smjestiti u varijabl, ponovo jako korisno!

//---------------------indexOf-------------//
//Jos jedna jako bitna metoda koja nam vraca index elementa kojeg zelimo provjeriti!!:w

console.log(friends.indexOf('Steven'));
//ako trazimo nekog kojeg nema u Array-u vrati nam -1
console.log(friends.indexOf('Bob'));

//-----------------INCLUDES--------------//

//Vraca true ako to nesto ima unutar Array-a, vraca false ako ga nema u Array-u

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
//Ovaj metod koristi === tako da malo slovo ne bi radilo :)

//Takodjer ni ovo ne bi radilo jer koristi ===:

friends.push(23);
console.log(friends.includes('23')); //-> vraca false
console.log(friends.includes(23)); //-> vraca true 

if (friends.includes('Peter')) {
    console.log(`You have a friend named Peter!`);
} else if (friends.includes('Steven')) {
    console.log(`You have a frend named Steven!`)
}

