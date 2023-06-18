/*
1. Calculate the sum of all numbers from 1 to 100.
*/

function sumNumbers() {
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
      sum += i;
    }
    return sum;
  }
  
console.log(sumNumbers());

/*
3. Given an array of numbers, write a function to calculate the average value.
*/

function averageValue(arr){
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) { 
             sum += arr[i];
    }
    return sum/ arr.length ;
}

