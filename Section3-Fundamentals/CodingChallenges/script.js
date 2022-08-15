// CODING CHALLENGES OF SECTION 2:

//------------------CODING CHALLENGE 1-------------------

/*Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§
§
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
*/

'use strict';
//data 1:
//Dolphins:
const a = 44;
const b = 23;
const c = 71;
//Koalas:
const a1 = 65;
const b1 = 54;
const c1 = 49;

//data 2:
//Dolphins:
const a2 = 85;
const b2 = 54;
const c2 = 41;
//Koalas:
const a3 = 23;
const b3 = 34;
const c3 = 27;

const calcAverage = (a, b, c) => a + b + c / 3;

const avgDolphins1 = calcAverage(a, b, c);
const avgKoalas1 = calcAverage(a1, b1, c1);

const avgDolphins2 = calcAverage(a2, b2, c2);
const avgKoalas2 = calcAverage(a3, b3, c3);

function checkWinner(dolphins, koalas) {
    if (dolphins >= 2 * koalas) {
        console.log(`Dolphins win ${dolphins} : ${koalas}`)
    } else if (koalas >= 2 * dolphins) {
        console.log(`Koalas win ${koalas} : ${dolphins}`);
    } else {
        console.log(`NO team wins!!`);
    }
}

console.log(`Data 1:`)
checkWinner(avgDolphins1, avgKoalas1);

console.log(`Data 2:`);
checkWinner(avgDolphins2, avgKoalas2);