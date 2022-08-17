//Primjer pri fixanju bug-ova

/* Prvo cemo izvrisiti konzolu za fixanje jednostavnog bug-a */

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    //pronasli smo bug ovdje: convert ovaj string koji dobijemo u broj
    //    value: Number(prompt("Degrees celsius: ")),
    //ovo cemo zakomentarisat da nas ne zeza u donjoj funkciji stalno
  };
  //iako je ovo u objektu opet ce pokrenuti prompt i ubaciti ono sto upisemo u ovo polje

  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  console.log(measurement);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//1. IDENTIFY the bug

console.log(measureKelvin());

//kad upalimo live-server i kad unesemo neki broj dobijemo neki nebulozan izlaz tipa 200273

//DEBUGGING ovo koda:
//u cemu je problem ?

//2. FIND the bug
//->Bug je ocigledno vratcen u kelvinu, a ukelvinu ima samo specificno measurement.value, pa cemo to posmatrati
//->Postoje i console.warn i console.error, razlika je samo sto malo drugaciji izgled konsola izbaci

//kad ispisemo citav objekat measurement vidimo da je problem jer je value STRING. Sta god ubacimo u prompt bude string!
//console.table nam da tabelu objekta i lijepo ga ispise i to je jako od pomoci
//pronsali smo bug sa dpresotaje:

//3. FIX THE BUG
//u polju value objekta measurement, string koji dobijemo od prompta pretvorimo u broj funkcijom number :)

//----------------USING DEBUGGER IN CHROME----------------------//
//to cemo pokazaat na istom primjeru.
//u chrome-u predjemo iz konzole u sources i kad se spustimo dole skroz imamo svoj kod!
// Dalje cemo u nas kod postaviti break points!
//Klinemo lijevo od broja linije i ono nam oznaci crvenu tacku i to predstavlja break point. I Kad reloadamo samo dotle se izvrsi kod do te tacke (ipak je plava tacka);
//Kliknemo resume code, ono nam reloada stranicu i izvrsi sav kod do te tacke i s desne strane izbaci sve varijable i njihove vrijednosti i time smanjimo kompleknost i nalazimo gdje se nalazi bug
//strelica denso (step) ili F9 nam odradi samo sledecu liniju koda i da informacije o njoj, tako mozeom ici liniju po liniju

//Sad cemo napisat novu funkciju, dodat joj bug i rijesit ga pomocu debuggera

const calcBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  //  let max = temps[0];
  //  let min = temps[0];
  //ovdje smo ovo zamijenili sa:
  let max = 0;
  let min = 0;
  //ovo naravno nece raditi kad provjreimo rez

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    //debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcBug([3, 5, 1], [9, 4, 5]);
//ovdje smo indetifyali bug
console.log(amplitudeBug);

//koristimo debugger koji je POSEBNO koristan u petljama:
//stavimo break point kod linije if (curTemp > max ) max = curTemp;
//jer ocigledno problem je u minimumu, a min i max se tu racunaju
//reloadamo i dodjemo odmah do te linije koda u nasem slucaju 73
//Ako kliknemo na bilo koju od varijabli dobijemo njihovu vrijednost. Onda idemo F9 ili step konstantno korak po korak!
//Izbaci nam da je max 31
//sad ako ne dodamo break point na liniju za min, vratice se na novu iteraciju loop-a. Zato i tu dodaom breakpoint
//kada pratimo liniju po liniju i vrijednost varijabli  vidimo da kad bude najmanja vrijednost arraya koja je 1 i poredi se s nulom, 0<1 i ne promijeni se nista, te ostaje 0 kao minimum
//na osnovu toga zakljucimo da je tu problem citavo vrijeme
//Ispravimo ono gdje smo komentarisali i sve bude okej :)

//Postoji i kljucna rijec debugger; koju cemo sad gore napisati u liniju 71 i cim ovo vidi chrome
//Ukljuci nam deubgger tool kad otvorimo consolu!
