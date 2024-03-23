
function calculateTotalPoints(wins, draws) {
    // Validate input
    if (wins < 0 || draws < 0) {
        throw new Error('Wins and draws must be non-negative integers.');
    }

    return (wins * 3) + draws;
}

// Example usage:
let wins = 3;
let draws = 12;
try {
    console.log("Total points:", calculateTotalPoints(wins, draws));
} catch (error) {
    console.error(error.message);
}
