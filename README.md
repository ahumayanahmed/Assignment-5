1️. What is the difference between var, let, and const?

var is the old way to declare variables in JavaScript.
It has function scope.

let is used to declare variables that can be reassigned.
It has block scope.

const is used to declare variables whose value cannot be reassigned.
It also has block scope.
2. What is the spread operator (...)?

The spread operator is used to expand elements of an array or object.

It helps to copy, merge, or pass elements easily.
3. What is the difference between map(), filter(), and forEach()?

map() creates a new array by applying a function to each element.

filter() creates a new array with elements that pass a condition.

forEach() executes a function for each element but does not return a new array.
4. An arrow function is a shorter way to write functions in modern JavaScript.
Example:

Normal function:

function add(a,b){
 return a+b;
}

Arrow function:

const add = (a,b) => a+b;

5. What are template literals?

Template literals are used to create strings with embedded variables or expressions.

They use backticks ( ) instead of quotes.

Example:

const name = "Rahim";
console.log(`My name is ${name}`);
