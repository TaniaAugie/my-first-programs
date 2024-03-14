// Refactor the function join() to use the spread operator.

/* function join(array1, array2) {
  return array1.concat(array2);
} */

function join(array1, array2) {
  return [...array1, ...array2];
}
