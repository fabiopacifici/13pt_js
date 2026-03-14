console.log('DOM');

// Select a dom node using the method document.getElementById(id)

// ❌ text is a variable
const textEl = document.getElementById(text)
console.log(textEl); // null

const textElement = document.getElementById("text")
console.log(textElement);
// read the contnet
console.log(textElement.innerHTML);
// change the inner html
textElement.innerHTML = 'Ciao'


// 📌 selects a node by its class or css selection document.querySelector(cssSelector)
// It selects only the first node with the css selector
const containerEl = document.querySelector('.container')
console.log(containerEl);

// selects the first p tag on the page
const paragraphElement = document.querySelector('p')
console.log(paragraphElement);


// selects the tag p that has a class .paragra

const paragraElement = document.querySelector('p.paragra')
console.log(paragraElement);


// select all tags with a container class

const containerElements = document.querySelectorAll('.container')
console.log(containerElements);


// 📌 string node

const stringElement = '<p>Ciao I am a string</p>'
console.log(typeof stringElement, stringElement);
console.log(typeof paragraElement, paragraElement);



// 📌 String Methods
console.log(stringElement.length) // 

// 📌 DOM Methods

// Read a dom element content using innerHTML
console.log(paragraElement.innerHTML) // 1

// write on a dom element innerhtml
paragraElement.innerHTML = 'lorem ipsum <strong>Fabio</strong> lorem ipsum <a href="">Link</a>'


// 📌 Dom Manupulation operations

// 👉 ClassList
const pEl = document.querySelector('p')
// read the list of classes
console.log(pEl.classList) // token list (array)
console.log(pEl.classList.value) // string with all classes on the element

// add new classes
pEl.classList.add('m-3', 'lead')
console.log(pEl.classList);

pEl.classList.remove('p-2', 'bg-dark')
console.log(pEl.classList);

// 🤔 With a string node?
// stringElement.classList ❌ Not available here its a string!!!!

// 👉 ClassName
// read the value
console.log(pEl.className)
// update the classes 
//pEl.className = pEl.className + ' fabio'
pEl.className += ' fabio'

console.log(pEl.className)


// Style
// read the style object
console.log(pEl.style);
// read the single property
console.log(textElement.style.backgroundColor); // red
textElement.style.color = 'white'
textElement.style.padding = '10px'

textElement.style.backgroundColor = 'purple'


// Read  HTML attributes via js
const imgElement = document.querySelector('img')
console.log(imgElement.src); // https://picsum.photos/400/200

// write
imgElement.alt = 'A random image of a dog'

containerEl.append('Fabio')
containerEl.innerHTML += 'Ciao'
containerEl.textContent += 'Ciao'
//containerEl.appendChild('<p>ciao</p>')

// DOM API
const paragphEl = '<p>ciao</p>'
console.log(paragphEl);

const paragraphDOM = document.createElement('p')
console.log(paragraphDOM.style.color);
paragraphDOM.style.color = 'red'


paragraphDOM.classList.add('p-5', 'bg-dark')
paragraphDOM.innerText = 'Ciao ciao';
console.log(paragraphDOM);


containerEl.appendChild(paragraphDOM)

// DOM Template literals

const title = 'Learn DOM Manupulation'
const content = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, adipisci?'
const markupString = `  
<div class="card">
    <div class="card-body">
      <h3>${title}</h3>
      <p>${content}</p>
    </div>
  </div>`

console.log(typeof markupString); // string
console.log(markupString);




// Mix the two approaches
const cardBodyMarkupString = `  

    <div class="card-body">
      <h3>${title}</h3>
      <p>${content}</p>
    </div>
 `

console.log(cardBodyMarkupString);

const cardDOM = document.createElement('div')
cardDOM.classList.add('card')
console.log(cardDOM);

cardDOM.innerHTML = cardBodyMarkupString
console.log(cardDOM);

// Event listeners
// 1️⃣ select the dom node where attach the listener
const buttonEl = document.querySelector('button')

// 2️⃣ Attache the 'click' event
buttonEl.addEventListener('click', function () {
  // do your things here
  console.log('Clicked the button');

})

// with arrow function
imgElement.addEventListener('click', () => {
  console.log('Clicked with arrow');

})

// with a function handler

function handleImageClick() {
  console.log('You clicked the second button');

}

const btnEl = document.getElementById('btn')
// this syntax works only when the function has no parameters
btnEl.addEventListener('click', handleImageClick)


// with a function with params

function greetUser(name) {
  console.log(`Ciao ${name}`);

}

const btnGreetUserEl = document.getElementById('greetUser')
btnGreetUserEl.addEventListener('click', function () {
  greetUser('Fabio')
})