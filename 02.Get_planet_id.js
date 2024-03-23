function getPlanetId(planetName) {
    // Ensure that the input is a string
    if (typeof planetName !== 'string') {
        return "Invalid input. Please provide a valid planet name.";
    }

    // Define an object with planet names and their corresponding IDs
    const planetIds = {
        "mercury": 1,
        "venus": 2,
        "earth": 3,
        "mars": 4,
        "jupiter": 5,
        "saturn": 6,
        "uranus": 7,
        "neptune": 8
    };

    // Convert the input name to lowercase to ensure case-insensitive matching
    let lowercasePlanetName = planetName.toLowerCase();

    // Check if the planet exists in the planetIds object
    if (lowercasePlanetName in planetIds) {
        // Return the corresponding ID
        return planetIds[lowercasePlanetName];
    } else {
        // If the planet is not found, return an error message
        return "Planet not found";
    }
}

// Example usage:
let planetName = "Earth";
let planetId = getPlanetId(planetName);
console.log(`The ID of ${planetName} is ${planetId}`);
