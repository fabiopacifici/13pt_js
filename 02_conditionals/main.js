console.log('Conditionals');

/* 

Syntax:
- if
- (conditions)
- {// your code here}

*/

// 👇 If statement
/* 

if(condition) {
  // your code here
} */


// 👇 If/else statement

/* 
if (condition) {
  // your code here
} else {
  // your code here runs only if the condition is false
} */


// 👇 If/elseif/else statement
/*   if(conditions) {
    // yoru code runs here is condition is true
  } else if(anotherCondtion) {
    // thi runs only if the condtion is false but otherConditon is true
  } else {
    // this block runs if none of the previous conditions are true
  } */

/* 
if (conditions) {
  // yoru code runs here is condition is true
} else if (anotherCondtion) {
  // thi runs only if the condtion is false but otherConditon is true
} else if (anotherCondtion1) {
  // thi runs only if the condtion is false but otherConditon is true
} else if (anotherCondtion2) {
  // thi runs only if the condtion is false but otherConditon is true
} else if (anotherCondtion3) {
  // thi runs only if the condtion is false but otherConditon is true
} else {
  // this block runs if none of the previous conditions are true
}
 */

console.log('Your code here runs');


// 📌 Relational operators
/* const x = 3
console.log(x != 4); // true

if(x != 4){
  console.log('3 is different from 4');
  
}

console.log('Hi there'); */


const x = 3
console.log(x != 4); // true

if (x != 4) {
  console.log('if: inside the if block the condition above is true');

} else {
  console.log('else: the condition was false');
  
}

console.log('Hi there');



console.log(!(x === 5)) // ?





// pass data from the user and store in a variable

//const user_inpput = prompt('Type your name', 'es. Fabio')
//console.log(user_inpput);

//const nummb = prompt('Type a number')
//console.log(nummb);


// parse the string to a Number
//const numb = Number(prompt('Type a number'))
// with parse Int
const parsedInt = parseInt(prompt('Type a number'))
console.log(parsedInt);


