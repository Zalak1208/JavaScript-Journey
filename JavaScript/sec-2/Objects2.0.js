const tinderUser = new Object(); // singleton object
const tinderUser2 = {}; // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "zalak";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {  // nested object
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstName: "zalak",
            lastName: "thakkar",
        },
    }
}

console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname?.userfullname?.firstName) // optional chaining

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "a",
    4: "b",
}

//const obj3 = { obj1 , obj2 } // nested object

const obj3 = Object.assign( obj1 , obj2) // here changes are made in obj1, all elements of obj2 are added to obj1
// here {} is optinal. but it is good practice to use it
const obj4 = Object.assign( {} , obj1 , obj2) // here changes are made in obj4, all elements of obj2 are added to obj4

// const result = Object.assign(target , soucrce1 , source2.....)
// here result == target

const onj5 = {...obj1,...obj2} // most used method

// array of objects
const user = [
    {
        id: 1,
        name: "zalak",
    },
    {
        id: 1,
        name: "zalak",
    },
    {
        id: 1,
        name: "zalak",
    },
    {
        id: 1,
        name: "zalak",
    }
]

console.log(user[1].name);

// keys of object
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // returns array of keys
console.log(Object.values(tinderUser)); // returns array of values
console.log(Object.values(tinderUser)); // returns array of values
console.log(Object.entries(tinderUser)); // returns array of entreies(nested array of key and value)
console.log(tinderUser.hasOwnProperty("id")); // returns true or false


