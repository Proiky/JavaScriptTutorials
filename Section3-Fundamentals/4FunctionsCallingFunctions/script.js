//Sad cemo vidjet kako je moguce pozivati funkciju iz funkcije!
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} oranges pieces.`;
    return juice;
}

//sad cemo prosiriti ovu funkciju koju smo imali ranije, i prosirit cemo je.
//Sta ako ova funkcija treba neku masinu koja sijece voce na vise dijelova za laksu obradu?
//tu funkciju pisemo iznad funkcije fruitProcessor
//Tu funkciju smo pozvali unutar nase funkcije i smjestili u neke varijable vrijednosti koje nam ta funkcija vrati!

console.log(fruitProcessor(2, 3));
//ova funkcija ce sama od sebe 2 put pozvati funkciju cutFruitPieces 2 puta!



