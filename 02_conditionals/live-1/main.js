console.log('Conditionals');
// 👁️ This is your GLOBAL SCOPE

/* 
1. Inizializziamo due parole a due variabili.
2. Andiamo poi a verificare quale delle due parole è più lunga e 
3. Stampiamo in console un messaggio appropriato.

// tools:
- const/let
- strings
- string.length
- if/else

*/

// 📌 1. Initialization step
// Inizializziamo due parole a due variabili.
// - create a first variable where store a word
const first_word = 'Anakin';
// - create a second variable where store anotehr word
const second_word = 'Jabba';
console.log(first_word, second_word);

// 📌 2. Elaboration step
// Andiamo poi a verificare quale delle due parole è più lunga e
// - check IF the length of the first word is longer than the fist print a message
// Declare a global variable where store the output message
let message; // undefined

if(first_word.length > second_word.length){
  // 👁️ This is your BLOCK SCOPE
  // code to run
  //console.log('The first word is longer than the second');
  message = 'The first word is longer than the second'; // < --- the value set 
    
  
} else if (second_word.length > first_word.length ) {
  // 👁️ This is your BLOCK SCOPE
  // - ELSE IF the second work is longer than the second
  //console.log('The second word is longer than the first');
  message = 'The second word is longer than the first'

} else {
  // 👁️ This is your BLOCK SCOPE
  // - ELSE:  they have the same length
  //console.log('The two words have the same length');
  message = 'The two words have the same length'
}



// 📌 3. Output
// log the message to the console
console.log(message);



// 

let validation = true;
const wordA = "Word A";
let wordB = "Word B";
let wordC = 'Fabio'
if (validation === true) {
  let wordC = "Word C";
  let wordB = "Word Custom B";
  console.log(wordA);
  console.log(wordB);
  console.log(wordC);
}

console.log(wordA);
console.log(wordB);
console.log(wordC);  // ❌ error