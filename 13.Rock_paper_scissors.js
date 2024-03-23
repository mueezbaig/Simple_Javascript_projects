
function rockPaperScissors(playerChoice) {
    // Validate player choice
    const choices = ['rock', 'paper', 'scissors'];
    playerChoice = playerChoice.toLowerCase();
    if (!choices.includes(playerChoice)) {
        return "Invalid choice. Please choose rock, paper, or scissors.";
    }

    // Generate computer's choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the winner
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return `You win! Computer chose ${computerChoice}.`;
    } else {
        return `You lose! Computer chose ${computerChoice}.`;
    }
}

// Example usage:
let playerChoice = 'rock';
console.log(rockPaperScissors(playerChoice));
