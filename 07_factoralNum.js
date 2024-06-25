//Iterative Approach:
function factorialIterative(n) {
    if (n < 0) {
        return undefined; // Factorial is not defined for negative numbers
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
let number = 5;
console.log(factorialIterative(number)); // Output will be 120

//Recursive Approach:
function factorialRecursive(n) {
    if (n < 0) {
        return undefined; // Factorial is not defined for negative numbers
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

// Example usage:
let number = 5;
console.log(factorialRecursive(number)); // Output will be 120
