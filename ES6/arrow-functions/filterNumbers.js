// Refactor the function filterNumbers() to use arrow function syntax.

/* function filterNumbers(arr, largerThan) {
  return arr.filter(function (number) {
    return number > largerThan;
  });
} */

const filterNumbers = (arr, largerThan) =>
  arr.filter((number) => number > largerThan);
