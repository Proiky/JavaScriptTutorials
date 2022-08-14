// DATA CONVERSIONS AND COERSIONS

// conversions -> when we manualy convert from one type to anther
// coersions -> when JS behind the scenes auto converts from one type to another!

//CONVERSIONS

const inputYear = '1991';
console.log(inputYear + 18);
//ovo vrati 199118, a nama treba dase ovo sabere, odnosno da se string konvertuje u broj!
console.log(Number(inputYear));
//Funkcija Number pretvara string u broj
console.log(Number(inputYear) + 18);


//sta ako pokusamo pretvorit nesto u broj sto nije moguce pretvoriti?

console.log(Number('Jonas'));
//Ovo ce vratiti NaN -> Not a Number (actually means invalid number, somehow its stil a number if we run typeof but its invalid)

// pretvaranje iz broja u string!

console.log(String(23));
//Ovo pretvara broj 23 u string "23", i mora poceti s velikim S!

/* U JS MOZEMO SAMO KONVERZIJU IZVRISTI U BROJ,STRING ILI BOOLEAN! */

//Automaticlly converting behind the scenes
//u vecini slucajeva je ovo slucaj, mi rijetko kad manuelno vrsimo konverziju, zbog toga je JS ekstremno jak programski jezik

// ------------COERCION----------

console.log("I am " + 23 + " years old");
//ovo je moguce zbog coersion-a, kad god imamo da se sabiraju string i broj, broj ce se uvijek prebacit u string!

console.log('23' - '10' - 3);
//ovo je automatski JS pretvorila u brojeve! -> MINUS OPERATOR TRIGGERS OPPOSITE COERSION
//ako pisemo s minusom onda se stringovi pretvaraju u brojeve, a sa plusem bi dobili string 23103 !!!
// znaci - pretvara u brojeve, + u stringove!

console.log('23' * '2');
console.log('23' / '2');
//i ovo pretvara u brojeve jer -, *, / moze samo tako funkcionisati!


let n = '1' + 1;
n = n - 1;
console.log(n); //ovo vraca 10, jer je 1+1 pretvorilo u sring "11", onda je string "11" - 1, pa ga je - operator pretvorio u broj 11 pa je bilo 11 - 1 = 10 :)

i = 2 + 3 + 4 + '5'; // ovo daje 95 jer ide s lijeva na desno!
k = '10' - '4' - '3' - 2 + '5'; // ovo daje 15!

