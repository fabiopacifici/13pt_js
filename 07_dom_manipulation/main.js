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
pEl.className +=' fabio'

console.log(pEl.className)


// Style


// Event listeners

