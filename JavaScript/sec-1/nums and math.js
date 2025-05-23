const score = 100;
console.log(score); // 100

const score1 = new Number(100);
console.log(score1); // [Number: 100]

// toString
console.log(score1.toString());
console.log(typeof(score1)); // object
console.log(typeof(score)); // number

// toFixed
console.log(score.toFixed(2)); // 100.00 

// toPrecision
const num = 123.456789;
console.log(num.toPrecision(5)); // 123.46 round off rules are applied
console.log(num.toPrecision(2)); // 1.2e+2
console.log(num.toPrecision(1)); // 1e+2

// here the value in parameter is the total number of digits(significant numbers) in the number including decimal point

// tolocaleString
const hundreds = 100000000;
console.log(hundreds.toLocaleString("en-US")); // 100,000,000
console.log(hundreds.toLocaleString("en-IN")); // 10,000,000
// by default it will be in US format

// toExponential
const num1 = 123456;
console.log(num1.toExponential(2)); // 1.23e+5
const num2 = 123456789;
console.log(num2.toExponential(3)); // 1.235e+8

//valueOf
const num3 = new Number(123456);
console.log(num3.valueOf()); // 123456
console.log(typeof(num3)); // object
// Returns the primitive value of the object.

//*********************************************************************//
// Maths : it is in-built library(object) in js.
console.log(Math);  // Object [Math: Math]

console.log(Math.abs(-9)); // 9

console.log(Math.round(4.3)); // 4
console.log(Math.round(4.9)); // 5

console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.3)); // 4

console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1

// IMPORTANT: 
console.log(Math.random());
// this will give a random number between 0 and 1 inclusive of 0 and exclusive of 1.

// if we want a random number between 1 and 10
console.log((Math.random() * 10) + 1); // 1 to 10
console.log(Math.floor((Math.random() * 10) + 1)); // 1 to 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); //  includes max
console.log(Math.floor(Math.random() * (max - min) + min)); // excludes max 








