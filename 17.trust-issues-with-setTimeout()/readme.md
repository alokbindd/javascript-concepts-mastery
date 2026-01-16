# 😵‍💫 TRUST ISSUES with `setTimeout()` in JavaScript

This repository explains **why developers say “you can’t trust setTimeout”** and how JavaScript’s **event loop**, **call stack**, and **callback queue** affect its behavior.

---

## 1️⃣ Why Do We Have “Trust Issues” with `setTimeout()`?

Let’s start with a simple example:

```js
console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

console.log("End");
```

### ✅ Output:
```
Start
End
Callback
```

At first glance, this looks correct — the callback runs after 5 seconds.  
But the real behavior depends on **how JavaScript executes code**.

---

## 2️⃣ What Actually Happens Behind the Scenes?

### Step-by-step execution:

1. JavaScript creates the **Global Execution Context (GEC)** and pushes it onto the **Call Stack**.
2. `"Start"` is printed.
3. `setTimeout` is encountered:
   - The callback is registered with **Web APIs**
   - A **timer of 5 seconds** starts
   - JavaScript does **not wait**
4. `"End"` is printed.
5. After 5 seconds, the callback is placed into the **Callback Queue**.
6. The **Event Loop** checks:
   - Is the Call Stack empty?
7. If yes → callback is pushed to the Call Stack and executed.

✔ Important:  
> `setTimeout` does **not guarantee exact timing** — it guarantees a **minimum delay**.

---

## 3️⃣ What If the Call Stack Is Busy?

Now let’s block the main thread.

```js
console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

console.log("End");

let startTime = new Date().getTime();
let endTime = startTime;

while (endTime < startTime + 10000) {
    endTime = new Date().getTime();
}

console.log("While loop finished");
```

### ❗ What happens here?

- The timer expires after 5 seconds
- BUT the **Call Stack is busy for 10 seconds**
- The callback **cannot execute** until the stack is empty

### ✅ Actual output:
```
Start
End
While loop finished
Callback
```

🧠 **Key Insight:**  
> Even if the timer expires, the callback must **wait for the Call Stack to be empty**.

This is the **core reason** behind the “trust issues”.

---

## 4️⃣ What If `setTimeout` Delay Is `0`?

Many developers expect this:

```js
console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 0);

console.log("End");
```

### ❌ Expected (wrong):
```
Start
Callback
End
```

### ✅ Actual Output:
```
Start
End
Callback
```

### Why?

- Even with `0ms`, the callback:
  - Goes to Web APIs
  - Then to Callback Queue
  - Waits for the Call Stack to be empty
- Synchronous code **always runs first**

---

## 5️⃣ Using `setTimeout(0)` to Defer Code

```js
console.log("Start");

function cb() {
    console.log("Callback");
}

setTimeout(cb, 0);

console.log("End");
```

### Output:
```
Start
End
Callback
```

✔ This is useful when:
- You want something to run **after the current execution**
- You want to defer heavy or non-critical logic

---

## 🧠 Final Takeaways

| Concept | Reality |
|------|--------|
| `setTimeout` timing | Minimum delay, not guaranteed |
| JavaScript | Single-threaded |
| Callback execution | Only when Call Stack is empty |
| `setTimeout(0)` | Still asynchronous |
| Event Loop | Controls execution order |

---

## 🚨 Why Developers Say “Don’t Trust setTimeout”

- Timers depend on:
  - Call Stack availability
  - Blocking code
  - Event Loop scheduling
- Heavy synchronous code can **delay callbacks**
- Timing is **not precise**

---

## ✅ Conclusion

> **`setTimeout` does not run after X milliseconds —  
it runs *after at least X milliseconds*, when the Call Stack is free.**

Understanding this removes the “trust issues” 😉

---
## 🧭 Navigation

| ⬅️ Previous | 🏠 Home | ➡️ Next |
|------------|--------|---------|
| [JS Engine – Google V8](../16.js-engine-Google-v8-architecture) | [Index](../README.md) | [Higher-Order Functions](../18.Higher-Order-Functions-ft.Functional-Programming) |

---