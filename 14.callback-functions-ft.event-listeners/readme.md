# 🧠 JavaScript Callbacks, Event Loop & Closures

This repository explains how **callback functions**, **asynchronous behavior**, **event listeners**, and **closures** work in JavaScript.

---

## 1️⃣ What is a Callback Function?

> A **callback function** is a function that is passed as an argument to another function and is executed later.

### Example with `setTimeout`
```js
setTimeout(function () {
  console.log("Timer");
}, 5000);
```

Here, the anonymous function is a **callback** that runs after 5 seconds.

---

### Example with a custom function
```js
function x(y) {
  console.log("X");
  y();
}

x(function y() {
  console.log("Y");
});
```

Output:
```
X
Y
```

Here, `y` is a **callback function** passed into `x`.

---

## 2️⃣ Synchronous vs Asynchronous JavaScript

JavaScript is:

- **Single-threaded** → it has one call stack  
- **Synchronous by default** → it executes code line by line  

However, JavaScript can perform **asynchronous operations** using callbacks, Web APIs, and the event loop.

### Example:
```js
setTimeout(function () {
  console.log("Timer");
}, 5000);

console.log("X");
console.log("Y");
```

Output:
```
X
Y
Timer   // after 5 seconds
```

Explanation:
- `setTimeout` is handled by the browser (Web API)
- JavaScript does NOT wait
- The callback is executed later via the **event loop**

---

## 3️⃣ What is the Main Thread?

JavaScript runs on a **single call stack**, also called the **main thread**.

It:
- Executes functions
- Runs synchronous code
- Cannot run two things at the same time

---

## 4️⃣ What is Main Thread Blocking?

If a function takes too long to execute, it blocks the call stack.

This prevents:
- UI updates
- Button clicks
- Other code execution  

This is called **main thread blocking**.

Callbacks and async APIs help avoid this problem.

---

## 5️⃣ Event Listeners are Callback Functions

```js
document.getElementById("ClickMe").addEventListener("click", function () {
  console.log("Button Clicked");
});
```

Here, the function is a **callback** that runs when the user clicks the button.

---

## 6️⃣ Closures with Event Listeners (Important Interview Question)

```js
function attachEventListener() {
    let count = 0;

    document.getElementById("ClickMe").addEventListener("click", function () {
        console.log("Button Clicked", ++count);
    });
}

attachEventListener();
```

### Why does this work?

- The callback function forms a **closure**
- It remembers `count` even after `attachEventListener()` finishes
- Each click increases the same `count`

This is an example of **data hiding using closures**

---

## 7️⃣ Garbage Collection & removeEventListener

Event listeners keep references to variables inside their closures.

If we do not remove them:
- Memory stays occupied
- Can cause **memory leaks**

Example:
```js
element.removeEventListener("click", handler);
```

Always remove unused event listeners when they are no longer needed.

---

# 🧠 Final Summary

| Concept | Meaning |
|--------|--------|
| Callback Function | A function passed to another function |
| Asynchronous JS | Code that runs later without blocking |
| Event Loop | Moves async callbacks to call stack |
| Main Thread | JavaScript’s single execution stack |
| Closure | Function + its lexical environment |
| Event Listener | Callback attached to user actions |
| Memory Leak | Memory not released due to active references |

---