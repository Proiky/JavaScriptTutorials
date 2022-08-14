// IF-ELSE STATEMENS AND DECIDING IN CODE

//we are going to make program to determine if somebody is old enough to take a driving test

const age = 19;

if (age >= 18) { //if condition is true this block will run
    console.log(`The person is old enough to take a driving license`);
} else {
    console.log(`The person is not old enough to take the drving license right now`);
    const yearsLeft = 18 - age;
    console.log(`Wait another ${yearsLeft} years`);
}

/* if(){

} else{

}
This is called if-else controll structure!
Also it is called controll structure cause we controll how the code runs!
*/

const birthYear = 1998;
let century; //ovo moramo napraviti naravno inace ce century varijabla ostat samo unutar scope-a if-else koda!

if (birthYear >= 2000) {
    let century = 20;
} else {
    let century = 21;
}
console.log(century);