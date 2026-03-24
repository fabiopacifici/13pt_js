console.log('It works');
/* 

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

*/
// Creare un array di oggetti ( proprietà: nome e peso.)

const bikes = [
  {
    name: 'Bici 1',
    weight: 9
  },
  {
    name: 'Bici 2',
    weight: 12
  },
  {
    name: 'Bici 3',
    weight: 19
  },
  {
    name: 'Bici 4',
    weight: 7
  },
  {
    name: 'Bici 5',
    weight: 5
  },
  {
    name: 'Bici 6',
    weight: 12
  }
]

let bike = bikes[0] // object


for (let i = 0; i < bikes.length; i++) {
  const thisBike = bikes[i]; // object
  //console.log(thisBike);
  //console.log(thisBike.weight < bike.weight);
  if (thisBike.weight < bike.weight) {
    bike = thisBike
  }

}


console.log(bike);





/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.


Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/



const teams = [
  {
    name: 'Team 1',
    points: 0,
    fauls: 0
  },
  {
    name: 'Team 2',
    points: 0,
    fauls: 0
  },
  {
    name: 'Team 3',
    points: 0,
    fauls: 0
  },
  {
    name: 'Team 4',
    points: 0,
    fauls: 0
  },
  {
    name: 'Team 5',
    points: 0,
    fauls: 0
  }
]


function getRadomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}





for (let i = 0; i < teams.length; i++) {
  const team = teams[i]; // element (object)

  team.fauls = getRadomNumber(1, 20)
  team.points = getRadomNumber(1, 10)

}

console.log(teams);

/* 
 {
    name: 'Team 1',
    points: 0,
    fauls: 0
  },
*/

const newTeams = []
for (let i = 0; i < teams.length; i++) {
  const team = teams[i];
  const name = team.name
  const fauls = team.fauls

  //es5 syntax
  /*   
    const newObj = {
      name: name, // name: 'Team 1'
      fauls: fauls
    } 
  */

  // es6 syntax
  const newObj = {
    name,
    fauls
  }
  newTeams.push(newObj)

}


console.log(newTeams);


/* let columns = ''
// Array of objects
for (let i = 0; i <  bikes.length; i++) {
  const bike =  bikes[i]; //  {name: '', weight: 0}
  const markup = `
    <div class="col">
      <div class="card">
        <div class="card-body">
          ${bike.name}
          <br>
          ${bike.weight}
        </div>

      </div>

    </div>
  `
  console.log(markup);
  columns += markup

} */

const rowEl = document.querySelector('.row')
/* 
console.log(columns);
rowEl.innerHTML = columns */




// Array of objects
for (let i = 0; i < bikes.length; i++) {
  
  const {name, weight} = bikes[i]; //  {name: '', weight: 0}
  /* const name = bike.name
  const weight = bike.weight */


  const colEl = document.createElement('div')
  colEl.classList.add('col')

  const markup = `
      <div class="card">
        <div class="card-body">
          ${name}
          <br>
          ${weight}
        </div>
      </div>

  `

  colEl.innerHTML = markup

  rowEl.appendChild(colEl)

}



const user = {
  name: 'Mario',
  email: 'mario@email.com',
  password: 'mario123',
  profile: 'https://lorempicsum.com'
}


// Objects destructuring
const {name, profile} = user
console.log(name);
console.log(profile);


// Array destructuring
const movies = ['Matrix', 'Avatar', 'Imitation Game', 'Starwars'] // 0 1 2 3

const [matrix, , , startwars] = movies
console.log(matrix, startwars);

/* const matrix = movies[0]
const startwars = movies[3] */




// Dinamic keys
let fullName = 'Paolo';
let age = 30;
let email = 'paolo@email.it';

const customKey = prompt('give me a key you want to create'); // age skill lastName
const customValue = prompt('type a value for the previous key') // 10  ['html', 'css','js', 'etc...'] rossi


const students = {
  fullName: fullName,
  [customKey]: customValue,
  email: email,
  skills: ['html', 'css','js', 'etc...']
};



console.log(students);
