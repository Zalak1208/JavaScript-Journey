function calculateCartPrice(num1){
    return num1;
}
console.log(calculateCartPrice(100)); 
console.log(calculateCartPrice(100 , 200 , 300)); // ignores 200 and 300

//function 2
function calculateCartPrice1(...num1){ //... is used to get all the arguments in an array
    return num1;
}
console.log(calculateCartPrice1(100)); // returns [100]
console.log(calculateCartPrice1(100 , 200 , 300)); // array of all the arguments

//function 3
function calculateCartPrice2(val1 , val2 ,...num1){ 
    return num1;    
}
console.log(calculateCartPrice2(100 , 200 , 300 , 400 , 400)); // returns [300 , 400 , 500]

// function 4 with objects
const user = {
    username : "zalak",
    price : 999
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({username:"zalak" , price:999})

// function with arrays
const newArr = [1,2,3,4,5];

function handleArray(getArray){
    return getArray[1];
}
console.log(handleArray(newArr)); // returns 2
console.log(handleArray([5,4,3,2,1])); // returns 4