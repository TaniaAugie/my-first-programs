// Write a function `caseChange` that accepts a string and a boolean as arguments. The function should
// return the uppercase version of the string if the boolean is true. The function should return the
// lowercase version of the string if the boolean is false.

let caseChanger = function (str, boolean) {
  if (boolean) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};

console.log(caseChanger("Super", true)); // SUPER
console.log(caseChanger("Super", false)); // Super
console.log(caseChanger("tAmBourine", true)); // TAMBOURINE
console.log(caseChanger("tAmBourine", false)); // tambourine
