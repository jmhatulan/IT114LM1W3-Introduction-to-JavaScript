// Todo 4.6a Create a funciton called isPalindrome function which checks if the given word is a palindrome
// What is a Palindrome? See here: https://en.wikipedia.org/wiki/Palindrome. Feel free to search for the implementation

function isPalindrome(word) {
    const lowercaseWord = word.toLowerCase() 
    const boolPalindrome = lowercaseWord === lowercaseWord.split('').reverse().join('');

    if (boolPalindrome) {
        return " is a Palindrome"
    }
    else {
        return " is Not a Palindrome"
    }
}
// source of implementation: https://stackoverflow.com/questions/14813369/palindrome-check-in-javascript

// Todo 4.6b Set the isPalindrome function as the default export of the module
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx

export default isPalindrome