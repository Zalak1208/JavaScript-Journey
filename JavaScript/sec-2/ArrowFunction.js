const user = {
    username : "zalak",
    price : 999,

    welcomeMassage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
// this is used to refer to the current context.

user.welcomeMassage(); // zalak , welcome to website
user.username = "sam";
user.welcomeMassage(); // sam , welcome to website

console.log(this); //  window object in browser and empty object in node.js

//++++++++++++++++++++++ Arrow Functions ++++++++++++++++++++++++++++++++++//

function chai(){
    let username = "zalak";
    console.log(this);
    console.log(this.username); // undefined in node.js, zalak in browser
}
chai(); 

// When used outside of any function or object, this refers to the global object, which is window in browsers.
//When a function is called as a method of an object, this refers to the object itself. 
//When a regular function is called without being attached to an object, this refers to the global object (window in browsers). 
// this does not work for function , but works for objects

const chai1 = function(){
     let username = "zalak";
    console.log(this);
    console.log(this.username); // undefined in node.js, zalak in browser
}
chai1();

const chai2 = () =>{
    let username = "zalak";
    console.log(this); // {}
    console.log(this.username); // undefined in node.js, zalak in browser
}
chai2();

const add = (num1 , num2) =>{
    return num1 + num2;
}
console.log(add(2,3)); // 5

// implicit return
const add1 = (num1 , num2) => num1 + num2;
const add2 = (num1 , num2) => (num1 + num2);
// {} return keyword is required
// () no return keyword is required
const add3 = (num1 , num2) => ({username : "zalak"}) // returns an object

