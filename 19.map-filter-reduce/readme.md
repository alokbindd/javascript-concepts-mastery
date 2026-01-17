# 🔥 JavaScript `map`, `filter`, and `reduce` — From Basics to Tricky Examples

This repository explains JavaScript’s most important **array methods**:
- `map()`
- `filter()`
- `reduce()`

These methods are the foundation of **functional programming** in JavaScript and are frequently asked in **interviews**.

---

## 📌 1. `map()`

The `map()` method:
- Iterates over each element of an array
- Applies a function to each element
- Returns a **new array**
- Does **not** modify the original array

### Example
```js
const arr = [2, 5, 3, 8, 10];

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

console.log(arr.map(double));
console.log(arr.map(triple));
console.log(arr.map(x => x.toString(2))); // convert to binary
```

✔ `map()` is used for **transformation**

---

## 📌 2. `filter()`

The `filter()` method:
- Iterates over an array
- Returns a **new array**
- Includes only those elements that satisfy a condition

### Example
```js
function isOdd(x) {
    return x % 2 !== 0;
}

function isEven(x) {
    return x % 2 === 0;
}

console.log(arr.filter(isOdd));
console.log(arr.filter(isEven));
console.log("Greater than 4:", arr.filter(x => x > 4));
```

✔ `filter()` is used for **selection**

---

## 📌 3. `reduce()`

The `reduce()` method:
- Takes a callback function and an initial value
- Reduces the array to a **single value**
- Can be used for sum, max, grouping, etc.

### ➤ Sum of Array (Traditional Way)
```js
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(findSum(arr));
```

### ➤ Sum Using `reduce()`
```js
const sum = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(sum);
```

---

### ➤ Find Maximum Value

#### Traditional Way
```js
function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));
```

#### Using `reduce()`
```js
const max = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);

console.log(max);
```

✔ `reduce()` is the **most powerful** array method

---

## 📌 4. Tricky Real-World Examples

### User Data
```js
const users = [
    { firstname: "Alok", lastname: "Bind", age: 22 },
    { firstname: "Niraj", lastname: "Kewat", age: 24 },
    { firstname: "Dhiraj", lastname: "Kewat", age: 22 },
    { firstname: "Shekhar", lastname: "Tiwari", age: 26 },
    { firstname: "Narendra", lastname: "Modi", age: 78 },
    { firstname: "Elon", lastname: "Musk", age: 50 },
    { firstname: "Joe", lastname: "Biden", age: 78 },
];
```

---

### ➤ Get Full Names Using `map()`
```js
const fullNames = users.map(user => user.firstname + " " + user.lastname);
console.log(fullNames);
```

---

### ➤ Count Users by Age Using `reduce()`
```js
const ageCount = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age]++;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(ageCount);
```

---

### ➤ First Names of Users Younger Than 30 (Filter + Map)
```js
const youngUsers = users
    .filter(user => user.age < 30)
    .map(user => user.firstname);

console.log(youngUsers);
```

---

### ➤ Same Result Using Only `reduce()`
```js
const youngUsersUsingReduce = users.reduce(function (res, curr) {
    if (curr.age < 30) {
        res.push(curr.firstname);
    }
    return res;
}, []);

console.log(youngUsersUsingReduce);
```

✔ This shows how **map + filter can be replaced by reduce**

---

## 🧠 Key Differences

| Method | Purpose | Output |
|------|--------|--------|
| `map()` | Transform elements | New array |
| `filter()` | Select elements | New array |
| `reduce()` | Aggregate data | Any value |

---

## 🎯 Key Takeaways

- `map()` → transformation  
- `filter()` → selection  
- `reduce()` → aggregation  
- All three:
  - Do not mutate original array
  - Support functional programming
  - Are Higher-Order Functions

---

## 🚀 Why This Matters

These methods are heavily used in:
- React
- Node.js
- Data processing
- Interviews

Mastering them means mastering **modern JavaScript**.

---

