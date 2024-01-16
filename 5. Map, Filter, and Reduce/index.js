/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here

const squaredNum = numbers.map(item => item**2)
console.log(squaredNum)

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here

const evenNum = numbers.filter(item => item%2 === 0)
console.log(evenNum)

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here

const sumNum = numbers.reduce(function (sum, item) { return sum+item }, 0)
console.log('Sum: '+ sumNum)

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here

const uppercasedWords = words.map(item => item.toUpperCase())
console.log(uppercasedWords)

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here

const aboveFourLetterWords = words.filter(item => item.length > 4)
console.log(aboveFourLetterWords)

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here

const combinedWords = words.reduce(function (concatenatedWord, item) { return concatenatedWord+item }, '')
console.log(combinedWords)

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
// Map creates a new array by applying by a function to each element from the original array 
// Filter creates a new array with values that only satisfied the given condition from the original array 
// Reduce turns everything inside an array into a single value