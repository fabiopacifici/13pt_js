console.log('It works')

/* 

Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


*/


// Chiedere all’utente di inserire una parola
const word = 'Otto'

// Creare una funzione per capire se la parola inserita è palindroma


// split/reverse/join


function splitWord(userWord) {

  const chars = []
  // Split a userWord into an array
  for (let i = 0; i < userWord.length; i++) {
    const thisChar = userWord[i]
    chars.push(thisChar)
  }

  return chars
}

const splittedWord = splitWord(word)

console.log(splittedWord);


// reverse
function arrayReverse(arr) {
  const revWord = []
  // 👇 Reverse
  for (let i = arr.length - 1; i >= 0; i--) {
    const thisElement = arr[i]
    revWord.push(thisElement)
  }
  console.log(revWord);

  return revWord
}

const arrayReversed = arrayReverse(splittedWord)
console.log(arrayReversed);




function joinArrayToString(arr) {

  // Join
  let reversedString = ''
  for (let i = 0; i < arr.length; i++) {
    const thisChar = arr[i]
    reversedString += thisChar
  }

  console.log(reversedString);
  return reversedString
}

const myReversedWord = joinArrayToString(arrayReversed)
console.log(myReversedWord);


function isPalindrom(userWord) {

  const revWord = userWord.split('').reverse().join('')
  console.log(revWord);


  if (revWord.toLowerCase() === userWord.toLowerCase()) {
    return true
  }
  return false


}

if (isPalindrom(word)) {
  console.log('Your word is a palindron');

} else {
  console.log('Your word is not palindron');
}



/*
Pari e Dispari
1. L’utente sceglie pari o dispari 
2. inserisce un numero da 1 a 5.
3. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
4. Sommiamo i due numeri
5. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
6. Dichiariamo chi ha vinto.


*/
// # Data Collection
// Ask the user pari or dispari
const userChoice = 's' // prompt('type pari or dispari', 'dispari')

// ask the user a number between 1 and 5
const userNumber = 3 // Number(prompt('type a number between 1 and 5', 1))

const pcNumber = getRandomNumber(1, 5)
console.log(userChoice, userNumber, pcNumber);


// # Elaboration
const result = sum(userNumber, pcNumber)
console.log(result);


if(isEven(result) === userChoice) {
  console.log('You winn');
  
} else {
  console.log('PC Wins');

}






// Functions
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sum(firstNumber, secondNumber){
  return firstNumber + secondNumber
}


function isEven(numb){
  console.log(numb);
  if(numb % 2 === 0){
    return 'pari'
  }
  return 'dispari'
}


// Scope
console.log('SCOPE');

a = 0;
b = "buongiorno"
var c = "ciao";

saluta();

console.log("a is " + a);
console.log("b is " + b);

function saluta() {
  var d = "asd";
  console.log("a is " + a);
  var b = a + 1;
  console.log("b is " + b);
  console.log(c);
}

