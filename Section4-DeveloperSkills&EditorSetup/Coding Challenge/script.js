"use strict";

//------CHALLENGE 1-----------//

/*Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

//First we need to ask right questions
//1. We need to know how to write every singl value in an array with corresponding position in an array
//2. Array transformed to string seperated by ...
//3. what is the X days? answer: index+1

//Breaking it into sub-problems:
//1. Transform an array into a string!
//2. transform each element to string with C
//3. Strings needs to contain day (index+1)
//4. Add ... between elemenets and start and end of string

function printForecast(arr) {
  let test = "... ";
  for (let i = 0; i < arr.length; i++) {
    test += arr[i] + "C in " + (i + 1) + " days ... ";
  }
  return test;
}

const display = printForecast([17, 21, 23]);
const display2 = printForecast([12, 5, -5, 0, 4]);

console.log(display);
console.log(display2);

//solved it by myself again!

//Trying one with template literall!

function Forecast(array) {
  let cast = "... ";
  for (let i = 0; i < array.length; i++) {
    cast += `${array[i]}C in ${i + 1} days ... `;
  }
  return cast;
}

const prognoza = Forecast([17, 21, 23]);
const prognoza2 = Forecast([12, 5, -5, 0, 4]);

console.log(prognoza);
console.log(prognoza2);

//works like a charm
