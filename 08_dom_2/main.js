console.log('it works');

const cats = [
  'Anakin',
  'Antifa',
  'Strabbi',
  'Mando',
  'Gaza',
  'Grodu',
  'Jabba',
  'Mutina',
  'Sabbia',
  'Cookie',
  'Venomino',
  'Budino',
  'Spider'
]

const catsListElement = document.querySelector('.cats')

// 📌 Example 1 (with template literal)
let catsElements = ''

for (let i = 0; i < cats.length; i++) {
  const cat = cats[i];
  const liElement = `<li>${cat}</li>` // ⚠️ This is a STRING not a DOM node

 catsElements += liElement // strings concatenation + assigment

}

console.log(catsElements);
// 👇 Uppdate the dom once
catsListElement.innerHTML = catsElements

// 📌 Example 2 (with DOM API)

/* let catsElements = '' */

for (let i = 0; i < cats.length; i++) {
  const cat = cats[i];

  const liElement = document.createElement('li')
  liElement.append(cat)
  console.log(typeof liElement); // 👈 This is a DOM node

  liElement.innerHTML = cat

/*   liElement.addEventListener('click', function () {
    alert('mao');

  }) */
 // Updates the dom  multiples times once per iteration
  catsListElement.appendChild(liElement)

}



// Forms + js

const nameEl = document.getElementById('name')
console.log(nameEl);
// read the input value (if present)
console.log(nameEl.value); // empty value


// select the form
const formEl = document.querySelector('form')

formEl.addEventListener('submit', function(e){
  e.preventDefault()
  console.log(nameEl.value);
 
})