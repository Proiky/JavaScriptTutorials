"use strict";

//prettier -> makes assumptions on how code should look like!
//instalirali smo prettier koji se nalazi u VS code extenions

//settings->search for deafult formater->choose prettier

const x = 23;

const y = 34;
//formatira kod jako lijepo, izbrise sve nepotrebne razmake izmedju varijabli i otvori novu liniju koda

if (x === 3) {
  console.log(23);
}
//ubaci space izmedju if-a i () po defaultu npr!

const calcAge = (birthYear) => 2037 - birthYear;
//on je dalje konfigurisao da ne radi s " " nego sa ' ', i da ovo birthYear ne bude u () kada je samo 1 parametar, al ja preferiram ovako!

//snippets koji ce automatizirati console.log() da ga ne moramo svaki put pisati!
//stavili smo da kad ukucamo cl -> tab da nam to automatski napise console.log('')
