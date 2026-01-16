// 1) What is a Higher-Order Function (HOF)?

// A higher-order function is a function that either:
//  Takes another function as an argument
//  Returns a function

// In JavaScript, functions are first-class citizens — they can be passed around like values.

// const radius = [3,4,2,5,10];

// const calculateArea = function (radius) {
//     const output = [];
//     for(let i = 0; i < radius.length;i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }

// console.log(calculateArea(radius))

// const calculateCircumference = function (radius) {
//     const output = [];
//     for(let i = 0; i < radius.length;i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }

// console.log(calculateCircumference(radius))

// const calculatediameter = function (radius) {
//     const output = [];
//     for(let i = 0; i < radius.length;i++) {
//         output.push(2 * radius[i] * radius[i]);
//     }
//     return output;
// }

// console.log(calculatediameter(radius))

// 2) Functional Programming Basics
// The idea is to write code in terms of small modular functions.
// Instead of repeating loops or logic, you use functions that handle behavior.
// This makes code DRY (Don’t Repeat Yourself).

const radius = [3,4,2,5,10];

const area = function (radius){
    return Math.PI * radius * radius
}

const diameter = function (radius){
    return 2 * radius
}

const Circumference = function (radius){
    return 2 * Math.PI * radius
}

const calculate = function (arr,logic) {
    const output = [];
    for(let i = 0; i < arr.length;i++) {
        output.push(logic(arr[i]));
    }
    return output;
}

console.log(calculate(radius,area))
console.log(calculate(radius,Circumference))
console.log(calculate(radius,diameter))

// 4) Functions as Arguments (Callback Functions)
// A callback is a function passed into another function to be invoked later.
// Example: calculate(arr, fn) — here fn is the callback.
// The HOF (calculate) uses the behavior defined in fn.

// 5) Polyfills & Array Methods
// You can write your own versions of methods such as:
// map()
// filter()
// reduce()
// All of these are higher-order functions because they take other functions as arguments.

console.log(radius.map(area))


// 7) Array prototype and this keyword. let make pass function like map()

Array.prototype.calc = function (logic) {
    const output = [];
    for(let i = 0; i < this.length;i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calc(area))
console.log(radius.calc(Circumference))
console.log(radius.calc(diameter))

// 8) Benefits of HOFs
// Encourages reusable code
// Helps follow functional programming paradigms
// Makes code modular and cleaner
// Reduces duplication

// 8) Key Terms

// First-Class Functions – can be stored in variables, passed, or returned.
// Callback Function – passed into another function to be executed later.
// Higher-Order Function – takes/returns functions.