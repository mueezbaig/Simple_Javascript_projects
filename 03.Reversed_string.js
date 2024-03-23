
function reverseString(str) {
    // Check if the input is a string
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    
    // Return empty string if the input is empty
    if (str.length === 0) {
        return str;
    }

    // Reverse the string using array destructuring
    return [...str].reverse().join("");
}

// Example usage:
try {
    let originalString = "123, world!";
    let reversedString = reverseString(originalString);
    console.log("Original string:", originalString);
    console.log("Reversed string:", reversedString);
} catch (error) {
    console.error("Error:", error.message);
}
