
function countSheep(arr) {
    // Validate input
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }

    // Use array method to count sheep
    return arr.filter(sheep => sheep === 1).length;
}

// Example usage:
try {
    let sheepArray = [0, 1, 0, 1, 1, 0, 1, 1];
    console.log("Number of sheep present:", countSheep(sheepArray));
} catch (error) {
    console.error("Error:", error.message);
}
