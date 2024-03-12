const input = document.getElementById("input");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value;
  const reverse = reverseString(value);

  if (value === reverse) {
    alert("Congrats your word is PALINDROME");
  } else {
    alert("Word is Not a Palindrome");
  }
  input.value = "";
}
