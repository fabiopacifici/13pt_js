console.log('it works');
/* 
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato
accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

*/

// 1. Preparation (select the dom nodes)
// - select the img with id buld
const bulbElement = document.getElementById('bulb')
// - select the button with id switch
const switchBtnElement = document.getElementById('switch-btn')
console.log(bulbElement, switchBtnElement);


// 2. Elaboration
// attach an event listener to the button to listen for **click**
// - read the image node and update the src value so that it points to the yellow lamp path
// - (option2 if there are two images in the document) add the class d-none to an element and remove it from the other 
switchBtnElement.addEventListener('click', function(){
  console.log('clicked the switch');
 /*  console.log(bulbElement.src);
  // update the src value to the yellow_lamp
  bulbElement.src = './assets/img/yellow_lamp.png'
  console.log(switchBtnElement.innerText);
  switchBtnElement.innerText = 'Spengi' */

  //console.log(bulbElement.src.includes('yellow_lamp'));
  

  if(bulbElement.src.includes('yellow_lamp')) {
    // turn off
    bulbElement.src = './assets/img/white_lamp.png'
    switchBtnElement.innerText = 'Accendi'
  } else {
    // turn on
    bulbElement.src = './assets/img/yellow_lamp.png'
    switchBtnElement.innerText = 'Spengi'
  }


})