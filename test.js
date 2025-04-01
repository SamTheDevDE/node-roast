const roast = require('./src/roast'); // Import the roasting script

console.log("=== Testing Console Logs ===");

console.error("=== Testing Console Errors ===");

Promise.reject(new Error("Unhandled rejection test"));

setTimeout(() => {
    throw new Error("\n=== Testing Uncaught Exception ===");
}, 1000);

setTimeout(() => {
    process.kill(process.pid, "\n=== Testing Process Exit Signals (Ctrl+C) ===");
}, 3000);

asdfqweqew()