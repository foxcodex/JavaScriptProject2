function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example usage:

// Condition function to filter out even numbers
function isOdd(num) {
    return num % 2 !== 0;
}

let numbers = [10, 20, 5, 30, 15];
let filteredNumbers = filterArray(numbers, isOdd);
console.log(filteredNumbers); // Output will be [5, 15]

// Condition function to filter out numbers greater than 10
function greaterThanTen(num) {
    return num > 10;
}

filteredNumbers = filterArray(numbers, greaterThanTen);
console.log(filteredNumbers); // Output will be [20, 30, 15]
