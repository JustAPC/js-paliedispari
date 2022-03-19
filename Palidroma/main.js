let parola = prompt ("Inserisci una parola");
console.log (`${parola} è la parola inserita`)

if (parola == reverse(parola)){
    document.getElementById("risultato").innerHTML = `${parola} è una parola palindroma`
} else {
    document.getElementById("risultato").innerHTML = `${parola} non è una parola palindroma`
}

function reverse (toReverse) {
    return toReverse.split ("").reverse().join("");
}