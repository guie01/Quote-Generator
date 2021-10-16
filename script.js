
let arrQuotes = [];
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const quoteGenerate = document.getElementById('generate-btn');
const quoteTwitter = document.getElementById('twitter-btn');
const loader = document.getElementById('loader')

let loading = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

let complete = () => {
    loader.hidden = true;
    quoteContainer.hidden = false;
}


let newQuote = () => {

    loading();

    const quote = arrQuotes[Math.floor(Math.random() * arrQuotes.length)];

    if (!quote.author) {
        quoteAuthor.textContent = 'Unknown'
    } else {
        quoteAuthor.textContent = quote.author;
    }

    quoteText.textContent = quote.text
    complete();
}


let getQuotes = async () => {

    loading();

    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        arrQuotes = await response.json();
        newQuote(); 
    } catch (error) {
    
    }
}


let twitterBtn = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank')
} 



quoteGenerate.addEventListener('click', newQuote);
quoteTwitter.addEventListener('click', twitterBtn)

getQuotes();






















