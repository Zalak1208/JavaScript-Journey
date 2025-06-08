// {} is called scope
// var c = 300;
// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }
// console.log(a);
// console.log(b);
// console.log(c); // 30

// we will not be able to access a and b outside the if block, but c can be accessed.
// we will not use var in the future, we will use let and const.

let a1 = 100;
const b1 = 200;
if(true){
    let a1 = 10;
    const b1 = 20;
    console.log(a1); // 10
    console.log(b1); // 20
}
console.log(a1); // 100
console.log(b1); // 200

// Nested scopes
function one(){
    const username = "zalak";

    function two(){
       const website = "youtube";
       console.log(username); // zalak 
    }
    //console.log(website);  // ReferenceError: website is not defined
    two();
}
one();

if(true){
    const username = "zalak";
    if(username === "zalak"){
        const website = " youtube";
        console.log(username + website);
    }
    //console.log(website); // ReferenceError: website is not defined
}
//console.log(username); // ReferenceError: username is not defined

//+++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++//

console.log(addone(3)); // 4
function addone(num){
    return num+1;
}
//addone(9);

console.log(addtwo(3)); // gives error !!!
const addtwo = function(num){
    return num+2;
}
//xaddtwo(9);