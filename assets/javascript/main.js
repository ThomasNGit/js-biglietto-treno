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

// calcolo costo del biglietto under 18 arrotondato a numero intero
var under18 = parseInt(costo / 100 * 80);

console.log(under18);

// calcolo costo biglietto over 65 arrotondato a numero intero
var over65 = parseInt(costo / 100 * 60);

console.log(over65);

// calcolo costo del biglietto in base all'età dell'utente
if (eta <= 18){
  document.getElementById('mioid').innerHTML = "Il prezzo del tuo biglietto sarà di: " + under18 + " euro";
} else if (eta >= 65) {
  document.getElementById('mioid').innerHTML = "Il prezzo del tuo biglietto sarà di: " + over65 + " euro";
} else {
  document.getElementById('mioid').innerHTML = "Il prezzo del tuo biglietto sarà di: " + costo + " euro";

}
