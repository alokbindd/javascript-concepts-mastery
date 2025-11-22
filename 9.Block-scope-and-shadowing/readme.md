# JavaScript Blocks, Scope, Shadowing & Lexical Environment

This document explains important JavaScript concepts including:

- Block scope  
- Lexical environment  
- `var`, `let`, `const` behavior  
- Shadowing and illegal shadowing  
- Lexical block scope  

---

# 🔹 1. Block

A **block** is a set of statements enclosed in `{ }`.

```js
{
    // this is a block
    // code inside curly braces is considered a block
}
```

Blocks are used in:

- if / else  
- loops  
- functions  
- switch statements  
- and anywhere JavaScript expects a single statement.

### Block Example
```js
if (true) {
    /* Compound statements written inside this block 
       are treated as one unit */
    var a = 10;
    console.log(a);
}
```

---

# 🔹 2. Block Scope

Variables declared using **let** and **const** are **block-scoped**.

```js
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
```

### ✔ Important Notes
- When a block finishes execution, **its lexical environment becomes inaccessible**.
- `let` and `const` live inside the **Block Lexical Environment**.
- `var` is **not block-scoped**.  
  In global scripts, `var` becomes a property of the global object (`window` / `globalThis`).

```js
console.log(a);  // valid
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError
```

---

# 🔹 3. Shadowing

**Variable shadowing** occurs when a variable declared in an inner scope  
has the same name as a variable in an outer scope.

---

## ➤ Example 1 — Shadowing with `var`

```js
var a = 40; // outer
console.log(a);

{
    var a = 10; // inner (same global scope)
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
```

### ✔ Explanation
- `var a` inside the block is **not block-scoped** → it belongs to the same global scope.
- The inner `var a` **modifies** the outer `var a`.
- Both reference the **same memory location**.

---

## ➤ Example 2 — Shadowing with `let`

```js
let b = 40; // outer
console.log(b);

{
    var a = 10;
    let b = 20; // inner block scoped
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(b);
```

### ✔ Explanation
Scopes created:
1. Global scope → `var a`  
2. Script scope → outer `let b`  
3. Block scope → inner `let b`, `const c`  

- Inner `let b` shadows outer `let b`  
- Separate memory → inner prints 20, outer prints 40  

---

## ➤ Example 3 — Shadowing with `const`

```js
const c = 40; // outer

{
    var a = 10;
    let b = 20;
    const c = 30; // inner shadows outer

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(c);
```

✔ Works the same way as `let`.

---

# 🔹 4. Illegal Shadowing

Shadowing becomes **illegal** when a `var` declaration  
tries to redeclare a `let` or `const`.

### ❌ Illegal Example
```js
let a = 10;

{
    var a = 20; // SyntaxError
}
```

### Why?
- `var a` is hoisted to the outer/global scope  
- It attempts to redeclare existing `let a`  
- JavaScript does not allow redeclaring `let`/`const` using `var`

---

## ✔ Legal Example (Function Scope Is Separate)

```js
let a = 10;

function x() {
    var a = 20;
    console.log(a);
}

x();
```

Explanation:
- A function has its own scope  
- This is **variable masking**, not shadowing  

---

## ✔ Allowed Shadowing (let/const shadow var)

```js
var x = 100;
{
    let x = 20;
    console.log(x); // 20
}
console.log(x);     // 100
```

```js
var x = 100;
{
    const x = 20;
    console.log(x); // 20
}
console.log(x);     // 100
```

✔ `let` and `const` can shadow `var`  
❌ `var` cannot shadow `let` or `const`

---

# 🔹 5. Lexical Block Scope

```js
const e = 100;

{
    const e = 200;
    {
        const e = 300;
        console.log(e); // 300
    }
    console.log(e); // 200
}

console.log(e); // 100
```

### ✔ Explanation
This follows **lexical scoping**:
- JavaScript always accesses the **nearest declared variable** in the scope chain.

---

# ✔ Final Summary Table

| Feature | `var` | `let` | `const` |
|--------|--------|--------|---------|
| Scope | Function / Global | Block | Block |
| Redeclaration | ✔ Allowed | ❌ Not allowed | ❌ Not allowed |
| Reassignment | ✔ Allowed | ✔ Allowed | ❌ Not allowed |
| Hoisted | Yes (value: `undefined`) | Yes (TDZ) | Yes (TDZ) |
| Block Scoped | ❌ No | ✔ Yes | ✔ Yes |
| Can shadow `var` | — | ✔ Yes | ✔ Yes |
| Can be shadowed by `var` | ✔ Yes | ❌ No | ❌ No |

---
