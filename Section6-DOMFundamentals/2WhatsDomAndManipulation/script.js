//U ovoj sekciji cemo konfigurisati JS da komunicira sa web stranicom, drugim rijecima to se zove DOM MANIPULATION

//What the DOM actually is and how does it work ?
//DOM - DOCUMENT OBJEC MODEL -> structured representation of html documents. Allow JS to access html elemnts and styles and manipulate them!
//U sustini to je neki connection point izmedju HTML DOKUMENATA i JS koda!
//DOM se automatski kreira od strane browsera kad god se html fajl ucita

//Da bi vidjeli THE DOM TREE STRUCTURE -> pogledati video 71 na minuti 2.00
//Bitno je zapamtit da je document entry point, i on je uvijek na vrhu drveta, a sve ostalo su njegova djeca!
//Prvo dijete mu je uvijek HTML element, a naredna djeca su uvijek body i head
//DOM sem elemenat node-ova, ima i node-ove koji predstavljaju tekts, reference itd.. Sve sto imamo u HTML dokumentu, DOM mora imati node koji upucuje na to!

// DOM !== JavaScript
// Iako DOM nije dio JavaScripta, ovo sve radi jer je DOM i DOM metode dio WEB API. To su kao neke biblioteke koje browser uspostavi i koje mogu komunicirati s JavaScript kodom. I one su napisane u JS-u
