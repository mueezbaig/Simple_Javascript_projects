
function findSmallestInteger(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return undefined; // Return undefined if the array is empty
    }
    
    let smallestInteger = arr[0]; // Initialize with the first element of the array
    
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        const currentNumber = arr[i];
        // If the current element is a number and smaller than the current smallest, update smallest
        if (typeof currentNumber === 'number' && currentNumber < smallestInteger) {
            smallestInteger = currentNumber;
        }
    }
    
    return smallestInteger; // Return the smallest integer
}

// Example usage:
let numbers = [4,5,7,82,3];
console.log("The smallest integer in the array is:", findSmallestInteger(numbers));
