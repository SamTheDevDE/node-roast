# Node-Roast

**Node-Roast** is a Node.js module that brings humor to your coding errors. Inspired by **cargo-mommy**, it delivers roasts instead of positive affirmations, roasting you for mistakes, bugs, and issues that appear in your code. Whether you're facing a `ReferenceError`, a `SyntaxError`, or just a well-deserved roasting for your general coding misfortune, **Node-Roast** has got your back with some humor to ease the pain!

## Features

- **Success Roasts:** Even when your code works, it gets a roast to remind you that *it’s probably a fluke*.
- **Error Roasts:** Every error comes with a sassy response to let you know that maybe you should rethink your life choices (and your code).
- **Custom Roasts for Common Errors:** Includes specific roasts for `undefined`, `null`, `syntax`, and `reference` errors.
- **Graceful Exit Messages:** When you terminate your process, we roast you on your way out. Because why not?

## Installation

To use **Node-Roast**, you must have Node.js installed. Then, install it via npm:

```bash
npm install node-roast
```

## Usage

Once installed, just require **Node-Roast** in your code, and it will automatically replace `console.log()` and `console.error()` with the roasting versions.

```javascript
require('node-roast');
```

Now, every time you use `console.log()` or `console.error()`, you'll get a roast! For example:

```javascript
console.log("Your code works!");
// Output: [SUCCESS] "Wow, it worked! Accident or actual skill? The world may never know."

console.error("Something went wrong!");
// Output: [ERROR] "Oops! Looks like your code just took a vacation."
```

### Unhandled Rejections & Uncaught Exceptions

The module also handles unhandled promise rejections and uncaught exceptions with a roast message. It's the perfect way to deal with those pesky runtime errors!

```javascript
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection: " + reason);
});
```

This will automatically log test messages with success and error roasts.

## Exit Messages

When you terminate the process using `Ctrl+C` or other methods, you'll be roasted:

```bash
SIGINT: Process interrupted! Quitting like a true quitter...
SIGTERM: Process terminated! Hope your code wasn’t too attached.
```

## Conclusion

**Node-Roast** is a fun, humorous way to bring some light into the usually painful world of debugging. Next time your code throws an error or works perfectly, at least you'll get a good laugh! Enjoy the roasts, and maybe learn something along the way.