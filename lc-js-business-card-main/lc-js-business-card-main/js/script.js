console.log('it works?');
// Select all dom nodes for the form elements
const formEl = document.querySelector('form')
const titleFieldEl = document.getElementById('title-field')
const nameFieldEl = document.getElementById('name-field')
const companyFieldEl = document.getElementById('company-field')
const roleFieldEl = document.getElementById('role-field')
const emailFieldEl = document.getElementById('email-field')
const phoneFieldEl = document.getElementById('phone-field')
const companyPicFieldEl = document.getElementById('company-pic-field')


// select all dom nodes dor the card elemetns
const titleEl = document.getElementById('title')
const nameEl = document.getElementById('name')
const companyEl = document.getElementById('company')
const roleEl = document.getElementById('role')
const emailEl = document.getElementById('email')
const phoneEl = document.getElementById('phone')
const companyPicEl = document.getElementById('company-pic')

// Attach an event listener on the form element listen for the submit event
// - prevent the default form behaviour
// - read all values from every input
// - update the card's nodes with the inserted values
formEl.addEventListener('submit', function(e){
  // prevent the page refresh
  e.preventDefault()


  const title = titleFieldEl.value
  const name = nameFieldEl.value
  const company = companyFieldEl.value
  const role = roleFieldEl.value
  const email = emailFieldEl.value
  const phone = phoneFieldEl.value
  const company_pic = companyPicFieldEl.value


  console.log(title, name, company, role, email, phone, company_pic);
  
  titleEl.innerText = title
  nameEl.innerText = name
  companyEl.innerText = company
  roleEl.innerText = role
  emailEl.innerText = email
  phoneEl.innerText = phone
  companyPicEl.src = company_pic


  formEl.reset()
  
})