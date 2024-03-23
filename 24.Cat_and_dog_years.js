
function convertToHumanYears(years, animal) {
    if (years === 1) {
        return 15;
    } else if (years === 2) {
        return 24;
    } else if (years > 2) {
        return (animal === 'cat' ? 24 : 24) + (years - 2) * (animal === 'cat' ? 4 : 5);
    } else {
        throw new Error(`Invalid number of ${animal} years.`);
    }
}


function catAndDogYears(catYears, dogYears) {
    return [
        convertToHumanYears(catYears, 'cat'),
        convertToHumanYears(dogYears, 'dog')
    ];
}

// Example usage:
let catYears = 2;
let dogYears = 3;
console.log("Human years for cat and dog:", catAndDogYears(catYears, dogYears));
