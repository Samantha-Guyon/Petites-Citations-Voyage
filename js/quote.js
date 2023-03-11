const pageLinks = document.querySelectorAll('.page-link');

const quote = document.querySelector('#quote');
const author = document.querySelector('#author');

const quotes = [
    {
        quote : "« Rien ne développe l’intelligence comme les voyages »",
        author : "Émile Zola"
    },
    {
        quote : "« Plus je vais loin, plus je me rapproche de moi-même ! »",
        author : "Andrew Mc Carthy"
    },
    {
        quote : "« Rester, c’est exister. Voyager, c’est vivre. »",
        author : "Gustave Nadaud"
    },
    {
        quote : "« La vie est courte et le monde est vaste : explorer ! »",
        author : "Simon Raven"
    },
    {
        quote : "« De tous les livres, celui que je préfère est mon passeport. »",
        author : "Alain Borer"
    },
    {
        quote : "« La vie commence à la fin de votre zone de confort. »",
        author : "Neale Donald Walsch"
    },
    {
        quote : "« La vie est une aventure audacieuse ou rien du tout. »",
        author : "Hellen Keller"
    },
];

let currentQuoteIndex = 0;

pageLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (link.getAttribute('aria-label') === 'Next') {
      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    } else if (link.getAttribute('aria-label') === 'Previous') {
      currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    } else {
      const pageNumber = parseInt(link.textContent);
      currentQuoteIndex = (pageNumber - 1) % quotes.length;
    }
    quote.textContent = quotes[currentQuoteIndex].quote;
    author.textContent = quotes[currentQuoteIndex].author;
  });
});



