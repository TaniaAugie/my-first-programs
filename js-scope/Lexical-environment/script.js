// A lexical environment consists of all the variables and their values that are accessible from a particular portion of a program during its execution. It also includes references to the outer lexical environments forming a chain.

function outer() {
  let a = 10;
  function inner() {
    console.log(a); // accessing 'a' from outer lexical environment
  }
  inner();
}
outer(); // output: 10
