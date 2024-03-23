
function sumOfPositive(arr) {
    // Validate input
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }

    let sum = 0;

    // Iterate through the array and add positive numbers to the sum
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
}

// Example usage:
try {
    let numbers = [1, -22, 53, -45, 55];
    console.log("Sum of positive numbers:", sumOfPositive(numbers));
} catch (error) {
    console.error("Error:", error.message);
}
