# JavaScript Closures with setTimeout — Complete Guide

This document explains how **closures**, **loops**, and **setTimeout** interact in JavaScript.  
It covers four essential cases:

1. Basic closure with `setTimeout`  
2. The `var` loop problem  
3. Fix using `let`  
4. Fix without `let` using manual closures  

---

# 🔹 CASE 1 — Basic Closure with setTimeout

```js
function x() {
    var i = 1;
    setTimeout(function (){
        console.log(i);
    }, 3000);
    console.log("Hello world");
}
x();
```

### ✔ Explanation
- JavaScript does **not wait** for `setTimeout`.
- The callback is scheduled and JS continues execution.
- A **closure** is formed, so the callback remembers the reference to `i`.
- After 3 seconds, it prints `i` from its lexical environment.

---

# 🔹 CASE 2 — Using var inside setTimeout (Problem)

Goal: Print numbers **1 to 5**, each after `i` seconds.

```js
function x() {
    for (var i = 1; i <= 5; i++){
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Hello world");
}
x();
```

### ❌ Output:
```
Hello world
6
6
6
6
6
```

### ❓ Why does this happen?

- `var i` is declared **once** in function scope.
- All 5 callbacks share the **same reference** to this single variable.
- After the loop finishes, `i` becomes **6**.
- When callbacks execute, they all print **6**.

This is a classic closure + `var` loop problem.

---

# 🔹 CASE 3 — Using let inside setTimeout (Correct Solution)

```js
function x() {
    for (let i = 1; i <= 5; i++){
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Hello world");
}
x();
```

### ✔ Why this works
- `let` is **block-scoped**.
- Each iteration of the loop gets a **new copy** of `i`.
- Each callback closes over a **separate lexical environment**.
- Therefore, outputs are:

```
Hello World
1
2
3
4
5
```

---

# 🔹 CASE 4 — Solution Without let (Using Closures)

```js
function x() {
    for (var i = 1; i <= 5; i++){
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }
        close(i); // Pass the current value
    }
    console.log("Hello world");
}
x();
```

### ✔ How this works
- `close(i)` passes the **current value** of `i` as argument `x`.
- Each call to `close()` creates a **new closure** containing its own `x`.
- The callback inside `setTimeout` remembers this `x`, not the outer `i`.

### ✔ This prints:
```
1
2
3
4
5
```

---

# 🧠 Summary Table

| Case | Variable | Behavior | Output |
|------|----------|----------|--------|
| Case 1 | `var i` | closure remembers variable | prints 1 after 3 sec |
| Case 2 | `var i` in loop | one shared variable; prints final value | prints 6 × 5 times |
| Case 3 | `let i` in loop | new binding each iteration | prints 1 → 5 |
| Case 4 | `var i` + manual closure | parameter creates new environment | prints 1 → 5 |

---

# ✔ Key Takeaways

- `setTimeout` callbacks run **after the loop finishes**.
- `var` inside loops causes unexpected closure behavior.
- `let` solves the issue by creating **separate bindings**.
- Without `let`, manually create closures using helper functions.
- Closures allow callback functions to remember variables even later in time.

---

