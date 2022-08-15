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
/*
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
*/

//----------------------------CODING CHALLENGE 2------------------------------------------------//

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)
*/

/*
console.log(`-------------------------------------------------------`);

let tip = 0;
//let bill = -125;

function calcTip(bill) {
    if (bill > 0) {
        if (bill >= 50 && bill <= 300) {
            tip = bill * 0.15;
        } else {
            tip = bill * 0.2;
        }
        return tip;

    } else {
        console.log(`Ne moze biti negativna vrijednost racuna`);
        return -1;
    }
}

//console.log(calcTip(bill));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`The bills used for my calculator are ${bills}`);
console.log(bills);
console.log(`The tips for each bill respectively are ${tips}`);
console.log(tips);
console.log(`The total amount i had to pay: bill+tips is ${total}`);
console.log(total);
*/

//-------------------CODING CHALLENGE 3--------------------------

/* Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    BMI: 0,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.76,
    BMI: 0,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};


if (mark.BMI > john.BMI) {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI} is higher than ${john.firstName} ${john.lastName}'s (${john.BMI}`)
} else if (mark.BMI < john.BMI) {
    console.log(`${john.firstName} ${john.lastName}'s BMI (${john.BMI} is higher than ${mark.firstName} ${mark.lastName}'s (${mark.BMI}`)
} else {
    console.log(`They have the same BMI`);
}


mark.calcBMI();
john.calcBMI();


if (mark.BMI > john.BMI) {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI} is higher than ${john.firstName} ${john.lastName}'s (${john.BMI}`)
} else if (mark.BMI < john.BMI) {
    console.log(`${john.firstName} ${john.lastName}'s BMI (${john.BMI} is higher than ${mark.firstName} ${mark.lastName}'s (${mark.BMI}`)
} else {
    console.log(`They have the same BMI`);
}