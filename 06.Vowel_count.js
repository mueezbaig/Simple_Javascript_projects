function countVowels(str) {
    // Validate input
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Use regular expression to count vowels
    const vowelRegex = /[aeiou]/gi;
    const matches = str.match(vowelRegex);
    
    // Return the total vowel count
    return matches ? matches.length : 0;
}

// Example usage:
try {
    let inputString = "Sky is Blue and orange";
    console.log("Number of vowels:", countVowels(inputString));
} catch (error) {
    console.error("Error:", error.message);
}
