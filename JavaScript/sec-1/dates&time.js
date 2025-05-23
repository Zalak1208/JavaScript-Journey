//  Dates
let myDate = new Date();
console.log(myDate); // Current date and time
console.log(myDate.toString()); // Current date and time as a string
console.log(myDate.toDateString()); // Current date as a string
console.log(myDate.toTimeString()); // Current time as a string 
console.log(myDate.toISOString()); // Current date and time in ISO format
console.log(myDate.toJSON()); // Current date and time in JSON format
console.log(myDate.toLocaleString()); // Current date and time in local format
console.log(myDate.toLocaleDateString()); // Current date in local format

console.log(myDate.getFullYear()); // Current year
console.log(myDate.getMonth()); // Current month (0-11)
console.log(myDate.getDate()); // Current day of the month (1-31)
console.log(myDate.getDay()); // Current day of the week (0-6)
console.log(myDate.getHours()); // Current hour (0-23)
console.log(myDate.getMinutes()); // Current minute (0-59)
console.log(myDate.getSeconds()); // Current second (0-59)

console.log(typeof myDate); // Object

let myCustomDate = new Date(2020, 4, 19); 
let myCustomDate1 = new Date(2020, 4, 19 , 10, 30, 9); // Custom date and time
console.log(myCustomDate.toLocaleDateString()); 
console.log(myCustomDate1.toLocaleString()); // Custom date and time in local format

let myCustomDate2 = new Date("2020-05-19"); // Month is 1 indexed
console.log(myCustomDate2.toLocaleDateString()); // Custom date in local format
let myCustomDate3 = new Date("05-19-2020");
console.log(myCustomDate2.getTime()); // Custom date in milliseconds

let myTimeStamp = Date.now(); // Current timestamp in milliseconds
console.log(Math.floor(myTimeStamp / 1000)); // Current timestamp in seconds
console.log(Math.floor(myTimeStamp / 1000 / 60)); // Current timestamp in minutes
console.log(Math.floor(myTimeStamp / 1000 / 60 / 60)); // Current timestamp in hours


// IMPORTANT
let newDate = Date.now(); // Current date and time
newDate.toLocaleString('default' , {
    weekday: 'long',

});
console.log(newDate.toLocaleString('default' , {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
})); // Current date and time in local format