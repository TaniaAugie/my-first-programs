// Refactor the function add() to use the default parameter syntax.

/* function add(a, b) {
  a = a || 1;
  b = b || 1;
  return a + b;
} */

function add(a = 1, b = 1) {
  return a + b;
}
