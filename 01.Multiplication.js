
function multiplyNumbers(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new TypeError('Both parameters must be numbers');
    }
    return num1 * num2;
}

// Example usage:
try {
    let result = multiplyNumbers(5, 100);
    console.log("The result of multiplication:", result);
} catch (error) {
    console.error("Error:", error.message);
}
