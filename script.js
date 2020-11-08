let input = parseInt(prompt("Welcome! Enter your max number: "));

while (!input) {
    input = parseInt(prompt("Enter a valid number! "));
}

let targetNumber = Math.floor(Math.random() * input) + 1

let guess = parseInt(prompt("Enter your first guess: "));
let attempts = 1;

while (parseInt(guess) !== targetNumber) {
    if (guess === 'q' || guess === 'Q') break;
    attempts++;
    if (guess > targetNumber) {
        guess = prompt("Number is too high. Enter a smaller number.");
    } else {
        guess = prompt("Number is too low. Enter a larger number.");
    }
}

if (guess === 'q' || guess === 'Q') {
    console.log("You quit");
} else {
    if (attempts === 1) {
        console.log(`You got it after ${attempts} attempt. Nice`);
    } else {
        console.log(`You got it after ${attempts} attempts. Pretty good`);
    }
}
