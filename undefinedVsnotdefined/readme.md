# `undefined` vs `not defined` in JavaScript
## ✔ What is `undefined`?

`undefined` means that a variable has been **declared** but **no value has been assigned** to it.  
The JavaScript engine allocates memory for the variable and automatically sets its initial value to `undefined`.

### Example:
```js
var a;
console.log(a); 
// Output: undefined

## ✔ What is `not defined`?

`not defined` means that a variable was never declared anywhere in the script.
When you try to access such a variable, the JavaScript engine cannot find it in memory and throws a `ReferenceError`.

Example:
var a;
console.log(x); 
// Output: ReferenceError: x is not defined


---

> Example:  
> You write your name on a form (**declared**), but you don’t fill the age field (**undefined**).  
> If the form doesn’t even have an age field (**not defined**), the system throws an error.

**Important:**  
`undefined` is actually a **primitive value** in JavaScript, not just an error.

### “never assign undefined manually”  
This is considered a bad practice.

**Example:**  
```js
var a = undefined; // ❌ not recommended

## Important Notes

- `undefined` is a valid JavaScript value.
- You should not manually assign `undefined`. Instead, leave a variable unassigned.
- Accessing a `not defined` variable always throws a ReferenceError.
- A function with no return statement returns `undefined`.

