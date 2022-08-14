//Expressions and Statements

//EXPRESSIONS
/*3+4 -> ovo je expression jer proizvodi value!! -> jako bitno
1992 -> i ovo je expression iako je jednostavna vrijednost(value) 
true && false && !false -> sve ovo je expression jer na kraju proizvodi neki boolean value!
*/

//STATEMENTS
/* Sa druge strane, statementsi su neki veci dijelovi koda koji se run-aju i ne proizvode vrijednost sami od sebe
U poredjenju sa nasim jezikom statementsi su recenice, a expression-s bi bile rijeci koje prave recenice!!
*/

if (true) {
    const str = "23 is bigger"; //string nasamo -> expressions, citav ovaj red -> statement!
}
//ovo je bio primjer statement-a i ne proizvodi value, nego samo se uradila neka akcija u vidu deklaracije varijable str, al ne proizvodi vrijednost!!!
//string jeste expression nasamo, isto kao sto rijeci prave recenice tako i ovo expressionsi prave statemense!

//sve ima svoje mjesto, npr u template literall mozeom staviti samo expressions ali ne i statementse

// console.log(`I'm ${2037-1998} years old`)
// ovo sve gore je expression, i ovdje ne bi mogli ubacit statement kao ovaj cijeli if blok jer bi to bio error,
//jer JS ne zna sta da radi sa statementom tamo gdje ocekuje expression!!
// medjutim ako ubacimo varijablu unutar ${} to je okej, jer ce unutar toga proizvesti vrijednost i bit ce treitrano kao expression!
