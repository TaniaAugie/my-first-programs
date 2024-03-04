//Refactor the function addNumbers() to use the rest operator.

/* function addNumbers(numbers) {
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
} */

function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
