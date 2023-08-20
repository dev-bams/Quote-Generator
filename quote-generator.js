const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    quoteAuthor: "Nelson Mandela",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    quoteAuthor: "Abraham Lincoln",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    quoteAuthor: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    quoteAuthor: "Winston Churchill",
  },
  {
    quote: "Believe you can and you're halfway there.",
    quoteAuthor: "Theodore Roosevelt",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    quoteAuthor: "Eleanor Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    quoteAuthor: "Confucius",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    quoteAuthor: "Wayne Gretzky",
  },
  {
    quote: "The best way to predict the future is to create it.",
    quoteAuthor: "Peter Drucker",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    quoteAuthor: "Sam Levenson",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    quoteAuthor: "John Lennon",
  },
  {
    quote: "It always seems impossible until it's done.",
    quoteAuthor: "Nelson Mandela",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    quoteAuthor: "Ralph Waldo Emerson",
  },
  {
    quote:
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    quoteAuthor: "Jimmy Dean",
  },
  {
    quote: "The future starts today, not tomorrow.",
    quoteAuthor: "Pope John Paul II",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    quoteAuthor: "Steve Jobs",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    quoteAuthor: "Franklin D. Roosevelt",
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    quoteAuthor: "Booker T. Washington",
  },
  {
    quote: "The best revenge is massive success.",
    quoteAuthor: "Frank Sinatra",
  },
  {
    quote:
      "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    quoteAuthor: "Jordan Belfort",
  },
  {
    quote: "The future depends on what you do today.",
    quoteAuthor: "Mahatma Gandhi",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    quoteAuthor: "Albert Einstein",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    quoteAuthor: "Henry David Thoreau",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    quoteAuthor: "Socrates",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    quoteAuthor: "C.S. Lewis",
  },
  {
    quote:
      "Happiness is not something ready-made. It comes from your own actions.",
    quoteAuthor: "Dalai Lama",
  },
  {
    quote: "The harder I work, the luckier I get.",
    quoteAuthor: "Samuel Goldwyn",
  },
  {
    quote: "If you're going through hell, keep going.",
    quoteAuthor: "Winston Churchill",
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    quoteAuthor: "Chinese Proverb",
  },
  {
    quote: "Do not wait for leaders; do it alone, person to person.",
    quoteAuthor: "Mother Teresa",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    quoteAuthor: "Franklin D. Roosevelt",
  },
  {
    quote: "You can't use up creativity. The more you use, the more you have.",
    quoteAuthor: "Maya Angelou",
  },
  {
    quote: "The mind is everything. What you think you become.",
    quoteAuthor: "Buddha",
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up.",
    quoteAuthor: "Vince Lombardi",
  },
  {
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    quoteAuthor: "Eleanor Roosevelt",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    quoteAuthor: "Albert Einstein",
  },
  {
    quote: "The true sign of intelligence is not knowledge but imagination.",
    quoteAuthor: "Albert Einstein",
  },
  {
    quote: "The best revenge is massive success.",
    quoteAuthor: "Frank Sinatra",
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    quoteAuthor: "Booker T. Washington",
  },
  {
    quote:
      "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    quoteAuthor: "Jordan Belfort",
  },
  {
    quote: "The future depends on what you do today.",
    quoteAuthor: "Mahatma Gandhi",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    quoteAuthor: "Albert Einstein",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    quoteAuthor: "Henry David Thoreau",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    quoteAuthor: "Socrates",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    quoteAuthor: "C.S. Lewis",
  },
  {
    quote:
      "Happiness is not something ready-made. It comes from your own actions.",
    quoteAuthor: "Dalai Lama",
  },
  {
    quote: "The harder I work, the luckier I get.",
    quoteAuthor: "Samuel Goldwyn",
  },
  {
    quote: "If you're going through hell, keep going.",
    quoteAuthor: "Winston Churchill",
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    quoteAuthor: "Chinese Proverb",
  },
  {
    quote: "Do not wait for leaders; do it alone, person to person.",
    quoteAuthor: "Mother Teresa",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    quoteAuthor: "Franklin D. Roosevelt",
  },
  {
    quote: "You can't use up creativity. The more you use, the more you have.",
    quoteAuthor: "Maya Angelou",
  },
  {
    quote: "The mind is everything. What you think you become.",
    quoteAuthor: "Buddha",
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up.",
    quoteAuthor: "Vince Lombardi",
  },
  {
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    quoteAuthor: "Eleanor Roosevelt",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    quoteAuthor: "Albert Einstein",
  },
  {
    quote: "The true sign of intelligence is not knowledge but imagination.",
    quoteAuthor: "Albert Einstein",
  },
];

const quote = document.querySelector(".quote-container__quote-marks");
const quoteAuthor = document.querySelector(".quote-container__author");
const quoteBtn = document.querySelector(".quote-container__btn");

quoteBtn.addEventListener("click", renderQuote);

function getRandomQuote() {
  let quoteInfo = {};

  randomNum = Math.floor(Math.random() * quotes.length);
  const generatedQuote = quotes[randomNum].quote;
  const generatedQuoteAuthor = quotes[randomNum].quoteAuthor;

  quoteInfo = { generatedQuote, generatedQuoteAuthor };
  return quoteInfo;
}
function createQuote(generatedQuote, generatedQuoteAuthor) {
  quote.innerText = generatedQuote;
  generatedQuoteAuthor = "-- " + generatedQuoteAuthor + " --";
  quoteAuthor.innerText = generatedQuoteAuthor;
}
function renderQuote() {
  const quoteObj = getRandomQuote();
  createQuote(quoteObj.generatedQuote, quoteObj.generatedQuoteAuthor);
}

const interval = setInterval(renderQuote, 2000);
