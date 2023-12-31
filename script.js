/*1.
Write a function that takes a string as input 
and returns the reverse of that string.
*/

function reverseString(str) {
    return str.split('').reverse().join('');
  }

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }  

  console.log(reverseString("chamano"));

  /*
  2. Write a function that takes an array of numbers as input and 
  returns the sum of all the numbers in the array.
  */

  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  console.log(sumArray([23, 34, 50]));

  /*
  3. Write a function that takes two numbers as input and
  returns the larger of the two numbers.
  */

  function largerNumber(num1, num2) {

    if(num1> num2){
        return num1;
    } else{
        return num2;
    }
  }
  function largerNumber(num1, num2) {
    return Math.max(num1, num2);
  }  

  console.log(largerNumber(232,43));

  /*
  4. Write a function that takes an array of strings as input and
  returns a new array with only the strings that have a length greater than 5.
  */
 function filterArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > 7){
            newArr += arr[i];
            }
        }
        return newArr;
 }
 function filterStrings(arr) {
    return arr.filter(str => str.length > 7);
  }
  

 console.log(filterArray(["chamano","sidney","yahudah","ben Israel","Ramashia"]))

 /*

6. Write a function that takes a string as input and returns
 the number of vowels in that string.
 */

 function vowelCount(str){
    const createArr = str.split('');
  let count = 0; 
  for (let i = 0; i < createArr.length; i++) {
    if(createArr[i] == "a") {
      count = count + 1;
    }
    else if(createArr[i] == "e") {
      count = count + 1;
    }
    else if(createArr[i] == "i") {
      count = count + 1;
    }
    else if(createArr[i] == "o") {
      count = count + 1;
    }
    else if(createArr[i] == "u") {
      count = count + 1;
    }
   
  }
  return count;
  
 }
console.log("running")
console.log(vowelCount("rama"))

/*
8. Write a function that takes a string as input and returns true
if the string is a palindrome (reads the same forwards and backwards),
and false otherwise.
*/
function checkPalindromic(str) {

  const splitStr = str.split('');
  const reverseStr = splitStr.reverse()
  const joinStr = reverseStr.join('');

  if ( str == joinStr) {
    console.log('palidrome')
  } else{
    console.log ('not palidrome');
  }

}

checkPalindromic("madam")

/*
9. Write a function that takes two arrays as input and returns
 a new array that contains only the elements that are present in both arrays.
*/
function findCommonElements(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7];
const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [4, 5]
