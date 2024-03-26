// Closure is a combination of a function and the lexical environment within which that function was declared. It allows a function to access variables from its outer scope even after the outer function has finished executing.

function outer() {
  let a = 10;
  function inner() {
    console.log(a); // inner function forms a closure over `a`
  }
  return inner;
}
let closureFunc = outer();
closureFunc(); // output: 10

//Problem: Write a function that creates a counter using closure.

function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log(count);
  }
  return increment;
}

let counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
