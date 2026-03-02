console.log('For loop');


console.log(10 * 2);
console.log(11 * 2);
console.log(12 * 2);
console.log(13 * 2);
console.log(14 * 2);
console.log(15 * 2);
console.log(16 * 2);
console.log(17 * 2);
console.log(18 * 2);
console.log(19 * 2);
console.log(20 * 2);


// multiply the first 1000 number by 2

console.log(1 * 2);
console.log(2 * 2);
console.log(3 * 2);
console.log(4 * 2);
console.log(5 * 2);



// 1k ...


console.log(10 * 3);
console.log(11 * 3);
console.log(12 * 3);
console.log(13 * 3);
console.log(14 * 3);
console.log(15 * 3);
console.log(16 * 3);
console.log(17 * 3);
console.log(18 * 3);
console.log(19 * 3);
console.log(20 * 3);



// 📌 For Loop
/* 
Syntax
for(counter; condition; increment/decrement){
  // you code goes here
}

*/

// i = i + 1

// simple loop 

for (let i = 1; i <= 20; i++) {
  // Block scope
  // log the i value
  console.log(i);

}



// witn an operation in it
for (let i = 1; i <= 20; i++) {
  // Block scope


  // log an operation
  console.log(i * 3);

}


// with a conditional inside
for (let i = 1; i <= 20; i++) {
  // Block scope
  // log the i value
  console.log(i);

  // log an operation
  console.log(i * 3);

  if (i == 10) {
    console.log('Its 10 now');

  }

}

console.log("The loops are over! 🚲");


//❌ console.log(i);



// post position
let x = 10

//let y = x++
let y = ++x

console.log(x, y); // 11, 10



// for loop with Decrement 

for (let i = 20; i > 0; i--){
  console.log(i);
  
}
