/*Problem: You want to write a function that calculates the square root of a number.
Handle the case where the input is negative, throwing an error.*/
function calculateSquareRoot(number) {
    try {
        if (number < 0) {
          throw new Error("Cannot calculate the square root of a negative number!");
        } else {
          return Math.sqrt(number);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
}

console.log(calculateSquareRoot(16)); // Output: 4
console.log(calculateSquareRoot(-9)); // Output: Error: Cannot calculate the square root of a negative number!
