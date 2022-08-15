// -----------------OBJECT METHODS--------------//

//Objekti mogu drzati bilo sta unutar tijela. Cak i druge objekte
//Samim tim mozemo i funkcije dodavati unutar objekata!

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
    //ovo moze jer ce ovo biti expression  i to automatski moze ici u objekt!
    //ovo se naziva metod!
    //naravno ne radi function declaration kao npr:
    /*function calcAge(birthYear){
        return ..;
    }
    */
}

//vidimo daje i metod neko polje koje jednostavno drzi function -value. gore imamo string-value, number-value itd..
//metodima pristupamo pomocu tacke ili []

console.log(jonas.calcAge(1991));

//ako zelimo pozvati pomocu [] notacije to radimo na nacin:

console.log(jonas['calcAge'](1991)); //malo neintuitivno ali moze se zapamtiti :)

//moguce je i ovako jer postoji polje birthYear unutar jonas objekta!

console.log(jonas.calcAge(jonas.birthYear));
//sem ovoga moguce je pomocu POINTERA THIS i u samoj funkciji napraviti promejnu na sl nacin:


const edo = {
    firstName: 'Edo',
    lastName: 'Mujkic',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        //console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    //this pointer will point to jonas but only in this block!
    //ako umjesto this.birthYear napisemo edo.birthYear narusava dont repeat yourself princip. Jer ako promijenimo ime objekta iz edo u Edo odmah to nece raditi :)


    getSummary: function () {
        if (this.hasDriversLicense) {
            console.log(`${this.firstName} is ${this.age} year old ${this.job} and he has a drivers license`);
        } else {
            console.log(`${this.firstName} is ${this.age} year old ${this.job} and he has no drivers license`);
        }
    }
};

console.log(edo.calcAge());

//Sta ako moramo pozvat calcAge pozvati 1000000 puta unutar naseg programa ?
//Jednostavnije je izracunati to ,smjestiti u objekat i onda mu samo direktno pristupati bez izvrsavanja ove funkcije 1 000 000 puta :D
//to radimo sa this pointerom!

//this.age napravit ce polje age i stavit u ovu vrijednost koju smo vratili
//sad umjesto da zovemo funkciju calcAge 10000000 puta, pozovemo je jednom,a ostatak vremena pozivamo polje edo.age;

console.log(edo.age);
console.log(edo.age);
console.log(edo.age);

//CHALLENGE: wirte a method called getSummary - vraca string koji u sazetku opise edu citavog :)

//npr: Edo is 30 old , and he has a drivers license!.

edo.getSummary();
//mi smo rekli this.age ali trebali smo this.calcAge() jer ne mozemo tek tako pretpostaviti da li je neko vec pozvao calcAge. AKo nista trebamo provjeriti da li polje age postoji!
//takodjer umjesto if-a se mgao koristiti ternarni operator ?

//ovako je bilo pametnije: 

const sivko = {
    firstName: 'Sivko',
    lastName: 'Mujkic',
    birthYear: 1991,
    job: 'Cat',
    friends: ['Zuco', 'Madzga', 'Senahid'],
    hasDriversLicense: false,

    calcAge: function () {
        //console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    //this pointer will point to jonas but only in this block!
    //ako umjesto this.birthYear napisemo edo.birthYear narusava dont repeat yourself princip. Jer ako promijenimo ime objekta iz edo u Edo odmah to nece raditi :)


    getSummary: function () {
        return `${this.firstName} is ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'}  drivers license`;
    }
};

console.log(sivko.getSummary());

//Posto smo vec koristili metode na array-ima to znaci da su i oni objekti sa ugradjenim metodama. Samo specijalan tip objekata!