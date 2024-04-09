console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  //check if number is negative
  if (count < 0) {
    console.log("You must enter a number greater than 0");
  } else {
    for (let i = 1; i < count; i++) {
      if (i % 2 == 1) {
        console.log(i);
      }
    }
  }
} //end function printOdds

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

//check age function
function checkAge(userName = "default username", age = 0) {
  //declare variables for aboveSixteen and belowSixteen
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  //check if user is above or below age 16
  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
} //end function checkAge

console.log("EXERCISE 3:\n==========\n");

//function to check which quadrant
function checkQuadrant(x, y) {
  if (x >= 0 && y >= 0) {
    console.log("Quadrand 1");
  } else if (x < 0 && y >= 0) {
    console.log("Quadrand 2");
  } else if (x < 0 && y < 0) {
    console.log("Quadrand 3");
  } else if (x >= 0 && y < 0) {
    console.log("Quadrand 4");
  }
} //end checkQuadrant

console.log("EXERCISE 4:\n==========\n");

function checkTriagle(len_1, len_2, len_3) {
  //get sum of len_1 and len_2
  let sum = len_1 + len_2;
  let results = "";
  //check if sum of len_1 and len_2 is less than len_3
  if (sum < len_3) {
    return (results = `Invalid triangle!!! the results of ${len_1} and ${len_2} must be greater than ${len_3}`);
  } else if (len_1 == len_2 && len_2 == len_3) {
    return (results = `Equilateral triangle`);
  } else if (sum > len_3 && len_1 == len_2) {
    return (results = `Isosceles triangle`);
  } else if (sum > len_3 && len_1 > len_2) {
    return (results = `Scalene triangle`);
  }
} //end checkTriangle

console.log("EXERCISE 5:\n==========\n");

//data plan function
function mobilePhoneDataUsage(planLimit, day, usage) {
  //
} //end mobilePhoneDataUsage

//printOdds(55);
//checkAge("John", 16);
//checkAge();
//checkQuadrant(0, -18);
console.log(checkTriagle(3, 1, 45));
