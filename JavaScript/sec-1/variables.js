const accountId = 91312 // const cannot be reassigned
let accountEmail = "zalak@google.com"
var accountPassword = "123456"
accountCity = "Ahmedabad"
let accountState; // semicolon is optional in JS. As value is not assigned, it will be undefined.


console.log(accountId) ;
accountEmail = "91312@gmail.com"
accountPassword = "123456789"
accountCity = "Surat"
console.table([accountId , accountEmail, accountPassword, accountCity , accountState])

/* 
prefer not to use var.
there are issues with var in block scope and functional scope.
for example, if you declare a variable with var inside a block (like an if statement), it will still be accessible outside of that block. This can lead to unexpected behavior and bugs in your code.
let and const are preferred over var because they have block scope, which means they are only accessible within the block they are defined in. This makes your code more predictable and easier to understand.
because var is function scoped and let/const are block scoped.
const is used for constant values, which cannot be reassigned.
*/

