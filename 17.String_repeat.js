
function repeatString(str, numTimes) {
    // Handle edge cases
    if (numTimes < 0) {
        throw new Error('numTimes must be a non-negative integer');
    }
    if (numTimes === 0) {
        return ''; // Return an empty string when numTimes is zero
    }

    let repeatedString = "";
    for (let i = 0; i < numTimes; i++) {
        repeatedString += str;
    }
    return repeatedString;
}

// Example usage:
let originalString = "Malayalam";
let repeatedTimes = 3;
console.log("Repeated string:", repeatString(originalString, repeatedTimes));
