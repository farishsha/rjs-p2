// Write a function that returns a message using template literals.

function getMessage(name, age) {
    // Write your code here
     return `Hello, my name is ${name}and i am${age} years old.`;
}
console.log(getMessage("farish",20));
// Don't change the code below
console.log(getMessage(process.argv[2], process.argv[3]));

module.exports = getMessage;