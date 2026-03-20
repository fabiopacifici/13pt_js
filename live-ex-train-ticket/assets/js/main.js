/* 

Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.


*/
// 📌 1. Data collection

// Scrivere un programma che chieda all’utente:

// select the form
const formEl = document.querySelector('form')

// Il numero di chilometri da percorrere
// - select the full-name field
const fullNameEl = document.getElementById('full-name')
// - select the input with id km
const kmInputEl = document.querySelector('#km')
// Età del passeggero
// - select the input with id age
const ageInputEl = document.getElementById('age')

// select the **ticket** nodes
const passengerNameEl = document.getElementById('passenger-name')
const offerEl = document.getElementById('offer')
const wagonEl = document.getElementById('wagon')
const cpCodeEl = document.getElementById('cp-code')
const finalPriceEl = document.getElementById('final_price')
const ticketEl = document.getElementById('ticket')

// select the button 
const generateBtnEl = document.getElementById('generate')
console.log(kmInputEl, ageInputEl, generateBtnEl);

const price_per_km = 0.21


// 📌 Elaboration
// - attach a click event listener to the button
formEl.addEventListener('submit', function(e){
  e.preventDefault()

  const fullName = fullNameEl.value
  const age = Number(ageInputEl.value)
  const km = Number(kmInputEl.value)
  const cpCode = getRandomNumber(90000, 100000)
  const wagon = getRandomNumber(1, 9)
  console.log(age, km);
  
  // il prezzo del biglietto è definito in base ai km(0.21 € al km)
  let ticket_price =  km * price_per_km
  let offer = 'standard'
  if(age < 18){
    // va applicato uno sconto del 20 % per i minorenni
    ticket_price *= 0.8 // ticket_price = ticket_price * 0.2
    offer = 'Minor discount'

  } else if(age > 65) {
    // va applicato uno sconto del 40 % per gli over 65.
    ticket_price *= 0.6 // ticket_price = ticket_price * 0.4
    offer = 'Senior discount'
  }

  // 📌 Output 
  // - print the ticket price to the console
  console.log(ticket_price.toFixed(2));

  finalPriceEl.innerText = ticket_price.toFixed(2)
  passengerNameEl.innerText = fullName
  cpCodeEl.innerText = cpCode
  wagonEl.innerText = wagon
  offerEl.innerText = offer
  ticketEl.classList.remove('d-none')
  formEl.reset()

})

// Functions

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}