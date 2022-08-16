"use strict";
//U ovoj lekciji cemo iskoristiti savjete i znanje iz prethodna 2 videa!

//problem:
/*We work for a company building a smart home 
thermometer. Our most recent task is this:"Given
an array of temperatures of one day, calculate the 
temperature amplitude. Keep in mind that sometimes 
there might be a sensor error".
*/

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//1) Understanding the problem
// usually by asking some questions!
//- what is temperature amplitude? Answer: The difference between highest and lowest temp
//- How to compute the max and min temperatures ?
// - What's a sensor error? And what to do ?

//2) Breaking up into sub-problems
//- How to ignore errors?
//- Find max value in temp array
//- Find min value in temp array
//- Subtract min from max and then return it!

const calcTempAmplitude = function (temps) {
  //now we are using google to find a max value in an array!
  //google nam kaze da postoji Math.max(), al mi gledamo stackoverflow

  //na stack overflow smo nasli ovo:

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  //ova petlja treba runn-a samo ako je dat broj, ako naleti na error treba nesto drugo
  //continue znaci da zavrsi iteraciju i da pocne sledecu!

  console.log(max, min);
  return max - min;
};

calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2 :
//Function should now recieve 2 arrays of temperatures!

//i1. understanding the problem: asking questions
// - with 2 arrays do we need to implement same functionalty twice? no
// soluton: merge 2 arrays at the beggining

//2. Breaking it into sub-problems:
// - How to merge it into one array ?

//3. Use google again to see how to merge 2 arrays?
// ponovo gledamo stackOverflow tamo nadjemo da postoji concat metoda koja radi upravo ovo!
// pa smo onda usli na mdn -> developer.mozilla.org i sa lijeve strane vidimo sve metode koji array ima! ima ih mnogo i tamo mozemo naci mnogo toga korisnog!
// mdn nam kaze da ima ovakav metod: const array3 = array1.concat(array2);

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

const calcTempAmplitude2 = function (t1, t2) {
  //now we are using google to find a max value in an array!
  //google nam kaze da postoji Math.max(), al mi gledamo stackoverflow

  //na stack overflow smo nasli ovo:
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  //ova petlja treba runn-a samo ako je dat broj, ako naleti na error treba nesto drugo
  //continue znaci da zavrsi iteraciju i da pocne sledecu!

  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitude2([3, 5, 1], [9, 8, 5]);
console.log(amplitudeNew);

//Ovako smo uspjesno rijesili problem, razumijevanjem problema, podjelom u manje dijelove i koristenjem interneta :)
