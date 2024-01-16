/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/


// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here

function greet(name) {
    return console.log("Greetings, " + name +". Welcome to the Astral Express!")
}

greet("Joshua")

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here

function calculateArea(length,width) {
    var area = 0;
    area = length * width
    return area
}

console.log(calculateArea(9,86))

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: 
// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action. 


// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

function modifyArray(array,func) {
    const modifiedArray = []

    for (let num of array) {
        modifiedArray.push(func(num))
    }
    
    return modifiedArray
}

const numbers = [1,2,3,4,5]
const increOne = x => x+1 
console.log(modifyArray(numbers,increOne))

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import { add, PI } from './mathUtils.js';

console.log(add(3,4))
console.log(PI)

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
