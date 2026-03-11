console.log('Arrow Functions');


// Function declaration (hoisted)
/* sum() // ✅ function declaration is hoisted 
function sum(){
  // your code here
}

sum() //✅ function declaration
 */


// function expression (not hoisted)
// sum() ❌
/* const sum = function(){

}

sum() // ✅
 */
// Option 1: 
// - With more that 1 param you must use round parenthesis
// - when code is on multiple lines you must use the {}
// - when you use the {} you must use return 
/* const sum = (numb_1, numb_2) => {
  // your code here
  const result = numb_1 + numb_2

  return result

}

console.log(sum(10, 40)); */


// Option 2:
// - With more that 1 param you must use round parenthesis 
// - can omit the {} brakets and the return keyword

const sum = (numb_1, numb_2)=> numb_1 + numb_2
console.log(sum(30, 54));



const logMessage = () => console.log('Ciao');

logMessage()


// Without rounded parenthesis
// without curly brackets
// without return keyworkds
const logUserMessage = message => console.log(message);

logUserMessage('Hey you!')