// Write a function `stringSize` that accepts a string as an argument. The function should return the
// string 'small' if the argument is shorter than 5 characters, 'medium' if it is exactly 5 characters, and
// 'large' if it is longer than 5 characters.

let stringSize = function (str) {
  let size = str.length;
  if (size > 5) {
    console.log("large");
  } else if (size === 5) {
    console.log("medium");
  } else {
    console.log("small");
  }
};

console.log(stringSize("cat")); // small
console.log(stringSize("bell")); // small
console.log(stringSize("ready")); //medium
console.log(stringSize("shirt")); //medium
console.log(stringSize("shallow")); //large
console.log(stringSize("intelligence")); // large
