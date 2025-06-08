// immediately invoked function expression(IIFE)

(function chai(){
    // named IIFE
    console.log(`DB connected`);
})();

( () => {
    // unnamed IIFE or anonymous IIFE
    console.log(`DB connected 2`);
})();
// here semicolon is used to terminate the statement and should be used.
// first parantheses are used to define the function, and the second parentheses are used to invoke the function immediately.
// IIFE is used to run the function immediately, without calling it explicitly.
// reduce global scope pollution.

( (name) => {
    // IIFE with parameters
    console.log(`hey ${name}`);
})("zalak");

// IMPORTANT :  two IIFE in one file need to be separated by semicolon