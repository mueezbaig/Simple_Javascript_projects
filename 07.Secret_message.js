var code = "Tip_tap_tip";

function secret(code) {
    // Handle case where user cancels the prompt
    if (code === null) {
        return "Prompt cancelled. Please try again.";
    }

    // Trim leading and trailing spaces from the entered code
    code = code.trim();

    // Compare input code directly to the secret code
    if (code === "Tip_tap_tip") {
        return "Hello, this is a very confidential message. Do not forward it to anyone. The website we have built has been selected for an award.";
    } else {
        // Provide more specific feedback for incorrect input
        return "Incorrect code. Please verify and try again.";
    }
}

// Example usage:
console.log(secret(code));
