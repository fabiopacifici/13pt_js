const teamMembers = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

function render_member_card(image, role, name) {
  const markupString = `
        <div class="team-card">
          <div class="card-image">
            <img src="img/${image}" alt="${name}" />
          </div>
          <div class="card-text">
            <h3>${name}</h3>
            <p>${role}</p>
          </div>
        </div>`
  //console.log(markupString);
  return markupString
}

function render_team(list, domEl){
  // render team members
  let cards = ''
  
  for (let i = 0; i < list.length; i++) {
    const member = list[i]; // {}
    const { name, role, image } = member
    // render team card
  
  
    cards += render_member_card(image, role, name)
  
  }
  console.log(cards);
  domEl.innerHTML = cards


}

const teamContainerEl = document.querySelector('.team-container')
render_team(teamMembers, teamContainerEl)

// selct the form and its inputs
const formEl = document.querySelector('section form')
const nameField = document.getElementById('name')
const roleField = document.getElementById('role')
const imageField = document.getElementById('image')

formEl.addEventListener('submit', function(e){
  e.preventDefault()
  console.log(e);
  

  // read the name
  const name = nameField.value
  console.log(nameField.value);
  // read the role
  const role = roleField.value
  console.log(roleField.value);
  // read the image
  const image = imageField.value
  console.log(imageField.value);


  /* 
  {
    name: nameFiled.value,
    role: roleField.value
    image: imageField.value
  }
  */


  // build an object literal
  const newMember = {
    name, // name: name
    role, // role: role
    image // image: image
  }
  // push it to the array
  teamMembers.unshift(newMember)


  // re-render the team members
  render_team(teamMembers, teamContainerEl)

})
