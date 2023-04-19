document.addEventListener('DOMContentLoaded', () => {
  const numbersContainer = document.querySelector('.viewer');
  const clickers = document.querySelectorAll('.clicker')
  const historyOperations = []
  const numbersToArray = []

function checker(value,expected) {
  switch (expected) {
    case '+':
      historyOperations.push(value)
      break;
    case '-':
      historyOperations.push(value)
      break;
    case '÷':
      historyOperations.push(value)
      break;
    case 'x':
      historyOperations.push(value)
      break;
    case '=':
      if (numbersToArray.length === 1) return alert('za mało liczb do wykonania operacji');

      
      break;
      
  }
}


  const displayItem = (e) => {


    let ourExpectedValue = e.target.textContent;

    const value = Number.parseFloat(e.target.textContent, 10);

    if (isNaN(value) && ourExpectedValue !== '.') {
      if (ourExpectedValue === 'C') return numbersContainer.textContent = ''
      else {
        
        numbersToArray.push(value)
        checker(value, ourExpectedValue)
        console.log(checker);
        
      }

      

        return;
    } else if (!isNaN(value) || ourExpectedValue === '.')
    {

      if (numbersContainer.textContent.split('').filter(element => element === '.').length === 1 && ourExpectedValue=== '.') {
        ourExpectedValue = ''
      }

     
      




     
      
        
      numbersContainer.textContent += ourExpectedValue;
      
     }

    
  
  }

  
   clickers.forEach(number => {
    number.addEventListener('click',displayItem)
  })

 
  

})
