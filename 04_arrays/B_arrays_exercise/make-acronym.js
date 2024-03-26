// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should
// return a string containing the first character of each word in the sentence.

let makeAcronym = function (str) {
  let acronym = "";
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    acronym = acronym + element[0];
  }
  return acronym.toUpperCase();
};

console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS
