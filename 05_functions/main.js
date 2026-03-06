console.log('Hi');



// Function Declaration (dichiarazione funzione)


// Without Parameters (senza parametri in ingresso)
/* 

function a_function_name(){
  // your code here
}


function aFunctionName(){

    // your code here 

}

*/

/* function logName(){

  console.log('Fabio');
  
}

function log_name(){

  console.log('Sabbia');
  
} */

// Invoke your functions by name (richiama le funzioni per nome)
/* logName()
log_name()
log_name()
log_name()
log_name()
log_name()
log_name()
log_name() */


// Width parameters (con parametri in ingresso)
//  parameter    👇
function logName(name) {
  console.log(name);

}
// Invoke the function passing an argument
// argument 👇
logName('Fabio')
// argument 👇
logName('Giacomo')
// argument 👇
logName('Sara')



function log_name(name) {
  console.log(name);
}

log_name('Elisa')

// with multiple parameters (con piu paramentri)

function logSum(numb_1, numb_2) {
  const sum = numb_1 + numb_2

  console.log(sum);
}

logSum(1, 5)
logSum(6, 5)
logSum(10, 5)
logSum(100, 50)




function printSum(numb_1, numb_2) {
  const sum = numb_1 + numb_2
  document.writeln(sum)
}

//console.log(sum);


printSum(10, 30)


function getSum(numb, anotherNumb) {
  const result = numb + anotherNumb

  return result

}

console.log('Fabio')
const num = 5

console.log(getSum(1, 5));

const result = getSum(7, 8)
console.log(result);


const division = result / 3






/* 

const reversedTeachers = [];
for(let i = teachers.length - 1; i > 0; i--){
  const thisTeacher = teachers[i]
  console.log(thisTeacher);
  
  reversedTeachers.push(thisTeacher)
}
console.log(reversedTeachers);


*/


// Generalized function to reverse a list or items
function reverseList(list) {

  const reversedList = [];

  for (let i = list.length - 1; i >= 0; i--) {
    const element = list[i]
    console.log(element);

    reversedList.push(element)
  }


  console.log(reversedList);
  return reversedList

}


const revList1 = reverseList([1, 2, 3, 5])
const names = ['Mario', 'Luigi', 'Fabio']


const revListNames = reverseList(names)

console.log(revList1);
console.log(revListNames);




/* 

1. **pari o dispari**: scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari

*/

const userNumber = 11

if (userNumber % 2 === 0) {
  console.log('pari');

} else {
  console.log('dispari');

}


if (userNumber % 2 === 0) {
  console.log(true);

} else {

  console.log(false);

}


/* function isEven(number) {
  if (number % 2 === 0) {
    return true
  } else {

    return false

  }

} */


function isEven(number) {
  if (number % 2 === 0) {
    return true
  } 
    return false

}

console.log(isEven(userNumber)) // true|false
const userPromptNumber = Number(prompt('type a number'))
if (isEven(userPromptNumber)) {
  console.log('Your number is even');
  
} else {
  console.log('your number is odd');
  
}
/*
2. **numeri random**: generare 10 numeri random (con un for o con un while) attraverso una funzione (copiamola da w3schools) e stamparli a schermo
*/
