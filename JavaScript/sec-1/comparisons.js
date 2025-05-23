console.log( 2 > 1 ); // true
// comparators are :- > , < , >= , <= , == , === , != , !==

console.log("2" > 1); // true
console.log("02" > 1) ; // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
/* reason : comparisition operator converts null to  number (0) and then compares but == operator does not convert null to 0. 
*/
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined == null); // true

//=== strict equality operator
console.log("1" === 1); // false
