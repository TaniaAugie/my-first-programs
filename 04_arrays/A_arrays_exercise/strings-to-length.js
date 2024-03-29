// Write a function `stringsToLengths` that accepts an array of strings as an argument. The function
// should return a new array containing the lengths of the elements of the original array.

let stringsToLengths = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    newArr.push(element.length);
  }
  return newArr;
};

console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]
