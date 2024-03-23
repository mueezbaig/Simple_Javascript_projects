
function summation(n) {
    // Validate input
    if (!Number.isInteger(n) || n <= 0) {
        throw new TypeError('Input must be a positive integer');
    }

    // Use the formula for the sum of an arithmetic series
    return (n * (n + 1)) / 2;
}

// Example usage:
try {
    let n = 124;
    console.log("Summation from 1 to", n, "is", summation(n));
} catch (error) {
    console.error("Error:", error.message);
}
