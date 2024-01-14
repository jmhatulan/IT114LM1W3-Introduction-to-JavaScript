/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here

console.log(numbers[0]);
console.log(numbers[4]);
console.log(numbers[numbers.length-1]);

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here

const minNum = Math.min(...numbers)
const maxNum = Math.max(...numbers)
const aveNum = (numbers.reduce((sum, numbers) => sum + numbers, 0)) / numbers.length;

console.log("Min:", minNum);
console.log("Max:", maxNum);
console.log("Average:", aveNum);


// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: 
// Python list and JavaScript, unlike in different languages, can both contain multiple different data types and are resizeable.
// Arrays in JavaScript is created similarly to Python being the only difference is with a "var" or any type of variable indicator to determine the nature of the array


// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

const IT114L = {
    courseCode : "IT114L",
    name : "WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)",
    units : 1,
    numStudents : 40
}

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here

IT114L.profName = "Job J. Lipat"
console.log("Professor Name: ", IT114L.profName) 

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here

const myCourses = [
    {courseCode: "CS107", 
        name: "INFORMATION MANAGEMENT", 
        units: 2, 
        numStudents: 40},
    {courseCode: "CS107L", 
        name: "INFORMATION MANAGEMENT (LABORATORY)", 
        units: 1, 
        numStudents: 25},
    {courseCode: "CS120", 
        name: "STRUCTURE OF PROGRAMMING LANGUAGES", 
        units: 3, 
        numStudents: 36},
    {courseCode: "HUM039", 
        name: "ETHICS", 
        units: 3, 
        numStudents: 28},
    {courseCode: "IT114", 
        name: "WEB SYSTEMS AND TECHNOLOGIES", 
        units: 2, 
        numStudents: 37},
    {courseCode: "IT114L", 
        name: "WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)", 
        units: 1, 
        numStudents: 40},
    {courseCode: "IT133", 
        name: "TECHNOPRENEURSHIP", 
        units: 3, 
        numStudents: 40}
]

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here

const totalUnits = (myCourses.reduce((sum, course) => sum + course.units, 0))
console.log("Total number of units: ",totalUnits)

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 
// Objects in JavaScript are the Dictionaries in Python, they both use keys paired up with their value.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

numbersCopy = [...numbers, 86]
console.log(numbersCopy)

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here

const { courseCode: IT114L_Course, units: IT114L_Units, ...IT114LOther } = IT114L;
console.log("IT114L Course :", IT114L_Course);
console.log("IT114L Units:", IT114L_Units);
