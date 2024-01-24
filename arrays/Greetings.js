// Array of greetings
const greetings = ["Hello!", "Hi there!", "Greetings!", "Hey!"];

// Function to generate a random index from the greetings array
function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Function to get a random greeting
function getRandomGreeting() {
  const randomIndex = getRandomIndex(greetings);
  return greetings[randomIndex];
}

// Example: Get a random greeting and log it
const randomGreeting = getRandomGreeting();
console.log(randomGreeting);
