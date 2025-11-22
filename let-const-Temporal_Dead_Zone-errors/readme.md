# JavaScript: `var`, `let`, `const` & Temporal Dead Zone (TDZ)

This document explains how `var`, `let`, and `const` behave in JavaScript, including hoisting, redeclaration rules, reassignment, the Temporal Dead Zone, and common JavaScript error types.

---

## 1. `var` — Hoisting & Redeclaration

`var` declarations are **hoisted** and initialized with `undefined`.  
Redeclaration is allowed.

### Example:
```js
var a = 10;
console.log(a); // 10

var a = 20;     // Redeclaration allowed
console.log(a); // 20
```

**Characteristics:**
- Function-scoped  
- Redeclaration allowed  
- Hoisted with `undefined`  

---

## 2. `let` — Block Scope & Temporal Dead Zone (TDZ)

`let` variables are hoisted but **not initialized**, creating the **TDZ**.  
They can be accessed only after declaration.

### TDZ Example:
```js
// console.log(b); // ReferenceError: Cannot access 'b' before initialization

let b = 10;
console.log(b); // 10
```

### ❌ Redeclaration is NOT allowed:
```js
let b = 10;
// let b = 20; // SyntaxError: Identifier 'b' has already been declared
```

### ✔ Reassignment IS allowed:
```js
let c;
c = 30;
c = 40; // Reassignment allowed
console.log(c); // 40
```

**Characteristics:**
- Block scoped  
- No redeclaration  
- Reassignment allowed  
- TDZ exists  
- Hoisted but uninitialized  

---

## 3. `const` — Block Scope & No Reassignment

`const` must be **initialized at declaration** and **cannot be reassigned**.

### Correct usage:
```js
const d = 40;
console.log(d); // 40
```

### ❌ Reassignment causes TypeError:
```js
// d = 50; // TypeError: Assignment to constant variable.
```

### ❌ Missing initializer causes SyntaxError:
```js
// const e; // SyntaxError: Missing initializer in const declaration
```

**Characteristics:**
- Block scoped  
- Must be initialized immediately  
- Cannot be reassigned  
- No redeclaration  

---

# 🔥 JavaScript Error Types Explained

JavaScript commonly throws **three important errors** related to variables and scope.

---

## 1. **SyntaxError**

Occurs when code violates JavaScript syntax rules — the JS engine cannot parse the code.

### Examples:
```js
let a = 10;
// let a = 20; // SyntaxError: Identifier 'a' has already been declared
```

```js
// const x; // SyntaxError: Missing initializer
```

---

## 2. **ReferenceError**

Occurs when accessing a variable that is:

- Not declared anywhere, or  
- Inside the **Temporal Dead Zone**, or  
- Out of scope  

### Examples:
```js
// console.log(x); // ReferenceError: x is not defined
```

```js
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

---

## 3. **TypeError**

Occurs when performing an invalid operation on a value or type.

### Examples:
```js
const d = 40;
// d = 50; // TypeError: Assignment to constant variable
```

```js
var y = 10;
// y(); // TypeError: y is not a function
```

---

# Summary Table

| Feature       | var | let | const |
|---------------|-----|-----|-------|
| Scope         | Function | Block | Block |
| Hoisted       | Yes (initialized with `undefined`) | Yes (uninitialized – TDZ) | Yes (uninitialized – TDZ) |
| Redeclaration | ✔ Allowed | ❌ Not allowed | ❌ Not allowed |
| Reassignment  | ✔ Allowed | ✔ Allowed | ❌ Not allowed |
| TDZ?          | No | Yes | Yes |

---

# Error Summary Table

| Error Type      | When It Occurs | Example |
|-----------------|----------------|---------|
| **SyntaxError** | Code violates JS syntax | `let a = 10; let a = 20;` |
| **ReferenceError** | Variable not found / TDZ | `console.log(b); let b = 10;` |
| **TypeError** | Invalid operation on value | `const x = 1; x = 2;` |

---
