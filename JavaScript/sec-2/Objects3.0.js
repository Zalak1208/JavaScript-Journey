// Destructuring of objects
const course = {
    name: "JavaScript",
    price: 999,
    courseInstructor: "hitesh"
}
//course.courseInstructor 
const {courseInstructor} = course; 
console.log(courseInstructor); // hitesh

const {courseInstructor : Instructor} = course; // renaming
console.log(Instructor); // hitesh

