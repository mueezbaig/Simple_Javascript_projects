
function isDivisibleByXAndY(number, x, y) {
    // Validate inputs
    if (typeof number !== 'number' || typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('All inputs must be numbers');
    }

    return number % x === 0 && number % y === 0;
}

// Example usage:
try {
    let number = 120;
    let x = 5;
    let y = 6;
    console.log(`${number} is divisible by ${x} and ${y}:`, isDivisibleByXAndY(number, x, y));
} catch (error) {
    console.error("Error:", error.message);
}
