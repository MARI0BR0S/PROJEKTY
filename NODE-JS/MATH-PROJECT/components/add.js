
// dajemy funkcję
const addNumbers = (...numbers) => {
// console.log( numbers);
 return  numbers.reduce((prev, next) => prev + next)
  
}

// addNumbers(3, 4, 5)
  // (0, 3) => 0 + 3 = 3
  // (3, 4) => 3 + 4 = 7 
// (7,5)=> 7 + 5 = 12 
module.exports = addNumbers;  //  API udostępnione za pomocą jednej funkcji