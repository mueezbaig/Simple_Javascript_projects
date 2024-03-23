
function addArrays(arr1, arr2) {
    // Check if the arrays have the same length
    if (arr1.length !== arr2.length) {
        throw new Error("Arrays must have the same length.");
    }
    
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}

// Example usage:
let array1 = [12,23,12,42];
let array2 = [12,2,3,41];
try {
    console.log("Result of array addition:", addArrays(array1, array2));
} catch (error) {
    console.error(error.message);
}
