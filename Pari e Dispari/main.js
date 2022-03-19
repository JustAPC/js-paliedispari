let pariDispari = prompt ("Scegli: pari o dipsari?");
document.getElementById("paridispari").innerHTML = `Hai scelto ${pariDispari}`

let numeroUtente = parseInt (prompt ("Inserisci un numero"));
document.getElementById("numero").innerHTML = `Il numero scelto da te è ${numeroUtente}`

let numeroMax = 5;

let numeroMin = 1;

document.getElementById("numerocomputer").innerHTML = `Il numero scelto dal computer è ${numeroRandom (numeroMax, numeroMin)}`

let somma = numeroRandom (numeroMax,numeroMin) + numeroUtente ;
document.getElementById("somma").innerHTML = `La somma dei due numeri è ${somma}`

if (somma % 2 == 0) {
    if (pariDispari == "pari"){
        document.getElementById("risultato").innerHTML = `Complimenti! Hai Vinto!`
    } else if (pariDispari == "dispari") {
        document.getElementById("risultato").innerHTML = `Peccato, hai perso :(`
    }
} else if (somma % 2 == 1) {
    if (pariDispari == "dispari"){
        document.getElementById("risultato").innerHTML = `Complimenti! Hai Vinto!`
    } else if (pariDispari == "pari") {
        document.getElementById("risultato").innerHTML = `Peccato, hai perso :(`
    }
}

function numeroRandom (numeroMax, numeroMin ) {
    let x = Math.floor(Math.random() * numeroMax) + numeroMin;
    return x  
} 
