/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

console.log(x);
var x = 1;

console.log("-----")

// TODO 1.2 Use the let keyword to define a variable.
// Your code here

let y = 50;
if (y === 50) {
    let y = 51;
    console.log(y);
}
console.log(y);

console.log("-----")

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here

const z = 100;
try {
    z = 99;
} catch (err) {
    console.log(err)
}
console.log(z);

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 
// var is the only one who is globally-scoped, it can reassigned to another value and will affect through the entire code
// let can be reassigned but it is block-scoped, to which inside a block you can assign a different value to the variable but outside that block the value is still the same as before.
// const cannot be reassigned a value and will cause an error if one does so.

console.log("-----")

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here

const num1 = 86;
const num2 = 7;

const opNum = -(num1 % num2) - true + +"3"
console.log(opNum)

// Checkpoint 1.2 What operators did you use?
// Answer: Remainder, Unary Negation, Unary plus, Subtraction, Addition
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

console.log("Joshua " + "Hatulan");
var charName = "";
charName += "Leen"
charName += " Spark"
console.log(charName)

// Checkpoint 1.3 What operators did you use?
// Answer: Concatenation

console.log("-----")

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

const boolVar1 = true && false;
const boolVar2 = true || false;
const boolVar3 = !false;

console.log(boolVar1)
console.log(boolVar2)
console.log(boolVar3)
console.log(boolVar1 && boolVar2 || boolVar3)


// Checkpoint 1.4 What operators did you use?
// Answer: Logical AND, Logical OR, Logical NOT


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators

const quantumChar = ["silverWolf", "lynx", "seele", "qingque", "sparkle"]

console.log("jingLiu" in quantumChar)
console.log("silverWolf" in quantumChar)

console.log("-----")


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// [] == false, equates to true. Since == ignores the data typing of the datas that are being compared.
// Without the data type, this statement basically equates to 0 == 1 which makes the statement return false.

// Your code here
console.log([] == true)
console.log([] == false)