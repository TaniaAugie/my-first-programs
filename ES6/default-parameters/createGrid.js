// Refactor the function createGrid() to use the destructuring.

/* function createGrid(array) {
  const width = array[0];
  const height = array[1];
  return `Generates a ${width} x ${height} grid`;
} */

function createGrid([width, height]) {
  return `Generates a ${width} x ${height} grid`;
}
