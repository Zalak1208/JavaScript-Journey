const marvel_heroes = ["thor", "ironman" , "spiderman"];
const dc_heroes = ["batman", "superman" , "flash"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes); // returns arrays inside an array
// console.log(marvel_heroes[3]);
// console.log(marvel_heroes[3][1]);




marvel_heroes.concat(dc_heroes); 
console.log(marvel_heroes.concat(dc_heroes)); // returns a new array

// push and concat are different : 
// concat does not change the original array
// push changes the original array    

const allheroes = [...marvel_heroes, ...dc_heroes]; // spread operator
console.log(allheroes); 

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const usableArray1 = anotherArray.flat(2); // flat method
console.log(usableArray1);

const usableArray2 = anotherArray.flat(Infinity); // flat method

console.log(Array.isArray("zalak")); // returns boolean
console.log(Array.from("zalak")); // converts string to array
// IMPORTANT
console.log(Array.from({name : "zalak"})); // returns empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3));
// Array.of() creates a new array from the arguments passed to it


