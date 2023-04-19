// function collatz(n) { 
//   if (n === 1) return 0;

//   return n % 2 ===0 ? collatz(n/2) + 1: collatz(3 * n + 1) + 1
// }
 
// console.log('Ilość kroków :' + collatz(2));


// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n + 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(10));


function rangeOfNumbers(startNum, endNum) {

  if(endNum<startNum){
    return []
  }
  else{
    const newArr = rangeOfNumbers(endNum - startNum + 1)
    newArr.push(endNum)
    return newArr
  }
};

console.log(rangeOfNumbers(1,4))