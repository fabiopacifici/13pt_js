console.log('Live menu toggle');
// select the dom nodes to manipulate
const buttonToggleEl = document.getElementById('toggle')
const navEl = document.querySelector('header nav')

console.log(buttonToggleEl, navEl);


// 👉 When the buttonToggleEl is clicked

// Add an event listener to the button to listen for click events

buttonToggleEl.addEventListener('click', function(){
  console.log('Clicked');
  
  
  
  // Use element.classList.remove to remove the d-none classe form the navEl
  //navEl.classList.remove('d-none')

  console.log(navEl.classList.contains('d-none'));
  
  /* if (navEl.classList.contains('d-none')){
    // remove the class
    navEl.classList.remove('d-none')

  } else {
    // add the class
    navEl.classList.add('d-none')

  } */


    navEl.classList.toggle('d-none')

})

