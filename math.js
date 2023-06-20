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

/*
4. Implement a function to calculate the area of a circle given its radius.
*/

function areaCircle(radius){
    const PI = Math.PI;
    const area = PI.radius*radius;
    return area ;
}

/*
5. Grade calculator
*/

function calculateAverageGrade(student, passingGrade) {
    let totalScore = 0;
    const numOfSubjects = student.scores.length;
  
    for (let i = 0; i < numOfSubjects; i++) {
      totalScore += student.scores[i];
    }
  
    const averageGrade = totalScore / numOfSubjects;
  
    let result;
    if (averageGrade >= passingGrade) {
      result = "Passed";
    } else {
      result = "Failed";
    }
  
    console.log(`Name: ${student.name}`);
    console.log(`Average Grade: ${averageGrade}`);
    console.log(`Result: ${result}`);
  }
  
  const student = {
    name: "John Doe",
    scores: [80, 90, 75, 85, 95],
  };
  
  const passingGrade = 80;
  calculateAverageGrade(student, passingGrade);
  