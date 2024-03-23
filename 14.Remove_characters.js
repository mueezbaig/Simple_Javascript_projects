
function removeCharacters(str, charsToRemove) {
    // Validate inputs
    if (typeof str !== 'string' || typeof charsToRemove !== 'string') {
        throw new TypeError('Both inputs must be strings');
    }

    // Use regular expression to replace characters to remove with an empty string
    return str.replace(new RegExp(`[${charsToRemove}]`, 'gi'), '');
}

// Example usage:
try {
    let originalString = "Sky is Blue";
    let charsToRemove = "aeiou"; // Removing vowels
    let modifiedString = removeCharacters(originalString, charsToRemove);
    console.log("Original string:", originalString);
    console.log("Modified string:", modifiedString);
} catch (error) {
    console.error("Error:", error.message);
}
