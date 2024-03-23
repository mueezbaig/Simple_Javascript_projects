/**
 * Remove all spaces from a given string.
 * @param {string} str - The input string.
 * @returns {string} The string with all spaces removed.
 */
function removeSpaces(str) {
    // Use the replace method with a regular expression to remove all spaces
    return str.replace(/\s/g, '');
}

// Example usage:
let inputString = "An apple a day  keeps the doctor away.";
let stringWithoutSpaces = removeSpaces(inputString);
console.log("String without spaces:", stringWithoutSpaces);
