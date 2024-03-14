// Write a function `endsInLy` that accepts a string as an argument and returns a boolean indicating
// whether or not the string ends in the substring 'ly'.

let endsInLy = function (str) {
  let secondLastChar = str[str.length - 2];
  let lastChar = str[str.length - 1];
  let result = secondLastChar + lastChar;

  if (result === "ly") {
    return true;
  } else {
    return false;
  }
};

console.log(endsInLy("pretty")); // false
console.log(endsInLy("instant")); // false
console.log(endsInLy("analytic")); // false
console.log(endsInLy("timidly")); //true
console.log(endsInLy("fly")); // true
console.log(endsInLy("gallantly")); //true
