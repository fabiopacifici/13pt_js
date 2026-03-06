console.log('Hello Array');

const name = 'Fabio'
const age = 46

const students = ['John', 'Jane', 'Jack', 'Jill'];
console.log(students);

// read the array elements
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]); // undefined


// get the array length
console.log(students.length);

const cats = ['Anakin', 'Sabbia', 'Mano', 'Grogu', 'Mutina', 'Cookie', 'Gaza', 'Jabba', 'Strabbi'] // 'Venom'


// 👇 Add an element at the end of the array
cats.push('Venom')
console.log(cats);


// 👇 Add an element at the beginning of the array
cats.unshift('Antifa')
// multiple elements
cats.unshift('Antifa', 'Mario', 'Luigi')

console.log(cats);

// 👇 update an array value
console.log(cats[3])

// ✅ Updates an inner element of the array 👍 This is fine!
cats[3] = 'Mando'

console.log(cats);

// ❌ assignment to contant variable not allowed
//cats = []

cats.unshift('Mario')
//👇 remove an element at the beginning of the array
cats.shift()
console.log(cats);



/* 
console.log(cats); */


//👇 remove an element at the end of the array
cats.pop()

console.log(cats);

// Empty array

const dogs = []
console.log(dogs);
console.log(dogs.length);




//  📌For + Array

// get the array lenght
console.log(cats.length)
// get a single array eleent
console.log(cats[0]);


/* const cats = [
    0    'Antifa',
    1    'Anakin', 
    2    'Sabbia', 
    3    'Mando', 
    4    'Grogu', 
    5    'Mutina', 
    6    'Cookie', 
    7    'Gaza', 
    8   'Jabba', 
    9   'Strabbi'
    10   'Venom',
    11  'Jabba', 
    12   'Strabbi'
        ] // 
        // 
  lenght 13      
*/

//  cats.length = 13

// 👇 Loop forward
for (let index = 0; index < cats.length; index++) {

  //console.log(i);
  console.log(cats[index]);
  

}

console.log('The loops ended');



// 👇 Loop backward
for (let index = cats.length - 1; index >= 0; index-- ){
  // your code here 
  console.log(cats[index]);
  


}