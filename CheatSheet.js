console.log("This is printed from CheatSheet.js");
// -- Data types and variables -- //
/** -- Data types --  
Data types is a way to store data in a variable. */

var str = "Programming"; // var is old, use let and const instead
let str2 = "Coding"; // let variables can be reassigned a new value
const str3 = "Learning"; // const variables can NOT be reassigned a new value
// -- Variables -- //

// String
let name = "John";

// Number
let age = 30;

// Boolean
let isChild = false; // - true or false

// Undefined
let car;

// Null
let dog = null; // - nothing

// -- Strings -- //
// strings are variables that can hold text
console.log("Hello World"); // prints Hello World to the console
console.log("Hello World"[10]); // prints the 10th index from Hello World - start from 0
console.log("Hello World".length); // prints the length of the string

console.log(str); // prints the variable str
console.log(str[str.length - 1]); // prints the last index of the string

// -- Numbers -- //
// numbers are variables that works like math
console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4);
console.log(100 / (4 * 5)); // numbers also use pemdas
console.log(10 % 4); // modulus - returns the remainder of the division

// -- Booleans -- //
// booleans are true or false checkers
console.log(5 > 4);

// -- Undefined -- //
// undefined is a variable that has was never defined a value
console.log(car);

// -- Null -- //
// null is a variable that has no value
console.log(dog);

// NaN is a variable that is not a number
console.log(NaN);

// -- Variables end -- //

// -- Equality -- //
/**  == check if two variables are equal
 *    === check if two variables are equal and the same type */
let bool = "1" == 1;
let bool2 = "1" === 1;
console.log(bool); // 1 is equal to 1, so bool is true
console.log(bool2); //one is a string and the other is a number, so bool2 is false

// -- Equality end -- //

// -- Conditionals -- //
/** the order of the if statements is important
 * because ONLY the first one that is true will be executed */

//checks if the user is subscribed and logged in
let subscribed = false;
let loggedIn = true;
if (subscribed === true) {
  console.log("You are subscribed");
} else if (loggedIn === true) {
  console.log("You are not subscribed");
} else {
  console.log("Login to subscribe");
}
// -- Conditionals end -- //

// -- Comparison Operators -- //
/** 
==  |check if two variables are equal
=== |check if two variables are equal and the same type
!=  |check if two variables are not equal
!== |check if two variables are not equal but the same type
>   |check if the first variable is greater than the second
<   |check if the first variable is less than the second
>=  |check if the first variable is greater than or equal to the second
<=  |check if the first variable is less than or equal to the second
&&  |check if both variables are true
||  |check if either variable is true  
 */

console.log("This is the end of CheatSheet.js");
