function doubleValues(arr) {
    return arr.map(num => num * 2);
}

// Example usage:
let originalArray = [5,10,35,123,222];
let doubledArray = doubleValues(originalArray);
console.log("Original array:", originalArray);
console.log("Doubled array:", doubledArray);