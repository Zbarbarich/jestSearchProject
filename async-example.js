console.log("Starting asynchronous execution...");
   
// Simulate a time-consuming asynchronous task (e.g., fetching data)
function asynchronousTask (callback) {
    console.log("Starting asynchronous task...");
    console.time('asynchronousTask'); // Start a timer for the async task

    setTimeout (() => {
        const result = "Data fetched from the server"; 
        console.timeEnd('asynchronousTask'); // End the timer for the async task
        callback(result);
    }, 2000); // Simulate a 2-second delay
}

asynchronousTask ((asyncResult) => {
    console.log ("Asynchronous result:", asyncResult);
});

console.log("Continuing with other work (synchronous task)...");

//Simulate a time-consuming synchronous task
function synchronousTask() {

    let result = 0
    for (let i = 0; i < 1000000; i++) {
        result += i;
    }
    return result;
}

const syncResult = synchronousTask();
console.log("Synchronous result:", syncResult);