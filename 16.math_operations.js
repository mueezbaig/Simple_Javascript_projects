// Prompt the user to enter the first number
let num1 = parseFloat(prompt("Enter the first number:"));

// Validate the input for the first number
if (isNaN(num1)) {
    console.log("Error! Invalid first number.");
} else {
    // Prompt the user to choose an operation
    let operation = prompt("Enter the operation (+, -, *, /):");

    // Prompt the user to enter the second number
    let num2 = parseFloat(prompt("Enter the second number:"));

    // Validate the input for the second number
    if (isNaN(num2)) {
        console.log("Error! Invalid second number.");
    } else {
        // Perform the operation based on user input using a switch statement
        let result;
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                // Check if num2 is zero to prevent division by zero
                if (num2 === 0) {
                    result = "Error! Division by zero.";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Error! Invalid operation.";
        }

        // Display the result to the user
        console.log("Result:", result);
    }
}
