//function that calculates the sum of all elements in an array
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// Example usage:
let numbers = [10, 20, 5, 30, 15];
let sum = sumArray(numbers);
// Output will be 80
console.log(sum); 
