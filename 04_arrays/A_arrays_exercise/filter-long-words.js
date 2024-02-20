// Write a function `filterLongWords` that accepts an array of strings as an argument. The function
// should return a new array containing only the strings that are less than 5 characters long.

let filterLongWords = function (arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element.length < 5) {
      newArr.push(element);
    }
  }
  return newArr;
};

console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']
