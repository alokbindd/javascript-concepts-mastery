# JavaScript Closures — Complete Guide

A **closure** is one of the most powerful concepts in JavaScript.

A closure is created when an **inner function remembers** and can access variables from its **outer function's scope**, even after the outer function has returned.

---

# 🔹 What Is a Closure?

> **A closure is the combination of a function and its lexical environment.**

This means the inner function “remembers” the variables of the outer function **even when the outer function has finished execution**.

---

# 🔹 Example 1 — Basic Closure

```js
function x() {
    var a = 10;

    function y() {
        console.log(a); // inner function accessing outer variable
    }

    y();
}

x();
```

### ✔ Explanation
- `y()` is inside `x()`, so it forms a closure.
- `y()` can access `a` from its outer lexical scope.

---

# 🔹 Example 2 — Closure After Return

```js
function x() {
    var a = 10;

    function y() {
        console.log(a);
    }

    a = 200;       // updated value before returning
    return y;      // returning the inner function
}

var z = x();
console.log(z); // prints the function y

/* 
Hundreds or thousands of lines of code may exist here...
*/

z(); // prints 200
```

### ✔ Explanation
- Even after `x()` finishes execution and its execution context is removed,
  `y()` **still remembers** `a`.
- Since `a` was updated to **200** before returning, `z()` prints `200`.
- This demonstrates a closure preserving the lexical environment.

---

# 🔹 Example 3 — Nested Closures (Multi-Level Scope)

```js
function z() {
    var b = 900;

    function x() {
        var a = 10;

        function y() {
            console.log(a, b);
        }

        y();
    }

    x();
}

z();
```

### ✔ Explanation
Here, we have **3 levels** of nested functions:

```
y() → x() → z() → Global
```

`y()` can access:
- `a` from `x()` (its parent)
- `b` from `z()` (grandparent)

✔ This is possible because closures follow **lexical scope chain rules**.  
✔ JavaScript always looks outward through parent scopes to resolve variables.

---

# 🔹 Why Closures Are Powerful

Closures allow:

- Data privacy  
- Function factories  
- Maintaining state without global variables  
- Creating modules  
- Callback functions  
- Memoization and caching patterns  

---

# 🔹 Key Points to Remember

| Topic | Explanation |
|-------|-------------|
| Closure | Function + lexical environment it was created in |
| Lexical Scope | JS resolves variables by looking outward (scope chain) |
| Outer Scope Access | Inner functions can access outer variables |
| Persistence | Closure keeps variables alive even after outer function returns |

---

# ✔ Final Summary

- A closure happens when an inner function remembers variables from its outer function.
- Closures preserve **updated values**, not just the initial ones.
- Closures work across multiple nested levels.
- Closures are the foundation for many JS features.

---

