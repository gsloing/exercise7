// greetings -- java func

// console.log(greetings[]);
// function greetins() {
//     return "Hello";

// 

// IIFE (Immediately Invoked Function Expression)
//Anonymous Function
// (function () {
//     console.log("Hello IIFE");
// })();

const output = (function () {
    return "Hello IIFEs";
})();

console.log(output);

// Callback Function

function createGreetings(name, callback) {
    const greetings = "Hello " + name;
    callback(greetings);
}

function logGreetings(greetings) {
    console.log(greetings);
}

createGreetings("John", logGreetings);

function createGreetings(name, callback) {
    const greetings = "Hello " + name;
    callback(greetings);
}

createGreetings("John", function (greetings) {
    console.log(greetings);
});