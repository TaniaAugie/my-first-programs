// Scope refers to the accessibility of variables and functions in a particular context in code. It determines where variables and functions are accessible.

function outer() {
  let a = 10;
  console.log(a); // 'a' is accessible within the scope of outer function
}
console.log(a); // 'a' is not accessible here
