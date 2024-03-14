// Write a function `removeLastVowel` that accepts a string as argument. The function should return
// the string with its last vowel removed. Vowels are the letters a, e, i, o, u

function removeLastVowel(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let i = str.length - 1; i >= 0; i--) {
    if (vowels.has(str[i].toLowerCase())) {
      return str.slice(0, i) + str.slice(i + 1);
    }
  }
  return str;
}

console.log(removeLastVowel("speaker")); // 'speakr'
console.log(removeLastVowel("trading")); // 'tradng'
console.log(removeLastVowel("thunder")); // 'thundr'
console.log(removeLastVowel("myth")); // 'myth'
