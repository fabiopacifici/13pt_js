const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for(let i = teachers.length - 1; i > 0; i--){
  const thisTeacher = teachers[i]
  console.log(thisTeacher);
  
  reversedTeachers.push(thisTeacher)
}
console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for(let i = 0; i < teachers.length; i++){
/*     console.log(i);
    console.log(teachers);
    console.log(teachers[i]); */
    const thisTeacher = teachers[i]
    console.log(thisTeacher.length);
    if(thisTeacher.length >= 5) {
      longNames.push(thisTeacher)
    }
   
}
console.log(longNames);


// 3. Rimuovi 'Ed' dall'array teachers

teachers.splice(teachers.indexOf('Ed'), 1)
console.log(teachers);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false;
for(let i = 0; i < teachers.length && isFabioPresent !== true  ; i++){
  const thisTeacher = teachers[i]
  console.log(thisTeacher);
  if(thisTeacher  === 'Fabio'){
    isFabioPresent = true
    //break;
  }
  console.log('hi');
}

// AND Logico
// 1. 0 < 5 (true) && isFabioPresent !== true (true) ----> it runs
// 2. 1< 5 (true) && isFabioPresent !== true (false) ----> false (it stops)


//// ❌  With the OR 
// 1. 0 < 5 (true) || isFabioPresent === true (false) ---> it runs
// 2. 1 < 5 (true) || isFabioPresent === true (true) ---> it runs
// 3. 2 < 5 (true) || isFabioPresent === true (true) ---> it runs

console.log(isFabioPresent);


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(', ');
console.log(teachersString);




[1, 4, 5, 6].reverse()

teachers.reverse()


alert('ciao')
alert(12)