# ES6 Concepts Explained

This README provides clear and concise explanations of common JavaScript and ES6 concepts. Each section addresses a frequently asked question to help developers understand the basics of modern JavaScript.

---

## 1) Difference Between `var`, `let`, and `const`

| Feature            | `var`                        | `let`                        | `const`                      |
|--------------------|-------------------------------|-------------------------------|------------------------------|
| **Scope**          | Function-scoped               | Block-scoped                   | Block-scoped                  |
| **Re-declaration** | Allowed                        | Not allowed                     | Not allowed                    |
| **Re-assignment**  | Allowed                        | Allowed                          | Not allowed                     |
| **Hoisting**       | Hoisted and initialized as `undefined` | Hoisted but **not** initialized | Hoisted but **not** initialized |

**Example:**
```js
var x = 10;
let y = 20;
const z = 30;
```

---

## 2) Difference Between `map()`, `forEach()`, and `filter()`

| Method      | Returns a New Array | Modifies Original Array | Usage |
|-------------|----------------------|--------------------------|-------|
| **map()**   | ✅ Yes               | ❌ No                      | Transform elements and return a new array |
| **forEach()**| ❌ No                | ❌ No                      | Loop through elements, usually for side effects |
| **filter()**| ✅ Yes               | ❌ No                      | Return a new array with elements that meet a condition |

**Example:**
```js
const numbers = [1, 2, 3, 4, 5];

// map()
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// forEach()
numbers.forEach(num => console.log(num)); // Prints each number

// filter()
const even = numbers.filter(num => num % 2 === 0); // [2, 4]
```

---

## 3) Arrow Functions in ES6

Arrow functions are a shorter way to write functions introduced in ES6. They also **do not have their own `this` context**, which makes them useful for callbacks.

**Example:**
```js
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 3)); // 8
```

---

## 4) Destructuring Assignment in ES6

Destructuring allows you to **unpack values** from arrays or objects into separate variables in a clean and readable way.

**Array Destructuring:**
```js
const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a, b, c); // 10 20 30
```

**Object Destructuring:**
```js
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age); // Alice 25
```

---

## 5) Template Literals in ES6

Template literals are **string literals that allow embedded expressions**, making string formatting easier and more readable. They use **backticks (`)** instead of quotes.

**Difference from String Concatenation:**
- No need to use `+` operator for concatenation.
- Can include variables and expressions directly using `${}`.
- Supports **multi-line strings** without special characters.

**Example:**
```js
const name = "John";
const age = 30;

// Traditional string concatenation
console.log("My name is " + name + " and I am " + age + " years old.");

// Template literal
console.log(`My name is ${name} and I am ${age} years old.`);
```

---

## Summary
- **var, let, const**: Use `let` and `const` over `var` for block-scoping and better readability.
- **map, forEach, filter**: Use `map` for transformation, `forEach` for looping, and `filter` for conditional filtering.
- **Arrow Functions**: Shorter syntax and lexical `this` binding.
- **Destructuring**: Simplifies variable extraction from arrays and objects.
- **Template Literals**: Cleaner, more readable strings with embedded variables and expressions.
