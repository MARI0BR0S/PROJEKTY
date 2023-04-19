console.log('moduł główny');

// pusty obiekt na początku
// referencja do pustego pliku
//  console.log(module.exports);

// moduł require
// require('./add.js'); // WYWOŁALIŚMY NASZ MODUŁ
// WYKONAŁO SIĘ TO CO W PLIKU add.js

// TO CO JEST ZAPISANE W 'module.exports' jest zwracane z funkcji require()


const add = require('./components/add');
const {multiply,description} = require('./components/multiply') // wyodrębnianie z obiektu


const result  = add(2,3,4)
const result2 = multiply(2, 3, 4)


console.log(result);
console.log(result2);
console.log(description);

