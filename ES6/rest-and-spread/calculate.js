// Refactor the function calculate() to use the rest operator.

/* function calculate(product, ...numbers) {
  return numbers.map(function (number) {
    return number * product;
  });
} */

function calculate(product, ...numbers) {
  return numbers.map((number) => number * product);
}
