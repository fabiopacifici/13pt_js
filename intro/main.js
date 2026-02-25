
// 📌 How to write a comment 👇
////////////////////////////////////

// This is a comment

/* 

This is a multiline comment: 
- this is a list item

*/

// 📌 Hello world example
//////////////////////////////////

// 👇 with writeln(message)
document.writeln('Hello JS'); //alert('Hi this is an alert!')

// 👇 with dom manipulation 
const titleEl = document.getElementById('title');
titleEl.innerHTML = 'Hello Classe 13!!';
console.log(titleEl);

// 👇 With a console log
console.log('Ciao Classe 13PT');

// 👇 with an alert
//alert(first_name)

// 📌 Variables
///////////////////////////////////////////////

// Declaration + assignment = initialization
// 👇 underscore case 
const fabio_12 = 'fabio';

// ❌ Don't do this
//const first-name = 'Fabio'

// 👇 with the camelCase 🐪
const firstName = 'Fabio'
console.log(firstName);


/* console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
 */

document.writeln(firstName);


//alert(firstName)

//const fullName;

//console.log(window)

// 👇 1.Declaration
let age;
console.log(age); // undefined

// 👇 2.Initialization 
let job = 'teacher';
console.log(job);

// const declarations must be initialized
const catName = 'Antifa';
console.log(catName);

// 👇 3.Assignment
age = 40;

// Log a singlevalue
console.log(age);

// Log multiple values
console.log(job, catName, age);




const isOpen = false;
console.log(isOpen); // logs the variable boolean value true
console.log('isOpen'); // logs the text isOpen



//const fabio = 'cioa';
//console.log(fabio);


const user_email = 'test@example.com'

// ❌ You cannot re-assign to a contant varaible another value
// user_email = 'test@example.coma'


// ✅ You can re-assign variable declared with let

// What happens?

// dichiarazione variabile
let miaStringa;

// assegnazione
miaStringa = 'ciao';

// // utilizzo/richiamo
console.log(miaStringa);

// assegnazione
miaStringa = 'arrivederci';

// utilizzo/richiamo
console.log(miaStringa);



// Reference errors

// with const
//console.log(myCat); // ❌

const myCat = 'Anakin'
console.log(myCat);


// with let

//console.log(myOtherCat); // ❌
let myOtherCat = 'Sabbia'
console.log(myOtherCat);


// with var this in ok 
console.log(user); // undefined
var user = 'Mario'
console.log(user); // Mario



let anotherCat;



// 📌  Data Types

// strings
const myName = 'Marco'
// number
const myAge = 30
// boolean value
const isWorking = true

console.log(typeof myName); // string
console.log(typeof myAge); // number
console.log(typeof isWorking); // boolean






// 👇 Strings 

"This is a string" // 💤 not visible anywhere
'Also this is a sting' // 💤 not visible anywhere
12
true

//ciao // this should be a variable or a string that misses its quotes

console.log('This is a string'); // This is a string
const myString = 'Also this is a sting'

console.log(myString);

// Strings concatenation
const message = 'This is ' + 'My nice ' + 'Message'
console.log(message);

console.log('Ciaa' + 'Ciao ');

console.log('2' + 2);


console.log(`
  Ciao this is ${myName}, 
  my age is ${myAge} and 
  my working status is: ${isWorking}
  `);


  // 📌 Numbers

  const sum1 = 4  + 4 // 8

  const result = sum1 + 10 // 8 + 10

  console.log(result); // 18
  
  const subtract = result - sum1 // 10

  console.log(subtract); // 10


console.log(message.length)


