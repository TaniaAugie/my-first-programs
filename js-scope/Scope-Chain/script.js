// The scope chain refers to the hierarchy of scopes in a program. When looking up a variable, the interpreter traverses through this chain to find the variable.

let globalVar = `global`;

function outer() {
  let outerVar = `outer`;

  function inner() {
    console.log(globalVar); // Accessing globalVar from the outer scope chain
    console.log(outerVar); // Accessing outerVar from the immediate outer scope
  }
  inner();
}
outer();
