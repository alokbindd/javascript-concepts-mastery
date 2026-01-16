# 🔥 Higher-Order Functions ft. Functional Programming (JavaScript)

This repository explains **Higher-Order Functions (HOFs)** and how they enable **Functional Programming** in JavaScript using practical examples.

---

## 1️⃣ What is a Higher-Order Function (HOF)?

A **Higher-Order Function** is a function that:

- Takes another function as an argument  
- OR returns a function  

In JavaScript, functions are **first-class citizens**, meaning they can be:
- Assigned to variables
- Passed as arguments
- Returned from other functions

---

## 2️⃣ Problem: Repetitive Logic (Without HOF)

```js
const radius = [3, 4, 2, 5, 10];

const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};

const calculateCircumference = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
};

const calculateDiameter = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
};
```

❌ Problem:
- Repeated loop logic
- Violates **DRY (Don’t Repeat Yourself)** principle

---

## 3️⃣ Functional Programming Approach (Using HOF)

Instead of repeating logic, we separate **what to do** from **how to loop**.

```js
const radius = [3, 4, 2, 5, 10];

const area = function (r) {
    return Math.PI * r * r;
};

const diameter = function (r) {
    return 2 * r;
};

const circumference = function (r) {
    return 2 * Math.PI * r;
};

const calculate = function (arr, logic) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
```

✔ `calculate` is a **Higher-Order Function**  
✔ `area`, `diameter`, `circumference` are **callback functions**

---

## 4️⃣ Functions as Arguments (Callbacks)

A **callback function** is a function passed into another function to be executed later.

```js
calculate(radius, area);
```

Here:
- `calculate` → Higher-Order Function  
- `area` → Callback Function  

---

## 5️⃣ Built-in HOFs: `map`, `filter`, `reduce`

JavaScript provides built-in Higher-Order Functions.

Example using `map`:

```js
console.log(radius.map(area));
```

✔ `map` is a HOF  
✔ `area` is a callback  

---

## 6️⃣ Polyfill: Creating Our Own `map()` (Using Prototype)

```js
Array.prototype.calc = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
};

console.log(radius.calc(area));
console.log(radius.calc(circumference));
console.log(radius.calc(diameter));
```

### Key Points:
- `this` refers to the array on which `calc` is called
- Demonstrates how array methods internally work
- Shows real-world use of **prototype + HOF**

---

## 7️⃣ Benefits of Higher-Order Functions

✔ Encourages reusable code  
✔ Makes code modular and cleaner  
✔ Follows functional programming principles  
✔ Reduces duplication  
✔ Improves readability  

---

## 8️⃣ Key Terminology

| Term | Meaning |
|----|-------|
| First-Class Functions | Functions treated like values |
| Callback Function | Function passed to another function |
| Higher-Order Function | Takes or returns a function |
| Functional Programming | Programming using pure functions & composition |

---

## 🧠 Final Takeaway

> **Higher-Order Functions allow behavior to be passed as data**,  
making JavaScript powerful, expressive, and scalable.

Understanding HOFs is essential for mastering:
- `map`
- `filter`
- `reduce`
- Async programming
- Frameworks like React

---
