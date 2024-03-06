// Helper function to generate a random number within a specified range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Helper function to check if a number is even or odd
  function isEvenOrOdd(number) {
    return number % 2 === 0 ? 'even' : 'odd';
  }
  
  // Main function to demonstrate the helper functions
  function main() {
    // Define the range for random number generation
    let minRange = 1;
    let maxRange = 10;
  
    // Generate a random number using the helper function
    let randomNumber = generateRandomNumber(minRange, maxRange);
  
    // Check if the random number is even or odd using the helper function
    let result = isEvenOrOdd(randomNumber);
  
    // Display the generated random number and its nature (even or odd)
    console.log(`Generated random number: ${randomNumber}`);
    console.log(`The number is ${result}.`);
  }
  
  // Call the main function to run the code
  main();
  