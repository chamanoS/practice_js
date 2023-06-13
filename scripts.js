/*1. Write a function that takes a string as input and 
returns the reverse of that string.
*/

function reverseString(str){
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
         reverse += str[i];
    }
    return reverse;
}

console.log(reverseString("chamanors"))

/*
2. Write a function that takes an array of numbers as input and 
returns the sum of all the numbers in the array.
*/

function sumOfAll(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
         sum += arr[i];
    }
    return sum
}

console.log(sumOfAll([23,23,54]))

/*
7. Write a function that takes an array of numbers as input and 
returns the largest number in the array.
*/

function returnLargestNum(arr){
    let lagestNum ;
    arr.forEach(element => {
        lagestNum = Math.max(element);
    });
    return lagestNum;
}

function largestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  

console.log(largestNumber([2,54,6,28]))
