    function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed!"); // Throw an error
        } else {
            return a / b;
        }
    } catch (error) {
        console.error("Error:", error.message); // Handle the error
    } finally {
        console.log("This will always execute."); // Executes regardless of error
    }
}

console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Error: Division by zero is not allowed! and This will always execute.