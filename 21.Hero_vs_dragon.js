
function fightDragons(heroPower, dragonStrength) {
    if (heroPower > dragonStrength) {
        return "Hero wins!";
    } else if (heroPower < dragonStrength) {
        return "Dragons win!";
    } else {
        return "It's a draw!";
    }
}

// Example usage:
let heroPower = 20;
let dragonStrength = 100;
console.log(fightDragons(heroPower, dragonStrength));
