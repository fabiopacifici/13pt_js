/* 

Il programma dovrà
chiedere all'utente il numero di chilometri che vuole percorrere e
l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60


*/

// 1. Initialization *SETUP
// create a new variable where store the km
const passenger_km = Number(prompt('How many km do you want to  buy'))
// create another variable where store the user age
const passenger_age = Number(prompt("What's the passenger age?"))
// create another variable for the price per km
const price_per_km = 0.21



// 2. Elaboration
// create a variable to store the final price 
let final_price = passenger_km * price_per_km
console.log(final_price);


// IF check if the user age is less that 18
if(passenger_age < 18){
  // - applay a 20% discount * 0.8
  final_price = final_price * 0.8

} else if (passenger_age >= 65){
  // ELSE IF  the user age is over 65
  // - apply a 40
  final_price = final_price * 0.6

}

// 3. Output

// log to the console the final price value
console.log(parseFloat(final_price.toFixed(2)));

