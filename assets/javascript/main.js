// ll programma dovrà chiedere all’utente il numero di chilometri
// e l’età e calcolare il prezzo del biglietto
// ci saranno sconti per gli under 18(20%) e over 65(40%)


// dichiarazione della variabile del costo/km
var costoalkm = 0.21;


// prompt con chilometri da percorrere
var chilometri = prompt("Quanti chilometri devi percorrere?");

console.log(chilometri);

// prompt con età dell'user
var eta = prompt("Quanti anni hai?");

console.log(eta);

// calcolo del costo del biglietto in relazione ai chilometri da percorrere
var costo = chilometri * costoalkm;

console.log(costo);


// calcolo del costo del biglietto se utente minorenne o over 65;
costo if (eta < 18){
  costo / 100 * 80;
} else if (eta > 65){
  costo / 100 * 60;
};
