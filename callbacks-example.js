// Function to perform a calculation with a callback
function calculate(a, b, operation, callback) {
    let result;

    switch (operation) {
    case
        'add':
        result = a + b;
        break;
    case 'subtract':
        result = a - b;
        break;
    case'multiply':
        result = a * b;
        break;
    default:
        result = "Invalid operation";
    }

    // Execute the callback function with the result
    callback(result);
}

// Callback function to display the result
function displayResult(result) {
    console.log("The result is:", result);
}

// Call the calculate function with the displayResult callback
calculate(5, 3, 'add', displayResult); // The result is: 8    
calculate(10, 4, 'subtract', displayResult); // The result is: 6
calculate(2, 7, 'multiply', displayResult); // The result is: 14
