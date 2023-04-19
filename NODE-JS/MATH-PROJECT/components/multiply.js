const multiply = (...numbers) => {
  // console.log( numbers);
   return  numbers.reduce((prev, next) => prev * next)
    
}
  // {multiply :multiply,description: text}
// module.exports.multiply = multiply;
// module.exports.description = ' mnożenie to działanie matematyczne'

// SPOSÓB PRZEKAZANIA OBIEKTU

module.exports = {
  multiply, description: 'mnożenie to ...'
}