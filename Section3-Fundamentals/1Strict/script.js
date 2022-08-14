// '-----------STRICT MODE----------

/*Koristimo ga kako bi ukljucili strict mode kako bi nas kod bio dodatno zasticen od potencijalnih bugova

moze se ukljuciti posebno za neki blok koda ali najbolja je praksa je pozvati ga na pocetku svakog programa tako da on
utice na citav program prilikom naseg kompletnog rada!

sintaksa je:'use strict';

primjer gdje je on od pomoci jeste:
*/

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriverLicense = true;
}

if (hasDriversLicense) {
    console.log('you can drive now');
}
//Namjerno smo pogrijesili ime varijable hasDriversLIcense, mdjutim u JS-u je na ovaj nacin moguce kreirati novu varijablu.
//COnsole nam nece nista rec al nece nam bit ispisana poruka.
//Kada ukljucimo strict mode dobit cemo error gdje on nece dopustiti varijabli da bude kreirana na ovaj nacin i rec ce da ne poznaje tu varijablu.
//Takodjer, dodatno ne da da kreiramo varijable sa nekim rezervisanim imenima i vraca tacnije poruke tako da nam je lakse rijesiti probleme u konzoli.
//NEka od rezervisanih imena: if, private, public...

//Dodatno cemo objasniti o jos stvari koji radi 'use strict' u nekim narednim fajlovima!