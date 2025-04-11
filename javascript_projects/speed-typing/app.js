const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';

async function getRandomQuote() {
    try {
        const response = await fetch(RANDOM_QUOTE_API_URL);  // Wait for the response
        const data = await response.json();  // Wait for JSON parsing
        return data.content;  // Return the quote
    } catch (error) {
        console.error('Error fetching quote:', error);  // Handle any errors that might occur
    }
}

async function renderNewQuote() {
    const quote = await getRandomQuote();  // Wait for the quote to be fetched
}

renderNewQuote();
