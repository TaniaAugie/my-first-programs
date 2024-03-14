//Refactor the function sum() to use the rest operator.

/* function sum() {
  const argsArray = Array.prototype.slice.call(arguments);
  return argsArray.reduce(function (a, b) {
    return a + b;
  }, 0);
} */

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
