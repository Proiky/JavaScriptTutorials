
//ARROW FUNCTIONS!


//iste kao i obicne funkcije, samo su krace i lakse za zapisati!!

const calcAge3 = birthYear => 2037 - birthYear;
//kao sto vidimo ne koristimo {} i return je vec ugradjen i odma vrati ovo u funkciji sto je. Ne moramo mu mi govoriti!
//birthYear je parametar!!

const age3 = calcAge3(1991);
console.log(age3);
//ovako se poziva arrow function!

//ovo je najjednostavniji oblik arrow funtiona

const yearsUntilRetirement = birthYear => {
    //kad imamo nekoliko linija koda ponovo nam trebaju {} 
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
//vidimo da ako imamo vise od jedne linije koda opte moramo pozvati RETURN!

console.log(yearsUntilRetirement(1991));

//ako imamo vise parametara moramo ih zapisati u ()


const yearsUntilRetirement1 = (firstName, birthYear) => {

    //kad imamo nekoliko linija koda ponovo nam trebaju {} 
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years!`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

//postavlja se pitanje - sta koristiti ??

//postoji razlika izmedju arrow funkcija i obicnih funkcija. Arrow funkcije nemaju THIS kljucnu rijec, sto je kasnije jako bitno, pa cemo to kasnije i vidjeti!

