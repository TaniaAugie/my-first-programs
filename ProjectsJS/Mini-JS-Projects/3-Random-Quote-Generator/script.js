const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the midst of winter, I found there was, within me, an invincible summer. - Albert Camus",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
];
const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }
  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIdx)) continue;

    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}
