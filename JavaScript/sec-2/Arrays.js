//Array
// ways of declaring an array
//1.
const myArr = [1, 2, 3, 4, 5 , true , "hello", null, 
undefined, {name: "John"}]; 
//2.
const myHeroes = ["Superman", "Batman", "Wonder"];
//3.
const myArr1 = new Array(1, 2, 3, 4, 5);

myArr.push(6); // adds 6 to the end of the array
//console.log(myArr);
myArr.pop(); // removes the last element of the array
// console.log(myArr);
myArr.shift(); // removes the first element of the array
// console.log(myArr);
myArr.unshift(0); // adds 0 to the beginning of the array
// console.log(myArr);
myArr.splice(2, 1); // removes 1 element from index 2
//console.log(myArr);
myArr.splice(2, 0, 10); // adds 10 at index 2
// console.log(myArr);

// syntax of splice : myArr.splice(start, deleteCount, item1, item2, ...) these items will be added

//console.log(myArr.includes(9)); // returns boolean
//console.log(myArr.indexOf(1)); // if element not found the return -1.
//console.log(myArr.join()); // converts the array to string.

// slice
console.log(myArr.slice(1)); // returns a new array from index 1 to end
const myArr2 = myArr.slice(1, 3); // returns a new array from index 1 to 3 (excluding 3 , including 1)
console.log(myArr2);
console.log("B " , myArr);

// difference between slice and splice
// slice does not change the original array, it returns a new array
// splice changes the original array, it returns the removed elements.
