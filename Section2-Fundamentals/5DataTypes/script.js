//TIPOVI PODATAKA

/* U JS-u value moze biti objekt ili primitivni tip. Ako je primitivni tip nije objekt i vice-versa.
mi sad obradjujemo primitivne tipove u JS-u!
*/

/* Tipovi:
1. Number
2. String
3. BOolean
4. Undefined
5. Null
6. Symbol
7. Big int
*/

/* 1. NUMBERS
    Uvijek su tipa float, odnosno uvijek imaju decimale!
    cak i ako ih ne definisemo sa zarezom!

    2.STRINGS
     Sekvenca karaktera, i uvijek su unutar navoda, dvostrukih ili jednostrukih!

    3. BOOLEAN
     True ili false (za donosenje odluka u kodu)

    4. UNDEFINED
     Value taken by a variable not yet defined npr let children;
    5. NULL
     Empty value, kasnije cemo se s ovim zezati
    6. Symbol
     Introduced in ES2015, nije toliko vazan za nas, kasnije cemo o tome pricati takodjer
    7. Bigint
     Introduced in 2020 - koristi se za jako velike brojeve

Jako bitna stvar kod JS-a je sto je svaka varijabla tipa auto (u c++-u), mi nikad ne definisemo tip varijable nego
jezik sam odredi kojeg je tipa varijabla. Mi kasnije mozemo dodijeliti neku drugu vrijednost drugog tipa u neku varijablu
i to nece biti veci problem. */

//---------------------------------------------------------------------------------------------------------------------------------

//COMMENTS - to vec znamo, komentarise se sa // i sa /*

/*
console.log(istina);
let istina = true;
- ovo nece ispisati ono sto zelimo jer JS kod se izvrsava lajn po lajn i mora prvo znati da postoji varijabla istina kako bi je napisao dole
*/
let istina = true;
console.log(istina);

console.log(typeof true); //typeof vraca tip neke varijable
console.log(typeof istina) //ovo vrati boolean
console.log(typeof 23) //ovo vrati number 
console.log(typeof "Jonas"); //ovo vrati string

//DYNAMIC TYPING - kada mozemo promijeniti i tip varijable i varijabla mora postojati!

istina = 'YES!'; // vidimo da nismo koristi let nego samo prepisali preko onog sto se nalazilo u varijabli "istina"
console.log(typeof istina); // ovo bi vratilo string, a iznad gore je bilo boolean! JS je jako mocan zbog ove osobine!!

// UNDEFINED

let sivko; // ovo je undefined jer nismo definisali tj inicijalizirali varijablu. Nesto se nalazi u toj varijabli ali ne znamo sta pa je to UNDEFINED!
console.log(sivko); // vrati undefined
console.log(typeof sivko); // vrati takodjer undefined !! pa vidimo da je undefined i vrijednost i tip varijable!

//ERROR UNUTAR TYPEOF OPERATORA

console.log(typeof null); //ovo vrati object iako to nije, ovo je jako poznat bug koj ise ne ispravlja zbog historije samog programa!!
