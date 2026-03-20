console.log('Objects');


// Data types
// - strings
// - numbers
// - boolean
// - array
// - objects (represents the reality)

const list = ['Mario', 'Luca', 'Luigi']
const ballsList = ['soccer', 'baseball', 'golf']
const items = ['pc', 'monitor', 'mouse']



// Object literal
//  📌 Define the objects
const person = {

  name: 'Mario',
  age: 50,
  lastName: 'Bros', // lasName
  "last-name": 'Bros',
  /*   // last-name
   "last name": 'Bros', // last name */
  pets: ['anakin', 'antifa'],

  // Method (es6 sintax)
  talk() {
    console.log(`${this.name} is talking`);
    //console.log(this);


  },

  // Method (es6 sintax)
  walk() {
    console.log('I am walking');

  }


}

// 📌 Read the object and its properties
// Log the object
console.log(person);
// 👉 With the `dot` notation
console.log(person.age); // 50

// 👉 With the square brackets notation
console.log(person['age']); // 50

// Call methods within an object
person.talk()

console.log(person.pets); // [s]


console.log(person["last-name"]); // Bros





// Take a dom object 
const domObj = document.querySelector('div')
console.log(domObj);
// console.log(domObj.addEventListener());





//  📌 Define the objects

const ball = {
  type: 'golf',
  price: 10,
  currency: '$',
  colors: ['white', 'green', 'yellow'],

  bounce() {
    console.log('boing boing');

  },
  getPrice() {
    this.bounce()
    return this.price + this.currency
  }

}

// log the object
console.log(ball);

// read the properties
console.log(ball.type);
console.log(ball['type']);

const ball_price = ball.getPrice()
console.log(ball_price);


// update a property within an object
ball.currency = 'Euro'

console.log(ball);

console.log(
  ball.colors
);

console.log(
  ball.colors[1] // green
);

// update an element inside the 
ball.colors.push('red')


// delete a property from an object
person["last-name"]

delete person.age

console.log(person);


// Ask to the user 
/* const key = prompt('Ask me something about the person', 'pets') //pets

console.log(person[key]); // person['pets']
console.log(person.key) // undefined
 */


// 📌 Loop over the properties

const cat = {
  name: 'Mando',
  breed: '',
  colors: ['white', 'black'],
  age: 1
}


// syntax
/* for(let key in obj){

} */


for (let key in cat){
  //console.log(cat);
  const value = cat[key]
  console.log(key, value);
  
  //console.log(`${key}:${value}`);

  
}



const students = [
  {
    id:123,
    name: 'Anna',
    lastName: 'Leonova'
  },
  {
    id: 124,
    name: 'Andrea',
    lastName: 'Loda'
  }
]

for (let i = 0; i < students.length; i++) {
  const strudentObj = students[i]; // ?? 
  //console.log(strudentObj);
  console.log(strudentObj.name);

}


console.log(students[1].name);

