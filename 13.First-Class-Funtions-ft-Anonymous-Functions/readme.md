# 🧠 JavaScript Functions — Declarations, Expressions & First-Class Functions

This document explains different ways functions are created and used in JavaScript, along with important interview concepts such as hoisting, anonymous functions, and first-class functions.

---

## 1️⃣ Function Statement (Function Declaration)

```js
function a() {
    console.log("a called");
}

a();
```

A **function statement** (also called a **function declaration**) defines a named function.

### ✔ Key property
Function declarations are **hoisted**, so they can be called **before** they are defined in the code.

---

## 2️⃣ Function Expression

```js
var b = function () {
    console.log("b called");
};

b();
```

A **function expression** stores a function inside a variable.

### ❌ Not hoisted like function declarations

```js
b(); // ❌ ReferenceError or TypeError

var b = function () {
    console.log("b called");
};
```

Here:
- `b` is hoisted as `undefined`
- The function is assigned only when execution reaches that line

---

## 3️⃣ Anonymous Function

```js
function () {
    // ❌ Syntax Error
}
```

An **anonymous function** is a function **without a name**.

It cannot exist by itself because JavaScript requires a name for function statements.

Anonymous functions are mostly used as **values**, for example:

```js
var x = function () {
    console.log("Hello");
};
```

---

## 4️⃣ Named Function Expression

```js
var c = function xyz() {
    console.log("c called");
};

c();   // works
xyz(); // ❌ ReferenceError
```

A **named function expression** gives a name to a function stored in a variable.

- The name `xyz` is only available **inside** the function itself
- It is **not** accessible in the outer scope

---

## 5️⃣ Parameters vs Arguments

```js
var d = function (param1, param2) {
    console.log(param1, param2);
};

d("hello", "world");
```

- **Parameters** → Variables listed in the function definition  
- **Arguments** → Actual values passed when the function is called  

```js
d(a, b);

d(
    function x() {},
    function y() {}
);
```

✔ Functions can be passed as arguments — this is a powerful JavaScript feature.

---

## 6️⃣ First-Class Functions (First-Class Citizens)

JavaScript treats functions as **first-class citizens**, meaning functions can:

- Be stored in variables  
- Be passed as arguments  
- Be returned from other functions  

```js
function a() {
    return function b() {
        console.log("inner function");
    };
}

console.log(a());  // returns function b
```

This ability is known as **First-Class Functions**.

---

# 🧠 Final Summary

| Concept | Meaning |
|--------|--------|
| Function Declaration | Function defined using `function name()` |
| Function Expression | Function stored in a variable |
| Anonymous Function | Function without a name |
| Named Function Expression | Function expression with an internal name |
| Parameters | Variables in function definition |
| Arguments | Actual values passed to a function |
| First-Class Functions | Functions that can be treated like values |

---

