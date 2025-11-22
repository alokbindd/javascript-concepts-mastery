# JavaScript Execution Context & Scope Chain & lexical environment

## ✔ Global Execution Context

When JavaScript starts executing a program, it creates the **Global Execution Context (GEC)**.  
The GEC has two main parts:

1. **Memory Component (Variable Environment)**  
   - Allocates memory for all variables and functions  
   - Variables are set to `undefined` initially  
   - Functions are stored as references

2. **Lexical Environment**  
   - Contains variable declarations + references to outer environments  
   - In the global scope, the outer reference is `null`

---

## ✔ Local (Function) Execution Context

When a function is invoked, JavaScript creates a **Local Execution Context (LEC)** for that function.  
It includes:

- Its own memory for local variables and functions  
- A lexical environment that has a **reference to its parent lexical environment**

This parent-child link forms the **scope chain**.

---

## ✔ Example 1
```js
function a() {
    console.log(b);
}

var b = 10;
a(); 
// Output: 10
```

### Explanation:
- Function `a` has its own local execution context.
- Inside `a`, JavaScript searches for `b` in the local scope.
- Since `b` is not found locally, it looks into the **parent lexical environment** (global).
- It finds `b = 10`, so it prints `10`.

---

## ✔ Example 2 (Nested Functions)
```js
function a() {
    var b = 10;
    
    function c() {
        console.log(b);
    }
    
    c();
}

a();
```

### Explanation:
- Function `c` does not have `b` in its local scope.
- It looks outward into its parent lexical environment (function `a`).
- It finds `b = 10` and prints it.

---

## ✔ What is Scope Chain?

The **scope chain** is the mechanism that allows JavaScript to access variables from outer (parent) scopes when they are not available in the current (local) scope.

> In simple words:  
> *If a variable is not found in the current function, JavaScript moves outward step-by-step until it finds the variable.*

---

## ✔ Summary

| Concept | Meaning |
|--------|---------|
| **Execution Context** | Environment where JS code is evaluated |
| **Global Execution Context** | Created when JS program starts |
| **Local Execution Context** | Created when a function is invoked |
| **Lexical Environment** | Stores identifiers + reference to parent environment |
| **Scope Chain** | Path JS uses to find variables from inner to outer scopes |

