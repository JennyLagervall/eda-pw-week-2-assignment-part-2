// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We begin by creating a variable called 'name' and set this variable to the value of 'Dane' (a string value)
// We then create a conditional statement code where if the value of the variable 'name' is exactly 'Mary' we will console log 'Hi, Mary!'
// We the set the second condition that if the variable 'name' is set to anything other than 'mary', we will console log 'How do you do?'
// Due to the 'name' varialbe being set to 'dane', we will console log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We begin by creating the two new varibles 'secret' and 'code'.
// the value of the 'secret' variable is to be defined by the coming code. 
// the 'code' variable is set to the number 123
// We then create the first part of a conditional code that states that if code is exactly 123, the value of the 'secret' variable
// will become 'super' and the value of the variable 'code' will become the original value of 'code' (123) multiplied by 2. 
// The second part of our conditional statement states that if the value of the 'code' variable is greater than 250, the the value
// of the 'secret' value will become 'duper'.
// Due to 'code' being set to 123, when we consol log 'secret' our output will show the word 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We begin by creating three new variables; isStudent, age, and zip.
// isStudent is set to the value true (a boolean), and age is set to 34, while zip is set to 55407.
// We the create a conditional statement that states if 'isStudent' is set to true AND 'zip' is greater than 8,000, then 
// we will console log 'You're a student on the West Coast!'
// if 'isStudent' is set to false OR age is less than 30, we will console log 'What are your hobbies?'
// if'isStudent' is set to true, we will console log  'Welcome to Prime!'
// Finally, if none of our variables match the above three statements, we will console log 'How about the weather?'
// Since 'isStudent' is set to true, we should console log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX - need to add "colorTwo = 'purple';" here
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
// FIX - should be && indicate AND instead of || (which means OR)
// should be: "if (temp > 39 && time >= 4) {"
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
FIX- Can be fixed a few ways 1) switch no entry and entry OR make "if(age < minAge) { console.log('no entry');"
} else {
  console.log('enter');
}
*/

