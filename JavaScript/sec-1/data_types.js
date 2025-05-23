"use strict";//treat all js code as newer version

//alert("Hello World"); 
// //alert is a browser API. It will not work in node.js
console.log("hello")
console.log(3+3)
// code readability should be the main goal.

// number => range is -2^53 to 2^53
// bigint => range is -2^53 to 2^53
// string => "hello"
// boolean => true/false
// null => empty value , Standalone value
// undefined => variable is declared but not assigned
// symbol => unique value
// object => collection of key-value pairs

console.log(typeof 3) // number
console.log(typeof 3.14) // number  
console.log(typeof 3n) // bigint
console.log(typeof "hello") // string
console.log(typeof true) // boolean
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof Symbol("hello")) // symbol       


// two methods of knowing the data type
// console.log(typeof x);
// console.log(typeof(x));  

let score = "33";
console.log(typeof score); // string
score = Number(score); // convert string to number
console.log(typeof score); // number
score = String(score); // convert number to string

let score1 = "33abc"
console.log(Number(score1)); // NaN
// NaN is a special value in JavaScript that represents "Not a Number". It is returned when a mathematical operation fails to produce a valid number.

// if score has null value the on printing it will give 0.

score = null;
console.log(Number(score)); // 0

// if score has undefined value the on printing it will give NaN.
score = undefined;  
console.log(Number(score)); // NaN

// if score has empty string value the on printing it will give 0.

// for boolean values
// true = 1 
// false = 0

// core:
// "33"=> 33
//"33abc" => NaN
// true => 1 , false=> 0
// null => 0
// undefined => NaN
// empty string => 0
// 1=> true , 0=>false , ""=> false , "zalak" => true


// defining a symbol
const id = Symbol("123");
const id1 = Symbol("123");
console.log(id === id1); // false
// symbols are unique and immutable
console.log(id); // Symbol(123)
console.log(id1); // Symbol(123)
console.log(typeof id); // symbol

// defining bigint
const bignum = 3n;
const bignum1 = BigInt(3);

// defining a array
const arr = [1, 2, 3, 4, 5];
const heroes = ["spiderman", "batman", "superman"];

// defining a object
let MyObj = {
    name: "zalak",
    age: 18,
}

// defining a function
const my_function = function(){
    console.log("hello");
}

console.log(typeof my_function); // function
