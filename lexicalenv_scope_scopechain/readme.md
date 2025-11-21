(This file explains JavaScript lexical environment, scope, and scope chain with examples.)

# Lexical Environment, Scope, and Scope Chain

## Overview

JavaScript's execution context relies on the concept of a *lexical environment*. A lexical environment is an internal data structure that holds identifier-variable mappings (bindings) and a reference to an outer lexical environment. Together these determine how names (variables, functions) are resolved at runtime.

## Scope types

- **Global scope**: Variables declared in the global context are available anywhere in the program.
- **Function scope**: Each function creates a new lexical environment; variables declared with `var` inside a function are local to that function.
- **Block scope**: `let` and `const` create block-scoped bindings — they exist only within the nearest `{ ... }` block.

## Hoisting and temporal dead zone (TDZ)

- **Hoisting**: Declarations are conceptually moved to the top of their scope. For `var`, the declaration is hoisted and initialized with `undefined`. For `let`/`const`, the declaration is hoisted but not initialized — accessing them before the declaration throws a `ReferenceError` (this period is called the Temporal Dead Zone).

Example (hoisting with `var`):

```js
console.log(x); // undefined
var x = 5;
```

Example (TDZ with `let`):

```js
console.log(y); // ReferenceError
let y = 10;
```

## Scope chain

When the engine looks up a variable name, it starts in the current lexical environment. If the identifier isn't found, it moves to the outer lexical environment, and so on until it reaches the global environment. This lookup path is the *scope chain*.

Example demonstrating scope chain:

```js
const a = 1; // global

function outer() {
	const b = 2;

	function inner() {
		const c = 3;
		console.log(a, b, c); // 1 2 3 — inner can access its own, outer's, and global bindings
	}

	inner();
}

outer();
```

## Lexical vs dynamic scope

JavaScript uses *lexical* (static) scope: the scope of a variable is determined by its location in the source code at write-time, not by the call-time. That is why functions remember the environment where they were defined.

Example (closures capture lexical environment):

```js
function makeCounter() {
	let count = 0;
	return function () {
		count += 1;
		return count;
	};
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2 — the inner function closes over `count`
```

## Common pitfalls and tips

- Rely on `let`/`const` instead of `var` to avoid unexpected hoisting/behavior.
- Be mindful of closures holding references to outer variables — this can affect memory if not managed properly.
- Understand when variables are created and initialized to debug `ReferenceError` vs `undefined` issues.

## Suggested additions

- Add small diagrams showing lexical environments and the scope chain for visual learners.
- Include interactive examples or JSFiddle links so readers can experiment.
- Add a short section on `this` vs lexical scope (arrow functions inherit lexical `this`).

(End of file)

