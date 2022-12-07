const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// show new quote: picked at random from a list of 8,261
function newQuote () {
    // pick a random quote from the apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // checks for author
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // check quote length to determine style
    if (quote.text.legth > 50) {
        quote.Text.classList.add('long-quote');
    } else {
        quoteText.classList.remove
    }
    quoteText.textContent = quote.text;
}

// get quotes from api
async function getQuotes() {                         // asynchronous run any time and will not prevent page loads  
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {                                           // "try catch" statement: attempt to complete fetch request, if 400, then catch error.                               
        const response = await fetch(apiUrl);      // "await": the 'const' will not populate untill data fetched from API.
        apiQuotes = await response.json();
        newQuote();
    }   catch (error) {
        //catch error here
    }   
 }

// tweet a quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

 // on load
getQuotes();
