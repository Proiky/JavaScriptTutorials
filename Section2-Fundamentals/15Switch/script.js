//SWITCH!
//koristimo ga da prolazimo kroz vec poznate ranije defnisane slucajeve koji se mogu desiti unutar naseg programa

const day = 'monday';

switch (day) {
    case 'monday': //JS compare-a day sa "monday" u strict verziji, i ako se poklapaju kod ispod se izvrsava
        console.log(`It's Monday`);
        console.log(`I need to go to class`);
        break; //svaki switch treba break jer inace bi se nastavili izvrsavat case-ovi
    case 'tuesday':
        console.log(`Prepare theory videos`);
        break;
    case 'wednesday':
    case 'thursday':
        //sta god napisemo bice izvrseno i za wednesday i za thursday ako se napisu ovako zajedno
        console.log('Go out');
        break;
    case 'friday':
        console.log(`Itsss friday fridayyyyy`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Finally weekend break`);
        break;
    default:
        console.log(`Not a valid day`);
    //default je u sustini kao ELSE block u if strukturi
    //default blok nema break-a
}

//Ako stavimo neki case bez breaka radi se naredni case nakon tog zbog toga je break kljucan!
//JAKO JE BITNO NAGLASITI DA SE RADI "STRICT" POREDJENJE ODNOSNO ===

let dan = 'monday';

if (dan === 'monday') {
    console.log(`It's Monday`);
    console.log(`I need to go to class`);
} else if (dan === 'tuesday') {
    console.log(`Prepare theory videos`);
} else if (dan === 'wednesday' || dan === 'thursday') {
    console.log('Go out');
} else if (dan === 'friday') {
    console.log(`Itsss friday fridayyyyy`);
} else if (dan === 'saturday' || dan === 'sunday') {
    console.log(`Finally weekend break`);
} else {
    console.log(`Not a valid day`);
}

//ista verzija programa u if-else verziji!! :)