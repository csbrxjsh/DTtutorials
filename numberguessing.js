let secretNumber = Math.floor(Math.random() * 50) + 1; // Random number between 1–50
let maxAttempts = 5;
let guesses = [];

alert("🎯 Guess the secret number between 1 and 50.\nYou have " + maxAttempts + " attempts.");

for (let i = 0; i < maxAttempts; i++) {
  let input = prompt("Attempt " + (i + 1) + ": Enter your guess");

  if (input === null) {
    alert("Game cancelled.");
    break;
  }

  let guess = parseInt(input);

  if (isNaN(guess)) {
    alert("❌ Invalid input. Please enter a number.");
    i--; // Don't count invalid input
    continue;
  }

  guesses.push(guess);

  if (guess === secretNumber) {
    alert("✅ Correct! You guessed the number.");
    console.log("Your guesses: " + guesses.join(", "));
    console.log("Correct guess found at index: " + guesses.indexOf(guess));
    break;
  } else if (guess < secretNumber) {
    alert("📉 Too low!");
  } else {
    alert("📈 Too high!");
  }

  if (i === maxAttempts - 1) {
    alert("💀 Game Over! The number was " + secretNumber);
    console.log("Your guesses: " + guesses.join(", "));
  }
}
