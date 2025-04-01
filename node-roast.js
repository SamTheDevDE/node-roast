#!/usr/bin/env node
const colors = require("colors/safe"); // Import colors for colored output

const roasts = {
    "success": [
        "Wow, it worked! Accident or actual skill? The world may never know.",
        "Miracles do happen... but let’s not push our luck.",
        "Congratulations! Even a broken clock is right twice a day.",
        "Oh look, it runs! Time to retire while you're ahead.",
        "Your code works? I must be in a parallel universe.",
        "Alert NASA! We just witnessed the impossible.",
        "Finally! I was about to call an archaeologist to dig up your logic.",
        "Node-Roast is speechless. This is a once-in-a-lifetime event.",
        "Well, that’s unexpected… I was preparing an insult.",
        "It works! Now quickly close everything before it breaks again."
    ],
    "error": {
        "undefined": [
            "Oh, look! A variable with no purpose. Must be the `undefined` champion.",
            "It’s not a bug, it’s just your variable trying to find itself.",
            "This value’s as lost as your sense of direction.",
            "Undefined? Yeah, sounds like your approach to debugging.",
            "It’s not undefined, it’s *mysteriously* absent."
        ],
        "null": [
            "Null? Oh, it's like the ghost of your logic past.",
            "Null is the universe's way of telling you you're doing it wrong.",
            "That’s not `null`, that’s your code admitting defeat.",
            "Congrats! You've managed to summon an existential void in your code.",
            "Null: The code equivalent of ‘I got nothing’."
        ],
        "syntax": [
            "Syntax error: You’ve managed to break the laws of programming.",
            "You’ve created a syntax error. Well done, you broke the code universe.",
            "Ah, a syntax error! The best way to remind everyone you're still learning.",
            "Syntax? More like the most basic thing you can’t get right.",
            "This is what happens when you treat semicolons like optional accessories."          
        ],
        "reference": [
            "Reference error: Because who needs to actually reference things properly?",
            "ReferenceError: Your variable doesn’t exist, much like your attention to detail.",
            "You’ve made a reference error. Even your variables are avoiding you.",
            "Undefined reference: Guess you thought ‘floating in the ether’ was good enough.",
            "That reference error is just your code’s way of saying ‘I don’t know who you’re talking about’."          
        ],
        "default": [
            "Oops! Looks like your code just took a vacation.",
            "Error 404: Logic not found. Please try again.",
            "Your code is like a bad haircut... it needs fixing.",
            "Looks like your code is on strike. Better negotiate.",
            "This code is so broken, it should be in a museum.",
            "If at first you don’t succeed, call it version 1.0.",
            "Your code just threw a tantrum. Time for a timeout.",
            "Well, that’s one way to make sure no one uses your code.",
            "Congratulations! You’ve just invented a new programming language: ErrorScript.",
            "Your code is like a puzzle with missing pieces... good luck!"
        ]
    }
};

const oldLog = console.log; // Save the original console.log
const oldError = console.error; // Save the original console.error

// Override console.log to add success roasts
console.log = (...args) => {
    oldLog(...args); // Log the original message
    const output = `[SUCCESS] ${roast_output(true)}`; // Generate a success roast with label
    if (output !== "") oldLog(colors.green(output)); // Log the roast in green
    return output;
};

// Override console.error to add error roasts
console.error = (...args) => {
    oldError(...args); // Log the original error message
    const specificRoast = getSpecificRoast(args); // Try to find a specific roast
    const output = `[ERROR] ${specificRoast || roast_output(false)}`; // Label error roasts
    if (output !== "") oldError(colors.red(output)); // Log the roast in red
    return output;
};

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason) => {
    try {
        const errorMessage = reason instanceof Error ? reason.message : String(reason);
        const specificRoast = getSpecificRoast([errorMessage]) || roast_output(false);
        oldError("Unhandled Promise Rejection:", reason);
        oldError(colors.red(`[ERROR] ${specificRoast}`));
    } catch (err) {
        oldError("Error while handling unhandled rejection:", err.message);
        oldError(colors.red(`[ERROR] ${roast_output(false)}`));
    }
});

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
    try {
        const specificRoast = getSpecificRoast([error.message]) || roast_output(false);
        oldError("Uncaught Exception:", error);
        oldError(colors.red(`[ERROR] ${specificRoast}`));
    } catch (err) {
        oldError("Error while handling uncaught exception:", err.message);
        oldError(colors.red(`[ERROR] ${roast_output(false)}`));
    }
});

// Handle graceful exit on SIGINT (Ctrl+C) and SIGTERM (kill command)
process.on("SIGINT", () => {
    oldLog(colors.yellow("Process interrupted! Quitting like a true quitter..."));
    process.exit(0);
});

process.on("SIGTERM", () => {
    oldLog(colors.yellow("Process terminated! Hope your code wasn’t too attached."));
    process.exit(0);
});

// Generate a roast based on success or error
function roast_output(isWorking) {
    if (isWorking) {
        return roasts.success[randomFromLength(roasts.success)];
    } else {
        return roasts.error.default[randomFromLength(roasts.error.default)];
    }
}

// Pick a random index from an array
function randomFromLength(array) {
    return Math.floor(Math.random() * array.length);
}

// Generate a specific roast based on the error message
function getSpecificRoast(args) {
    try {
        const errorMessage = args.join(" ").toLowerCase();
        if (errorMessage.includes("undefined")) {
            return roasts.error.undefined[randomFromLength(roasts.error.undefined)];
        } else if (errorMessage.includes("null")) {
            return roasts.error.null[randomFromLength(roasts.error.null)];
        } else if (errorMessage.includes("syntax")) {
            return roasts.error.syntax[randomFromLength(roasts.error.syntax)];
        } else if (errorMessage.includes("reference")) {
            return roasts.error.reference[randomFromLength(roasts.error.reference)];
        } else {
            return null; // No specific match
        }
    } catch (err) {
        oldError("Error while generating a specific roast:", err.message);
        return roasts.error.default[randomFromLength(roasts.error.default)];
    }
}

// Test the functionality
function testing() {
    oldLog("------ Console Testing");
    console.log("This is a log test... or is it?");
    console.error("This is an error test... but it’s really a test of your patience.");
    console.error("ReferenceError: x is not defined, because clearly, ‘x’ wasn’t a priority.");
    console.error("SyntaxError: Unexpected token, like your life choices.");
    console.error("TypeError: Cannot read property 'foo' of null, because null’s just chillin'.");
    oldLog("------ Output Testing");
    oldLog(roast_output(true)); // Test success roasts
    oldLog(roast_output(false)); // Test error roasts
}

// Run tests if the environment variable is set
if (process.env.ROAST_TESTING === "true") {
    testing();
}
