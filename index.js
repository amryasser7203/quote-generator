document.getElementById("quoteButton").addEventListener("click", function () {
    const quotes = [
        { "quote": "Be yourself; everyone else is already taken.", "author": "Oscar Wilde" },
        { "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "author": "Albert Einstein" },
        { "quote": "So many books, so little time.", "author": "Frank Zappa" },
        { "quote": "Act as if what you do makes a difference. It does.", "author": "William James" },
        { "quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt" },
        { "quote": "When you have a dream, you've got to grab it and never let go.", "author": " Carol Burnett" },
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];

    document.getElementById("quoteDisplay").innerText = `"${randomQuote.quote}"`;
    document.getElementById("authorDisplay").innerText = `- ${randomQuote.author}`;
});
