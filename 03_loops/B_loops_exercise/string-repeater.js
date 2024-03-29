// Write a function named `stringRepeater(str, num)` that accepts a string and a number as arguments.
// The function should return a new string consisting of the `str` repeated `num` number of times.

let stringRepeater = function (str, num) {
  let newStr = "";

  for (let i = 1; i <= num; i++) {
    newStr = newStr + str;
  }
  return newStr;
};

console.log(stringRepeater("q", 4)); // 'qqqq'
console.log(stringRepeater("go", 2)); // 'gogo'
console.log(stringRepeater("tac", 3)); // 'tactactac'
