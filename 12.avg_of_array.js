
function calculateAverage(arr) {
    // Validate input
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }

    // Check if the array is empty
    if (arr.length === 0) {
        throw new Error('Array must not be empty');
    }

    let sum = 0;

    // Loop through the array and sum up the numbers
    for (let i = 0; i < arr.length; i++) {
        // Check if the element is a number
        if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
            throw new TypeError('Array must contain only numbers');
        }
        sum += arr[i];
    }

    // Calculate the average
    return sum / arr.length;
}

// Example usage:
try {
    let numbers = [1, 2, 3, 4, 5];
    console.log("Average:", calculateAverage(numbers));
} catch (error) {
    console.error("Error:", error.message);
}
