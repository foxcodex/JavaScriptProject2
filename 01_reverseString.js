//Here's a function that reverses a given string.
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
let originalString = "hello";
let reversedString = reverseString(originalString);
// Output will be "olleh"
console.log(reversedString); 
