
function checkEvenOrOdd(number) {
    // Check if the input is a finite number
    if (!Number.isFinite(number)) {
        throw new TypeError('Input must be a finite number');
    }

    // Use ternary operator for concise logic
    return number % 2 === 0 ? "Even" : "Odd";
}

// Example usage:
try {
    let num = 722;
    console.log(`${num} is ${checkEvenOrOdd(num)}`);
} catch (error) {
    console.error("Error:", error.message);
}
