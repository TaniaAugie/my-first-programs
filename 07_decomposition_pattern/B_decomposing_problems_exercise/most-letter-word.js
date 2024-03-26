// Write a function `mostLetterWord` that accepts a sentence string and a character as arguments.
// The function should return the word of the sentence that contains the character the most number
// of times. You can assume that the sentence contains at least one word. If there is a tie, return
// the word that appears earlier in the sentence.

const mostLetterWord = function (str, char) {
  let arr = str.split(" ");
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];

    let count = countCharater(word, char);

    obj[word] = count;
  }
  return;
};

const countCharater = function (word, char) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    let str = word[i];
    if (str === char) {
      count += 1;
    }
  }
  return count;
};

console.log(
  mostLetterWord("she received an award for excellence in science", "e")
); // 'excellence'
console.log(
  mostLetterWord("she received an award for excellence in science", "a")
); // 'award'
console.log(mostLetterWord("I hope sophomore year comes soon", "o")); // 'sophomore'
console.log(mostLetterWord("I hope sophomore year comes soon", "s")); // 'sophomore'
