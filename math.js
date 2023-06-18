/*
1. Calculate the sum of all numbers from 1 to 100.
*/

function sumNumbers() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
      sum += i;
    }
    return sum;
  }
  
console.log(sumNumbers());