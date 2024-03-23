
function centuryFromYear(year) {
    // Validate input
    if (typeof year !== 'number' || isNaN(year) || year < 0) {
        throw new Error('Invalid input year.');
    }

    // Use Math.ceil() to round up to the nearest whole number
    return Math.ceil(year / 100);
}

// Example usage:
let year = 1899;
try {
    console.log("Century from year", year, "is:", centuryFromYear(year));
} catch (error) {
    console.error(error.message);
}
