// 1. First : Iterative Approach
function generateFibonacci(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }

    let fibonacciSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        let nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextTerm);
    }
    return fibonacciSequence;
}

// Example usage:
let numberOfTerms = 10;
let fibonacciSequence = generateFibonacci(numberOfTerms);
console.log(fibonacciSequence); // Output will be [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 2. Second : Recursive Approach
function generateFibonacciRecursive(n, sequence = [0, 1]) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    if (sequence.length >= n) {
        return sequence.slice(0, n);
    }
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return generateFibonacciRecursive(n, sequence);
}

// Example usage:
numberOfTerms = 10;
fibonacciSequence = generateFibonacciRecursive(numberOfTerms);
console.log(fibonacciSequence); // Output will be [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
