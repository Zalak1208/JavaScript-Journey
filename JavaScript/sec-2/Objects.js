// two ways of creating objects : 1. object literal 2. constructor function
// singleton is only created by constructor function
// object literal is used to create multiple objects

// OBJECT LITERAL:

const mySym = Symbol("key1");

const JSUser = {
    name:"zalak",  
    "full name" : "zalak thakkar", 
    //mySym : "myKey1", // wrong way to create symbol
    [mySym] : "myKey1", // correct way to create symbol
    age: 18,
    location: "ahmedabad",
    email: "zalak@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "saturday"],
};

console.log(JSUser.name);
console.log(JSUser["name"]); 

// Note: we cannot access full name through dot method.
console.log(JSUser["full name"]);
//console.log(JSUser.full name)  gives error

//console.log(JSUser.mySym); // returns myKey1
//console.log(typeof JSUser.mySym); // returns string

console.log(JSUser[mySym]); // returns myKey1

JSUser.email = "zalakthakkar@google.com";

//Object.freeze(JSUser); // prevents any changes to the object


// FUNCTION
JSUser.greeting = function(){
    console.log("hello");
}
JSUser.greeting2 = function(){
    console.log(`hello , ${this.name}`);
}
console.log(JSUser.greeting()); //  gives error as greeting is not a function.
console.log(JSUser.greeting); // returns undefined 
// we cant do this because we have frozen the object
// after  commenting the freeze line, we can do this
//console.log(JSUser.greeting()); // returns hello
//console.log(JSUser.greeting); // returns function

console.log(JSUser.greeting2()); // returns hello , zalak
