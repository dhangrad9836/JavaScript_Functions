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

//printOdds(55);
//checkAge("John", 16);
checkAge();
