// STRINGS & TEMPLATE LITERALLS

const firstName = 'Edo';
const job = "Teacher";
const birthYear = 1991;
const year = 2022;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " old " + job + "!";
console.log(jonas);

//first thing that we see is thta if we want to use a ' ' we need to put strings into "" and vice-versa!!
//Also, we see that this is kinda pain in the ass to manage the spaces and everything and is very easy to make a mistake!
//Solution to this is called TEMPLATE LITERALLS!

//------------TEMPLATE LITERALLS----------------

//we use special type of way to write strings and use $ to insert variables!

const edo = `I'm ${firstName}, a ${year - birthYear} old ${job}!`;
console.log(edo);
//As we can see, this is much much more simple and easier :) !

console.log(`Just a regular string...`);
//we can use them for regular strings also

//----------------MULTI-LINE STRINGS-------------

// we make them using ` ` or so-called template literalls!

console.log('Strings with \n\
multiple\n\
lines');
//this only works cause of a bug, but there is muuuch more easier way!

console.log(`string
multiple
literalls`);

